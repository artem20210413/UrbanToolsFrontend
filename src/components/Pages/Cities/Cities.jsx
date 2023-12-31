import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../layouts/CaseMenu/CaseMenu";
import React, {useEffect, useState} from "react";
import CityBlock from "../../UI/CityBlock/CityBlock";
import axios from "axios";
import {GET_CITIES} from "../../../config/api";
import styles from "./Cities.module.css";

export default function Cities() {


    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        try {
            const response = await axios.get(`${GET_CITIES}`);
            console.log('API get scales response:', response.data);
            setCities(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    return (
        <div>

            <Header/>
            <div className={'content-top content-bottom content-mini-body content-body-height'}>
            <CaseMenu/>
                <div className={styles.container}>
                    {cities.map((item, index) => (
                        <div className={styles.city}>
                            <CityBlock city={item}/>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
