import React, {useState, useEffect} from 'react';
import "../../../layouts/AdminPanel/Layout";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";
import {IMAGE_FORMATS} from "../../../../config/settings";
import axios from "axios";
import {
    DEFAULT_HEADERS_AND_BEARER_TOKEN,
    SAVE_CITY,
    SEARCH_CITY_BY_ID
} from "../../../../config/api";
import {getItemWithExpiry} from "../../../Helpers/LocalStorageHelper";
import {useParams} from "react-router-dom";

export default function FormCity() {

    const {id} = useParams();
    const [city, setCity] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
        latitude: '',
        longitude: '',
        latitude_longitude: '',
        location: '',
        image: null,
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // console.log('ID кейса из URL:', id);
    useEffect(() => {
        setLoading(true);
        getCityById(id)

    }, []);

    async function getCityById(cityId) {
        if (!cityId) {
            return;
        }
        try {
            const response = await axios.get(`${SEARCH_CITY_BY_ID}${cityId}`);
            // console.log('API SEARCH_CITY_BY_ID response:', response.data);
            const locCity = response.data.data;
            setCity(locCity);

            setFormData({
                id: locCity.id,
                name: locCity.name,
                description: locCity.description,
                location: locCity.location,
                latitude: locCity.latitude,
                longitude: locCity.longitude,
                latitude_longitude: `${locCity.latitude}, ${locCity.longitude}`,
            });
            setLoading(false);

        } catch (error) {
            console.error('API SEARCH_CITY_BY_ID error:', error);
        }
    }

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        const updatedFormData = {...formData};

        if (name === 'latitude_longitude') {
            const [latitude, longitude] = value.split(', ');
            updatedFormData['latitude'] = latitude;
            updatedFormData['longitude'] = longitude;
        }
        if (name === 'image') {
            updatedFormData[name] = files[0];
        } else {
            updatedFormData[name] = value;
        }
        // console.log(updatedFormData);
        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitted form:', formData);
        try {
            const token = getItemWithExpiry('token');
            const headers = DEFAULT_HEADERS_AND_BEARER_TOKEN(token);
            const response = await axios.post(SAVE_CITY, formData, {headers: headers,});
            const res = response.data;
            // console.log('res:', res);
            if (res.success) {
                setSuccessMessage('Success');
                setErrorMessage('');
                window.location.href = '/administrator/city';
            } else {
                console.log('error:', res);
                alert('error');
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
                // alert(error.response.data.error.message);
            } else {
                setErrorMessage('An error occurred');
                setSuccessMessage('');
                // alert('An error occurred');
            }
        }
    };

    return (
        <div>
            <AdminHeader/>
            <div>
                <div className="container">
                    <h1 className="mt-5">Form city</h1>{loading && id ? (
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
                            <label htmlFor="description" className="form-label">Description:</label>
                            <textarea
                                style={{height: '200px'}}
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
                                placeholder="47.5629644119970000, 7.5891713423267000"
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
                                placeholder="Switzerland Basel-Stadt"
                                value={formData.location}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image" className="form-label">Image:</label>
                            <input
                                type="file"
                                className="form-control"
                                id="image"
                                name="image"
                                accept={IMAGE_FORMATS}
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
