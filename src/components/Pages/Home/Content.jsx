import React, {useState} from "react";
import styles from './Content.module.css'
import Main from "./Main";

function Content() {


    return (
        <div className={styles.item}>
            {/*<Menu/>*/}
            <Main/>
        </div>
    );
}

export default Content