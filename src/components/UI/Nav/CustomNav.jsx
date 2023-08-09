import React from 'react';

export default function CustomNav() {
    const handleLiClick = (event, path) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки
        window.location.href = path; // Редирект на указанный путь
    };

    return (
        <div>
            <nav className={`font-menu-b`}>
                <ul>
                    <li onClick={(event) => handleLiClick(event, '/')} className={'pointer'}>
                        <a href="/">INFO</a>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/cases')} className={'pointer'}>
                        <a href="/cases">CASES</a>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/map')} className={'pointer'}>
                        <a href="/map">MAP</a>
                    </li>
                    <li onClick={(event) => handleLiClick(event, '/contact')} className={'pointer'}>
                        <a href="/contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
