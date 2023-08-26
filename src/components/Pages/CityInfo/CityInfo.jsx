import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SEARCH_CASE_BY_ID} from "../../../config/api";
import styles from './CityInfo.module.css'
import SvgArrow from "../../svg/auxiliary/SvgArrow";
import ImagesSlider from "../../UI/imagesSlider/ImagesSlider";


export default function CityInfo(props) {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const url = SEARCH_CASE_BY_ID

    useEffect(() => {
        fetchData();
    }, []);
    const goBack = () => {
        window.history.back();
    };

    const goMap = () => {
        alert('go to map')
    };

    async function fetchData() {
        try {
            const response = await axios.get(`${url}${id}`);
            // console.log('API response:', response.data);
            setData(response.data.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }


    return (
        <div>
            <Header/>
            <CaseMenu/>
            <div className={'content-bottom content-body'}>
                City info by id: {id}
            </div>
            <Footer/>
        </div>
    );
}
