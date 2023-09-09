import React, {useState} from 'react';
import "../../../layouts/AdminPanel/Layout";
import axios from 'axios';
import {DEFAULT_HEADERS, LOGIN} from "../../../../config/api";
import {setItemWithExpiry} from '../../../Helpers/LocalStorageHelper'
import {AUTHORIZATION_LIFE} from "../../../../config/settings";

export default function LoginForm() {
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });


    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN, formData, {DEFAULT_HEADERS});
            const res = response.data;
            console.log(res);
            if (res.success) {
                const {token} = res.data;
                setItemWithExpiry('token', token, AUTHORIZATION_LIFE ?? 120); // set the authorization lifetime, if there is no config then 2 hours (120 min)
                setSuccessMessage('Success');
                setErrorMessage('');
                window.location.href = '/administrator';
            } else {
                setErrorMessage(res.error.message);
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage(error.response.data.error.message);
            setSuccessMessage('');
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={handleSubmit}>
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
                                    <label htmlFor="login" className="form-label">Login</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="login"
                                        name="login"
                                        value={formData.login}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className={'text-center'}>
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
