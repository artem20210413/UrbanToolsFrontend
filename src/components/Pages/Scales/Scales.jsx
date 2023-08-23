import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import CaseMenu from "../../UI/CaseMenu/CaseMenu";
import React, {useEffect, useState} from "react";
import {GET_CASE, GET_SCALES} from "../../../config/api";
import axios from "axios";
import styles from "./Scales.module.css"
import BlockCase from "../../UI/Block/BlockCase";

export default function Scales() {

    const [scales, setScales] = useState([]);
    const [cases, setCases] = useState([]);
    const urlGetScales = GET_SCALES
    const urlGetCases = GET_CASE

    useEffect(() => {
        fetchData();
    }, []);

    async function getScales() {
        try {
            // console.log('API get scales');
            const response = await axios.get(`${urlGetScales}`);
            console.log('API get scales response:', response.data);
            setScales(response.data.data);
        } catch (error) {
            console.error('API get scales error:', error);
        }
    }

    async function getCases() {
        try {
            // console.log('API get cases');
            const response = await axios.get(`${urlGetCases}`);
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
            <CaseMenu/>
            <div className={'content-top content-bottom content-body'}>
                <div className={`${styles.item}`}>
                    {scales.map((s) => (
                        <div key={s.id} className={`${styles.scales}`}>
                            <div className={`${styles.scalesHeader} font-title-b`}>
                                {s.name}
                            </div>
                            <div className={styles.cases}>
                                {cases.map((c, index) => {
                                    // if (c.cluster.id === s.id) {
                                    if (true) {
                                        return (
                                            <div key={c.id} className={styles.container}>
                                                <BlockCase data={c}/>
                                            </div>

                                        );
                                    }
                                    return null; // Ничего не рендерим, если условие не выполняется
                                })}


                                {cases.map((c, index) => {
                                    // if (c.cluster.id === s.id) {
                                    if (true) {
                                        return (
                                            <div key={c.id} className={styles.container}>
                                                <BlockCase data={c}/>
                                            </div>

                                        );
                                    }
                                    return null; // Ничего не рендерим, если условие не выполняется
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
