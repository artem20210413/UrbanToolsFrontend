import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from "./Contact.module.css"
import React from "react";

import MapUI from "../../UI/Map/MapUI";

export default function Contact() {

    const locations = [
        {lat: 47.37721062995981, lng: 8.507874197130002}
    ];
    return (
        <div>

            <Header/>
            <div className={`content-top content-bottom content-body content-body-height ${styles.main}`}>
                <div className={`${styles.item}`}>
                    <div className={`${styles.block}`}>
                        <div className={styles.center}>
                            <div>
                                <p className={'font-title-b'}>Address<span className={`accent`}>:</span></p>

                                <p className={`font-text`}>Drees & Sommer Schweiz AG,</p>
                                <p className={`font-text`}>Aemtlerstrasse 201, 8003 Zürich</p>
                            </div>
                            <div>
                                <p className={'font-title-b'}>Contact and information<span
                                    className={`accent`}>:</span>
                                </p>
                                <p className={`font-text-b`}>Dr. Haris Piplas</p>
                                <p className={`font-text accent`}>haris.piplas@dreso.com</p>
                                <p className={`font-text-b`}>Michael Beckert</p>
                                <p className={`font-text accent`}>michael.beckert@dreso.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.block}`}>
                        <MapUI locations={locations}/> 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
