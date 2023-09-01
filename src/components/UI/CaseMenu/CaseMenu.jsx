import styles from './CaseMenu.module.css'
import {Link, useLocation} from "react-router-dom";
import React from "react";


export default function CaseMenu() {

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname.includes(path) ? `${styles.fontActive}` : '';
    };
    return (
        <div className={` content-top ${styles.item}`}>
            <div className={`content-body`}>
                <div className={`font-subtitle-b ${styles.header}`}>
                    <h2>SUBTITLE</h2>
                </div>
                <div className={`font-text ${styles.blockMainText}`}>
                    <div className={`${styles.blockText}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                    <div className={`${styles.blockText}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <nav className={`font-button ${styles.nav}`}>
                <ul className={`${styles}`}>
                    <li className={`pointer ${styles.blockButton} ${isActive('/scales')}`}>
                        <Link to="/cases/scales">SCALES</Link>
                    </li>
                    <li className={`pointer ${styles.blockButton} ${isActive('/cities')}` }>
                        <Link to="/cases/cities">CITIES</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
