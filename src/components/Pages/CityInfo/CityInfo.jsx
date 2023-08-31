import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {Link, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SEARCH_CASE_BY_CITY, SEARCH_CITY_BY_ID} from "../../../config/api";
import styles from './CityInfo.module.css'
import MapUI from "../../UI/Map/MapUI";


export default function CityInfo(props) {

    const {id} = useParams();
    const [city, setCity] = useState([]);
    const [cases, setCases] = useState([]);
    const url = SEARCH_CITY_BY_ID

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        getCityById();
        getCasesById();
    }

    async function getCityById() {
        try {
            const response = await axios.get(`${url}${id}`);
            console.log('API get city response:', response.data);
            setCity(response.data.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }

    async function getCasesById() {
        try {
            const response = await axios.get(`${SEARCH_CASE_BY_CITY}${id}`);
            console.log('API get cases response:', response.data);
            setCases(response.data.data);
        } catch (error) {
            console.error('API get cases error:', error);
        }
    }

    const locations = cases.map(caseItem => ({
        id: caseItem.id,
        lat: parseFloat(caseItem.latitude),
        lng: parseFloat(caseItem.longitude),
        name: caseItem.name,
        location: caseItem.location,
    }));

    return (
        <div>
            <Header/>
            {/*<div className={`content-top content-bottom content-mini-body ${styles.content}`}>*/}
            <div className={`${styles.content}`}>
                {/*<div className={styles.content}>*/}

                <div className={styles.blockMap}>

                    <MapUI locations={locations} url={'case/'}/>

                    <div className={`${styles.blockCases}`}>
                        {cases.map((item, index) => (
                            <div className={`${styles.cese}`}>

                                <Link to={`/case/${item.id}`} className={`${styles.link} font-text-b customHover`}>
                                    {item.name}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`${styles.blockInfo}`}>
                    <div className={`${styles.blockImg}`}>
                        <img className={`full-img`} src={city.image_main_path} alt={city.name}/>
                    </div>
                    <div className={`${styles.blockInfoContent}`}>
                        <h2 className={'font-title-b'}>{city.name}</h2>
                        <div className={`${styles.blockInfoDescription} font-text`}>
                            <p>{city.description}</p>
                        </div>
                    </div>
                </div>

                {/*</div>*/}
            </div>
            <Footer/>
        </div>
    );
}
