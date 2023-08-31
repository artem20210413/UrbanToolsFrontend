import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from "./Map.module.css"
import MapUI from "../../UI/Map/MapUI";
import {useEffect, useState} from "react";
import axios from "axios";
import {GET_CITIES} from "../../../config/api";

export default function Map() {

    const [cities, setCities] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        getCities();
    }

    async function getCities() {
        try {
            const response = await axios.get(`${GET_CITIES}`);
            console.log('API get cities response:', response.data);
            setCities(response.data.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }

    const locations = cities.map(cityItem => ({
        id: cityItem.id,
        lat: parseFloat(cityItem.latitude),
        lng: parseFloat(cityItem.longitude),
        name: cityItem.name,
        location: cityItem.location,
    }));
    return (
        <div>
            <Header/>
            <div className={`content-bottom content-top ${styles.item}`}>
                <div className={`${styles.content}`}>
                    {/*<h1>MAP</h1>*/}
                    <MapUI locations={locations} url={'map/city/'}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
