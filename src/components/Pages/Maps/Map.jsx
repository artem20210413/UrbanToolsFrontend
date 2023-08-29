import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import styles from "./Map.module.css"

export default function Map() {

    return (
        <div>
            <Header/>
            <div className={`content-bottom content-top ${styles.item}`}>
                <div className={`${styles.content}`}>
                    <h1>MAP</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
