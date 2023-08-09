import styles from './Search.module.css'
import SvgMagnifyingGlass from "../../svg/auxiliary/SvgMagnifyingGlass";

function Search() {


    return (

        <div className={`${styles.item} font-text-small`}>
            <input type="text" placeholder="search"/>
            <button type="submit">
                <SvgMagnifyingGlass/>
            </button>
        </div>
    );
}

export default Search