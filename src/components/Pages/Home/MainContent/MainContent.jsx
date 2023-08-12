import React, {useRef, useState} from 'react';
import styles from './MainContent.module.css';
import SvgArrowMore from "../../../svg/auxiliary/SvgArrowMore";

function MainContent(props) {
    const {header, body, side} = props;
    const [isExpanded, setExpanded] = useState(false);
    const titleRef = useRef(null);

    const clickMore = () => {
        setExpanded(!isExpanded);
        setTimeout(() => {
            scrollToTitle();
        }, 150);
    };

    const scrollToTitle = () => {
        const titleTop = titleRef.current.offsetTop;
        window.scrollTo({
            top: titleTop - 64, // Прокрутить на 45px выше заголовка
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${styles.item} ${side % 2 === 0 ? styles.item_right : styles.item_left}`}>
            <div className={styles.content}>
                <div ref={titleRef} className={styles.title}>
                    <h2 className={'font-subtitle-b'}>{header}</h2>
                </div>
                <div className={`${styles.body} font-text`}>
                    {Object.keys(body).map((key, index) => (
                        <p key={key} style={{display: isExpanded || index === 0 ? 'block' : 'none'}}>
                            {body[key]}
                        </p>
                    ))}
                </div>
                <div className={`${styles.button_hide} font-text-small`} onClick={clickMore}>
                    <p>{isExpanded ? 'close' : 'more'}</p>
                    <SvgArrowMore isExpanded={isExpanded}/>
                </div>
            </div>
        </div>
    );
}

export default MainContent;
