import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {SEARCH_CASE_BY_ID} from "../../../config/api";
import styles from './CaseInfo.module.css'
import SvgBack from "../../svg/auxiliary/SvgBack";
import ImagesSlider from "../../UI/imagesSlider/ImagesSlider";


export default function CaseInfo(props) {

    const {id} = useParams();
    const [data, setData] = useState([]);
    const url = SEARCH_CASE_BY_ID

    useEffect(() => {
        fetchData();
    }, []);
    const goBack = () => {
        window.history.back();
    };

    async function fetchData() {
        try {
            const response = await axios.get(`${url}${id}`);
            console.log('API response:', response.data);
            setData(response.data.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }


    return (
        <div>
            <Header/>
            <CaseMenu/>
            <div className={'content-top content-bottom content-body'}>
                <div className={styles.content}>
                    <div className={styles.block}>
                        <img className={styles.mainImg} src={data.image_main_path} alt={data.name}/>
                    </div>
                    <div className={` ${styles.block} font-text-small`}>
                        <div className={styles.buttonBack} onClick={goBack}>
                            <SvgBack/> back
                        </div>
                        <div>
                            <h1 className={'font-title-b'}>{data.name}</h1>
                        </div>
                        <div className={styles.info}>
                            <p><span className={'font-text-large-b'}>Cluster<span
                                className={`accent`}>:</span></span>
                                <span
                                    className={`${styles.indent} font-text-large`}>{data.cluster?.name ?? 'Default cluster name'}</span>
                            </p>
                            <p><span className={'font-text-large-b'}>Case<span
                                className={`accent`}>:</span></span> <span
                                className={`${styles.indent} font-text-large`}>{data.name}</span></p>

                            <p><span className={'font-text-large-b'}>Location on map<span
                                className={`accent`}>:</span></span> <span
                                className={`${styles.indent} font-text-large`}>{data.location}</span></p>

                        </div>
                    </div>

                    <div className={`${styles.block} ${styles.blockDescription} font-text`}
                         dangerouslySetInnerHTML={{__html: data.description}}/>
                    <div className={`${styles.block} ${styles.blockBottom}`}>
                        <ImagesSlider images={data.images}/>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}
