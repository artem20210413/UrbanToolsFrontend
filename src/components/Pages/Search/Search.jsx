import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {SEARCH_CASE} from "../../../config/api";
import BlockCase from "../../UI/CaseBlock/BlockCase";
import styles from './Search.module.css'

export default function Search() {
    const {search} = useParams();
    const [data, setData] = useState([]);

    const url = SEARCH_CASE;

    async function fetchData() {
        try {
            const response = await axios.get(`${url}${search}`);
            setData(response.data.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>

            <Header/>
            <div className={'content-top content-bottom content-body content-body-height'}>
                <div className={styles.item}>
                    <p><span className={'font-subtitle-b'}> Search results:</span>
                        <span className={`font-text-b ${styles.indent}`}>{search}</span></p>

                    <div className={styles.block}>
                        {data.map((item, index) => (
                            <div className={styles.container}>
                                <BlockCase data={item}/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
