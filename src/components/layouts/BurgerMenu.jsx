import styles from './BurgerMenu.module.css'
import SvgBurgerMenu from "../svg/auxiliary/SvgBurgerMenu";
import {useState} from "react";
import SvgClose from "../svg/auxiliary/SvgClose";

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
                    <nav>
                        <ul className={`font-menu-b`}>
                            <li><a href="#">INFO</a></li>
                            <li><a href="#">CASES</a></li>
                            <li><a href="#">MAP</a></li>
                            <li><a href="#">CONTACT</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;
