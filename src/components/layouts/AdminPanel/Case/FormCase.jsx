import React, {useState, useEffect} from 'react';
import "../Layout";
import AdminHeader from "../AdminHeader";
import {IMAGE_FORMATS} from "../../../../config/settings";
import axios from "axios";
import {DEFAULT_HEADERS_AND_BEARER_TOKEN, GET_CITIES, GET_SCALES, SAVE_CASE} from "../../../../config/api";
import {getItemWithExpiry, setItemWithExpiry} from "../../../Helpers/LocalStorageHelper";

export default function FormCase() {

    const [scales, setScales] = useState([]);
    const [cities, setCities] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        cluster_id: 3,
        city_id: '',
        description: '',
        latitude: '',
        longitude: '',
        latitude_longitude: '',
        location: '',
        imageMain: null,
        images: [],
    });

    useEffect(() => {
        // При изменении значений latitude_longitude разделите их на две части
        getCities()
        getScales()
        if (formData.latitude_longitude) {
            const [latitude, longitude] = formData.latitude_longitude.split(', ');
            setFormData((prevData) => ({
                ...prevData,
                latitude,
                longitude,
            }));
        }
    }, [formData.latitude_longitude]);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        const updatedFormData = {...formData};

        if (name === 'images') {
            // updatedFormData[name] = [...files];
            // updatedFormData[name] = Array.from(files).map(file => file);
            updatedFormData[name] = files[0];
            updatedFormData[name] = files[1];
            updatedFormData[name] = files[2];
            // updatedFormData[name] = Array.from(files);
        } else if (name === 'latitude_longitude') {
            updatedFormData[name] = value;
        } else if (name === 'imageMain') {
            console.log(files);
            updatedFormData[name] = files[0];
        } else {
            updatedFormData[name] = value;
        }

        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Отправьте данные на сервер или выполните другие необходимые действия
        console.log('Submitted form:', formData);


        try {
            const token = getItemWithExpiry('token');
            const headers = DEFAULT_HEADERS_AND_BEARER_TOKEN(token);
            const response = await axios.post(SAVE_CASE, formData, {headers: headers,});
            const res = response.data;
            console.log(res);
            if (res.success) {
                // const {token} = res.data;
                console.log('success');
            } else {
                console.log('error');
                // alert(res.error.message);
                alert(res);
            }
        } catch (error) {
            // alert(error.response.data.message);
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = Object.values(error.response.data.errors)
                    .map((messages) => messages.join('\n'))
                    .join('\n    ');

                alert(`Errors: \n    ${errorMessages}`);
            } else if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
                alert(error.response.data.error.message);
            } else {
                alert('An error occurred');
            }
        }
    };


    async function getCities() {
        try {
            const response = await axios.get(`${GET_CITIES}`);
            console.log('API get scales response:', response.data);
            setCities(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }


    async function getScales() {
        try {
            const response = await axios.get(`${GET_SCALES}`);
            console.log('API get scales response:', response.data);
            setScales(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    return (
        <div>
            <AdminHeader/>
            <div>
                <div className="container">
                    <h1 className="mt-5">Form case</h1>
                    <form onSubmit={handleSubmit} className="mt-3">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cluster_id" className="form-label">Cluster:</label>
                            <select
                                className="form-select"
                                id="cluster_id"
                                name="cluster_id"
                                value={formData.cluster_id}
                                onChange={handleChange}
                            >
                                <option value="">Select a cluster</option>
                                {scales.map((scale) => (
                                    <option key={scale.id} value={scale.id}>
                                        {scale.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="city_id" className="form-label">City:</label>
                            <select
                                className="form-select"
                                id="city_id"
                                name="city_id"
                                value={formData.city_id}
                                onChange={handleChange}
                            >
                                <option value="">Select a city</option>
                                {cities.map((city) => (
                                    <option key={city.id} value={city.id}>
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea
                                className="form-control"
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="latitude_longitude" className="form-label">Latitude / Longitude:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="latitude_longitude"
                                name="latitude_longitude"
                                placeholder="50.401637527582224, 30.52637712550372"
                                value={formData.latitude_longitude}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="imageMain" className="form-label">Main image:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="imageMain"
                                name="imageMain"
                                accept={IMAGE_FORMATS}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="images" className="form-label">Additional images:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="images"
                                name="images[]"
                                accept={IMAGE_FORMATS}
                                multiple
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="w-25 btn btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
