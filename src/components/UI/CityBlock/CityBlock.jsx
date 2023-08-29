import React, {useEffect, useState} from 'react';
import styles from './CityBlock.module.css'
import {Link} from "react-router-dom";
import axios from "axios";
import {GET_CITIES, SEARCH_CASE_BY_CITY} from "../../../config/api";

// import axios from 'axios'; // Импортируйте axios
export default function CityBlock(props) {
    const {city} = props;
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);


    async function fetchData() {
        try {
            const response = await axios.get(`${SEARCH_CASE_BY_CITY}${city.id}`);
            console.log('API get scales response:', response.data);
            setCases(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    return (
        <div className={styles.content}>
            {/*City*/}
            <div className={`${styles.blockTitel} ${styles.block}`}>
                <Link to={`/map/city/${city.id}`} className={`${styles.cityTitle} font-title`}>
                    <p className={`customHover`}>{city.name}</p>
                </Link>
                {cases.map((item, index) => (
                    <Link to={`/case/${item.id}`} className={`${styles.cese} font-text-b customHover`}>
                        {item.name}
                    </Link>
                ))}

            </div>

            <div className={`${styles.block}`}>
                <div className={`${styles.blockImg}`}>
                    <img className={`full-img`} src={city.image_main_path} alt={city.name}/>
                </div>
            </div>
        </div>
    );
}

