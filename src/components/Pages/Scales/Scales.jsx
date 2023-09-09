import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../layouts/CaseMenu/CaseMenu";
import React, {useEffect, useState} from "react";
import {GET_CASE, GET_SCALES} from "../../../config/api";
import axios from "axios";
import styles from "./Scales.module.css"
import BlockCase from "../../UI/CaseBlock/BlockCase";

export default function Scales() {

    const [scales, setScales] = useState([]);
    const [cases, setCases] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function getScales() {
        try {
            const response = await axios.get(`${GET_SCALES}`);
            console.log('API get scales response:', response.data);
            setScales(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    async function getCases() {
        try {
            const response = await axios.get(`${GET_CASE}`);
            console.log('API get cases response:', response.data);
            setCases(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    async function fetchData() {
        getScales();
        getCases();
    }


    return (
        <div>
            <Header/>
            <div className={'content-top content-bottom content-mini-body content-body-height'}>
            <CaseMenu/>
                <div className={`${styles.item}`}>
                    {scales.map((s) => (
                        <div key={s.id} className={`${styles.scales}`}>
                            <div className={`${styles.scalesHeader} font-title-b`}>
                                {s.name}
                            </div>
                            <div className={styles.cases}>
                                {cases.map((c, index) => {
                                    if (c.cluster.id === s.id) {
                                        return (
                                            <div key={c.id} className={styles.container}>
                                                <BlockCase data={c}/>
                                            </div>

                                        );
                                    }
                                    return null;
                                })} </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
