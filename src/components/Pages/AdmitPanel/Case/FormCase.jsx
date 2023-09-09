import React, {useState, useEffect} from 'react';
import "../../../layouts/AdminPanel/Layout";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";
import {IMAGE_FORMATS} from "../../../../config/settings";
import axios from "axios";

import {
    DEFAULT_HEADERS_AND_BEARER_TOKEN,
    GET_CITIES,
    GET_SCALES,
    SAVE_CASE, SEARCH_CASE_BY_ID,
} from "../../../../config/api";
import {getItemWithExpiry} from "../../../Helpers/LocalStorageHelper";
import {useParams} from "react-router-dom";

export default function FormCase() {

    const {id} = useParams();
    console.log('ID кейса из URL:', id);

    const [loading, setLoading] = useState(true);
    const [scales, setScales] = useState([]);
    const [cities, setCities] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        id: null,
        name: '',
        cluster_id: null,
        city_id: null,
        description: '',
        latitude: '',
        longitude: '',
        latitude_longitude: '',
        location: '',
        imageMain: null,
        images: [],
    });

    useEffect(() => {
        setLoading(true);
        getCities();
        getScales();
        getCaseById();

    }, []);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        const updatedFormData = {...formData};

        if (name === 'latitude_longitude') {
            const [latitude, longitude] = value.split(', ');
            updatedFormData['latitude'] = latitude;
            updatedFormData['longitude'] = longitude;
            updatedFormData[name] = value;
        } else if (name === 'imageMain') {
            console.log(files);
            updatedFormData[name] = files[0];
        } else if (name === 'images') {
            updatedFormData[name] = files;
        } else {
            updatedFormData[name] = value;
        }

        setFormData(updatedFormData);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted form:', formData);

        try {
            const token = getItemWithExpiry('token');
            const headers = DEFAULT_HEADERS_AND_BEARER_TOKEN(token);
            const response = await axios.post(SAVE_CASE, formData, {headers: headers,});
            const res = response.data;
            console.log(res);
            if (res.success) {

                setSuccessMessage('Success');
                setErrorMessage('');
                window.location.href = '/administrator/case'
            } else {
                console.log('error: ', res);
                // alert('error');
            }
        } catch (error) {
            // alert(error.response.data.message);
            if (error.response && error.response.data && error.response.data.errors) {
                const errorMessages = Object.values(error.response.data.errors)
                    .map((messages) => messages.join('\n'))
                    .join('\n    ');

                setErrorMessage(errorMessages);
                setSuccessMessage('');

                // alert(`Errors: \n    ${errorMessages}`);
            } else if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {

                setErrorMessage(error.response.data.error.message);
                setSuccessMessage('');
            } else {
                setErrorMessage('An error occurred');
                setSuccessMessage('');
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

    async function getCaseById() {
        try {

            const response = await axios.get(`${SEARCH_CASE_BY_ID}${id}`);
            console.log('API SEARCH_CASE_BY_ID response:', response.data);
            const locCase = response.data.data;
            console.log(locCase);

            setFormData({
                id: locCase.id,
                cluster_id: locCase.cluster.id,
                city_id: locCase.city.id,
                name: locCase.name,
                description: locCase.description,
                location: locCase.location,
                latitude: locCase.latitude,
                longitude: locCase.longitude,
                latitude_longitude: `${locCase.latitude}, ${locCase.longitude}`,
            })
            setLoading(false);
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
                    {loading && id ? (
                    <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="mt-3">
                        {successMessage && (
                            <div className="alert alert-success" role="alert">
                                {successMessage}
                            </div>
                        )}
                        {errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {errorMessage}
                            </div>
                        )}
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
                            <label htmlFor="cluster_id" className="form-label">Scele:</label>
                            <select
                                className="form-select"
                                id="cluster_id"
                                name="cluster_id"
                                value={formData.cluster_id}
                                onChange={handleChange}
                            >
                                <option value="">Select an option...</option>
                                {scales.map((scale) => (
                                    <option key={scale.id} value={scale.id}
                                    >
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
                                <option value="">Select an option...</option>
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
                                style={{height: '400px'}}
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
                                name="images"
                                accept={IMAGE_FORMATS}
                                multiple
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" className="w-25 btn btn-primary">Send</button>
                        </div>
                    </form>
                )}
                </div>
            </div>
        </div>
    );
}
