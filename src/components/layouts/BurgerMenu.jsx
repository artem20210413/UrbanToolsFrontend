import styles from './BurgerMenu.module.css'
import SvgBurgerMenu from "../svg/auxiliary/SvgBurgerMenu";
import {useState} from "react";
import SvgClose from "../svg/auxiliary/SvgClose";
import CustomNav from "../UI/Nav/CustomNav";

function BurgerMenu() {
    const [isExpanded, setExpanded] = useState(true);

    const clickMenu = () => {
        setExpanded(!isExpanded);
    };

    return (
        <div className={`${styles.item}`}>
            <div onClick={clickMenu}>
                <SvgBurgerMenu/>
            </div>
            <div className={`${styles.backMenu} ${isExpanded ? styles.menuShow : ''}`} onClick={clickMenu}></div>
            <div className={`${styles.menu} ${isExpanded ? styles.menuShow : ''}`}>
                <div className={styles.closeButton} onClick={clickMenu}>
                    <SvgClose/>
                </div>
                <div className={styles.menuNav}>
                    <CustomNav/>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
