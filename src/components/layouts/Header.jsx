import styles from './Header.module.css'

// import React, {useState} from "React";
import Search from "../UI/Input/Search";
import BurgerMenu from "./BurgerMenu";
import SvgLogo_257_49 from "../svg/logo/SvgLogo_257_49";
import SvgLogo_144_49 from "../svg/logo/SvgLogo_144_49";
import CustomNav from "../UI/Nav/CustomNav";
import Home from "../Pages/Home/Home";

function Header() {
    const currentPath = window.location.pathname;

    const isHome = currentPath === '/'
    const goToHome = () => {
        if (!isHome) {
            window.location.href = '/';
        }
    };

    return (
        <div className={styles.item}>
            <header>
                <div>
                    <BurgerMenu/>
                </div>
                <div className={`${styles.logo} ${!isHome ? 'pointer' : ''}`} onClick={goToHome}>
                    <SvgLogo_257_49/>
                    <SvgLogo_144_49/>
                </div>

                <div className={styles.search}>
                    <Search/>
                </div>
                <div className={styles.nav}>
                    <CustomNav/>
                </div>
            </header>
        </div>
    );
}

export default Header