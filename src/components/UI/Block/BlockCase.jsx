import React, {useEffect, useState} from 'react';
import styles from './BlockCase.module.css'
import {Link} from "react-router-dom";

// import axios from 'axios'; // Импортируйте axios
export default function BlockCase(props) {
    const {data} = props;

    function redirect() {
    }

    return (
        <Link to={`/case/${data.id}`} className={styles.blockCase}>
            <img className={styles.blockImg} src={data.image_main_path} alt={data.name}/>
            <div className={styles.blockHeader}>
                <h2 className={'font-menu-b'}>{data.name}</h2>
            </div>
        </Link>
    );
}

