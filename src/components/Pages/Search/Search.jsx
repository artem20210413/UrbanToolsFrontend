import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import {SEARCH_CASE} from "../../../config/api";
import BlockCase from "../../UI/Block/BlockCase";
import styles from './Search.module.css'

export default function Search() {
    const {search} = useParams();
    const [data, setData] = useState([]);

    const url = SEARCH_CASE;

    async function fetchData() {
        try {
            const response = await axios.get(`${url}${search}`);
            setData(response.data.data);
            console.log('API response:', response.data);
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
            <div className={'content'}>

                <div className={styles.item}>
                    <p><span> Search results:</span> {search} </p>

                    <div className={styles.block}>
                        {data.map((item, index) => (
                            <div className={styles.container}>
                                <BlockCase data={item}/>
                            </div>
                        ))}
                        {data.map((item, index) => (
                            <div className={styles.container}>
                                <BlockCase data={item}/>
                            </div>
                        ))}
                        {data.map((item, index) => (
                            <div className={styles.container}>
                                <BlockCase data={item}/>
                            </div>
                        ))}
                        {data.map((item, index) => (
                            <div className={styles.container}>
                                <BlockCase data={item}/>
                            </div>
                        ))}
                        {/*<h1>{search}</h1>*/}
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
