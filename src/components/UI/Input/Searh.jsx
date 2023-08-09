import styles from './Search.module.css'

function Search() {


    return (

        <div className={`${styles.item} font-text-small`}>
            <input type="text" placeholder="search"/>
            <button type="submit">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M20 17L19.5 17.5L17.8 15.8C18.5 14.7 19 13.4 19 12C19 8.1 15.9 5 12 5C8.1 5 5 8.1 5 12C5 15.9 8.1 19 12 19C13.4 19 14.7 18.6 15.8 17.8L17.5 19.5L17 20L24 27L27 24L20 17ZM7 12C7 9.2 9.2 7 12 7C14.8 7 17 9.2 17 12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12Z"
                        fill="#0E67EC"/>
                </svg>
            </button>
        </div>
    );
}

export default Search