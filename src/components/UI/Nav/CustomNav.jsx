import React from 'react';
import {Link, useLocation} from "react-router-dom";
import styles from './CustomNav.module.css'

export default function CustomNav() {
    const handleLiClick = (event, path) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        window.location.href = path; // Редирект на указанный путь
    };
    const location = useLocation();
    const isActive = (path) => {
        return location.pathname.includes(path) ? `${styles.fontActive}` : '';
    };
    return (
        <div>
            <nav className={`font-menu-b`}>
                <ul>
                    <li onClick={(event) => handleLiClick(event, '/home')}
                        className={`pointer ${isActive('/home')}`}>
                        <Link to="/home">INFO</Link>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/cases')}
                        className={`pointer ${isActive('/cases')}`}>
                        <Link to="/cases">CASES</Link>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/map')}
                        className={`pointer ${isActive('/map')}`}>
                        <Link to="/map">MAP</Link>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/contact')}
                        className={`pointer ${isActive('/contact')}`}>
                        <Link to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
