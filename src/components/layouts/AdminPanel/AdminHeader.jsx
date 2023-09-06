// import React, {useState} from "React";

import {Link} from 'react-router-dom';

function Header() {

    const onLogout = () => {
        window.location.href = '/administrator/logout';
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container">
                <Link className="navbar-brand" to="/">Bck to app</Link>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/administrator/case">Case</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/administrator/city">City</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/administrator/users">User</Link>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="btn btn-danger" onClick={onLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header