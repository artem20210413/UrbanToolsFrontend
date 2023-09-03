import React, {useState} from 'react';
import "../Layout";
import axios from 'axios';
import {LOGIN} from "../../../../config/api"; // Импортируйте библиотеку axios

export default function LoginForm() {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN, formData, {headers});
            const res = response.data;
            console.log(res);
            if (res.success) {
                const {token} = res.data;
                localStorage.setItem('token', token);
                window.location.href = '/administrator';
            } else {
                alert(res.error.message);
            }
        } catch (error) {
            // console.log(error.response.data);
            alert(error.response.data.error.message);
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
