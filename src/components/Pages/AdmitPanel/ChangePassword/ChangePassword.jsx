import React, {useState} from 'react';
import "../../../layouts/AdminPanel/Layout";
import axios from "axios";
import {CHANGE_PASSWORD, DEFAULT_HEADERS_AND_BEARER_TOKEN} from "../../../../config/api";
import {getItemWithExpiry} from "../../../Helpers/LocalStorageHelper";
import AdminHeader from "../../../layouts/AdminPanel/AdminHeader";

export default function ChangePassword() {
    const [formData, setFormData] = useState({
        oldPassword: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage('Password mismatch.');
            setSuccessMessage('');
            return;
        }

        try {
            const token = getItemWithExpiry('token');
            const headers = DEFAULT_HEADERS_AND_BEARER_TOKEN(token);
            const response = await axios.post(CHANGE_PASSWORD, formData, {headers: headers,});
            if (response.data.success) {
                setSuccessMessage('Password changed successfully.');
                setErrorMessage('');
                setFormData({
                    oldPassword: '',
                    password: '',
                    confirmPassword: '',
                });
            } else {
                setErrorMessage('Failed to change password.');
                setSuccessMessage('');
                // alert('Failed to change password.')
            }
        } catch (error) {
            // setErrorMessage('Ошибка при изменении пароля.');
            setErrorMessage('Failed to change password!');
            setSuccessMessage('');
        }
    };

    return (
        <div>
            <AdminHeader/>
            <div className="container mt-5">
                <h2>Change password</h2>
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
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="oldPassword" className="form-label">
                            Old Password:
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="oldPassword"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            New Password:
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="form-control"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirm the password:
                        </label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                            Change password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}