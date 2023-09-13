import React, {useState, useEffect} from 'react';
import "../../../layouts/AdminPanel/Layout";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";
import {IMAGE_FORMATS} from "../../../../config/settings";
import axios from "axios";
import {
    DEFAULT_HEADERS_AND_BEARER_TOKEN,
    SAVE_CITY, SAVE_SCALE,
    SEARCH_CITY_BY_ID, SEARCH_SCALE_BY_ID
} from "../../../../config/api";
import {getItemWithExpiry} from "../../../Helpers/LocalStorageHelper";
import {useParams} from "react-router-dom";

export default function FormScale() {

    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        id: null,
        name: '',
        description: '',
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // console.log('ID кейса из URL:', id);
    useEffect(() => {
        setLoading(true);
        getScaleById(id)

    }, []);

    async function getScaleById() {
        if (!id) {
            return;
        }
        try {
            const response = await axios.get(`${SEARCH_SCALE_BY_ID}${id}`);
            // console.log('API SEARCH_CITY_BY_ID response:', response.data);
            const locScale = response.data.data;

            setFormData({
                id: locScale.id,
                name: locScale.name,
                description: locScale.description,
            });
            setLoading(false);

        } catch (error) {
            console.error('API SEARCH_SCALE_BY_ID error:', error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        const updatedFormData = {...formData};

        updatedFormData[name] = value;
        setFormData(updatedFormData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log('Submitted form:', formData);
        try {
            const token = getItemWithExpiry('token');
            const headers = DEFAULT_HEADERS_AND_BEARER_TOKEN(token);
            const response = await axios.post(SAVE_SCALE, formData, {headers: headers,});
            const res = response.data;
            // console.log('res:', res);
            if (res.success) {
                setSuccessMessage('Success');
                setErrorMessage('');
                window.location.href = '/administrator/scale';
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
        setLoading(false);
    };

    return (
        <div>
            <AdminHeader/>
            <div>
                <div className="container">
                    <h1 className="mt-5">Form scale</h1>
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
