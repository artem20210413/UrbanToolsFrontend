import styles from './CaseMenu.module.css'
import {Link} from "react-router-dom";
import React from "react";


export default function CaseMenu() {

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
            {/*<div className={`${styles.blockMainButton} ${styles.blockMainText}`}>*/}
            <nav className={`font-button ${styles.nav}`}>
                <ul className={`${styles}`}>
                    <li className={`pointer ${styles.blockButton}`}>
                        <Link to="/cases/clusters">CLUSTERS</Link>
                    </li>
                    <li className={`pointer ${styles.blockButton}`}>
                        <Link to="/cases/cities">CITIES</Link>
                    </li>
                </ul>
            </nav>
            {/*</div>*/}
        </div>
    );
}
