import styles from './Search.module.css'
import SvgMagnifyingGlass from "../../svg/auxiliary/SvgMagnifyingGlass";
import {useParams} from "react-router-dom";

function Search() {

    const {search} = useParams();


    return (
        <div className={`${styles.item} font-text-small`}>
            <input type="text" placeholder="search" value={search ?? ''}/>
            <button type="submit">
                <SvgMagnifyingGlass/>
            </button>
        </div>
    );
}

export default Search