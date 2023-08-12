import React, {useEffect, useState} from 'react';
import styles from './Search.module.css';
import SvgMagnifyingGlass from '../../svg/auxiliary/SvgMagnifyingGlass';
import {useParams} from 'react-router-dom';

// import axios from 'axios'; // Импортируйте axios
function Search() {
    const {search: defaultSearch} = useParams();
    const [search, setSearch] = useState(defaultSearch || '');

    function handleInputChange(event) {
        setSearch(event.target.value);
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleClick();
        }
    }

    function handleClick() {
        if (search.length >= 3) {
            window.location.href = `/search/${search}`;
        }
    }


    return (
        <div className={`${styles.item} font-text-small`}>
            <input
                type="text"
                placeholder="search"
                value={search}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button type="submit" onClick={handleClick}>
                <SvgMagnifyingGlass/>
            </button>
        </div>
    );
}

export default Search;

// import styles from './Search.module.css'
// import SvgMagnifyingGlass from "../../svg/auxiliary/SvgMagnifyingGlass";
// import {useParams} from "react-router-dom";
//
// function Search() {
//
//     const {search} = useParams();
//     // const [search, setSearch] = useState('');
//
//     // function handleInputChange(event) {
//     //     setSearch(event.target.value);
//     // }
//
//     return (
//         <div className={`${styles.item} font-text-small`}>
//             <input type="text" placeholder="search" value={search ?? ''}/>
//             <button type="submit">
//                 <SvgMagnifyingGlass/>
//             </button>
//         </div>
//     );
// }
//
// export default Search