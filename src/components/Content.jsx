import React, {useState} from "react";
import styles from './Content.module.css'
import Menu from "./layouts/Menu";
import Main from "./Pages/Main/Main";

function Content() {


    return (
        <div className={styles.item}>
            {/*<Menu/>*/}
            <Main/>
        </div>
    );
}

export default Content