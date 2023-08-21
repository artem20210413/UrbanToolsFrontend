import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from "./Contact.module.css"
import React from "react";

import mapAddress from '../../../media/map/mapAddress.png'

export default function Contact() {


    return (
        <div>

            <Header/>
            <div className={`content-top content-bottom content-body content-body-height`}>
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
                                <p className={`font-text-b`}>Dr. Haris Piplas,</p>
                                <p className={`font-text accent`}>haris.piplas@dreeso.com</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.block}`}>
                        <img className={`full-img`} src={mapAddress} alt="address map"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
