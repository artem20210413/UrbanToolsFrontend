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
        window.location.href = `/search/${search}`;
    }


    async function fetchData() {

        console.log(search);
        try {
            // const response = await axios.get(`YOUR_API_ENDPOINT?search=${search}`);
            // console.log('API response:', response.data);
        } catch (error) {
            console.error('API error:', error);
        }
    }

    useEffect(() => {
        fetchData(); // Вызовите fetchData при монтировании компонента
    }, []); // Пустой массив зависимостей означает, что эффект вызывается только один раз при монтировании


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