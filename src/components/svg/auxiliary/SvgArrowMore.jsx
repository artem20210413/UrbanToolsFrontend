import React from "react";

function SvgArrowMore(props) {
    const {isExpanded} = props;

    return (
        <div>
            <svg
                width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{transform: isExpanded ? 'rotate(-90deg)' : 'rotate(0deg)'}}>
                <path d="M13.1 11L11 13.1L31.6 33.7H12.7V36.7H36.7V12.7H33.7V31.6L13.1 11Z"/>
            </svg>
        </div>
    );
}

export default SvgArrowMore