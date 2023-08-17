import React from 'react';
import {Link} from "react-router-dom";

export default function  CustomNav() {
    const handleLiClick = (event, path) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        window.location.href = path; // Редирект на указанный путь
    };

    return (
        <div>
            <nav className={`font-menu-b`}>
                <ul>
                    <li onClick={(event) => handleLiClick(event, '/')} className={'pointer'}>
                        <Link to="/"> INFO</Link>
                        {/*<a href="/">INFO</a>*/}
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/cases')} className={'pointer'}>
                        <Link to="/cases"> CASES</Link>
                        {/*<a href="/cases">CASES</a>*/}
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/map')} className={'pointer'}>
                        <Link to="/map"> MAP</Link>
                        {/*<a href="/map">MAP</a>*/}
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/contact')} className={'pointer'}>
                        <Link to="/contact"> CONTACT</Link>
                        {/*<a href="/contact">CONTACT</a>*/}
                    </li>
                </ul>
            </nav>
        </div>
    );
}
