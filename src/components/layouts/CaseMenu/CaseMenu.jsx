import styles from './CaseMenu.module.css'
import {Link, useLocation} from "react-router-dom";
import React from "react";
import IMG_2087 from "../../../media/sundry/IMG_2087.PNG"
import IMG_2086 from "../../../media/sundry/IMG_2086.PNG"
import IMG_2085 from "../../../media/sundry/IMG_2085.PNG"


export default function CaseMenu() {

    const location = useLocation();
    const isActive = (path) => {
        return location.pathname.includes(path) ? `${styles.fontActive}` : '';
    };
    return (
        <div className={` content-top ${styles.item}`}>
            <div className={`content-mini-body `}>
                {/*<div className={`font-subtitle-b ${styles.header}`}>*/}
                {/*    <h2>SUBTITLE</h2>*/}
                {/*</div>*/}
                <div className={`font-text ${styles.blockMainText}`}>
                    <div className={`${styles.blockText}`}>
                        <img src={IMG_2085} alt="Main"/>
                        <p>Building scale interventions primarily initiated by local communities, exemplify the
                            emergence of creative urban practices within the existing urban framework, driven by the
                            demand for communal spaces dedicated to leisure, recreation, and sports.</p>
                    </div>
                    <div className={`${styles.blockText}`}>
                        <img src={IMG_2087} alt="Main"/>
                        <p>Neighbourhood-scale intervention projects in urban areas are part of an urban policy
                            addressing issues on the community scale. These involve the introduction of infrastructure
                            projects that improve living conditions.</p>
                    </div>
                    <div className={`${styles.blockText}`}>
                        <img src={IMG_2086} alt="Main"/>
                        <p>City/regional-scale interventions, often in the form of urban plans or strategic projects,
                            can bring about substantial urban transformation. They showcase the implementation of
                            extensive urban expansion or compact development efforts.</p>
                    </div>
                </div>
            </div>
            <nav className={`font-button ${styles.nav}`}>
                <ul className={`${styles}`}>
                    <li className={`pointer ${styles.blockButton} `}>
                        <Link to="/cases/scales" className={`${isActive('/scales')}`}>SCALES</Link>
                    </li>
                    <li className={`pointer ${styles.blockButton} }`}>
                        <Link to="/cases/cities" className={`${isActive('/cities')}`}>CITIES</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
