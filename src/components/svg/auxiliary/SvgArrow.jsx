// import React from "react";
//
// export default function SvgBack() {
//
//     return (
//         <div>
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <g clip-path="url(#clip0_522_618)">
//                     <path d="M13.7 25.5L26.1 37.9L24 40L8 24L24 8L26.1 10.1L13.7 22.5H40V25.5H13.7Z" />
//                 </g>
//                 <defs>
//                     <clipPath id="clip0_522_618">
//                         <rect width="48" height="48" fill="white"/>
//                     </clipPath>
//                 </defs>
//             </svg>
//
//         </div>
//     );
// }

import React from "react";

export default function SvgArrow({ rotationAngle }) {
    const svgStyle = {
        transform: `rotate(${rotationAngle}deg)`,
        transition: "transform 0.3s ease-in-out"
    };

    return (
        <div className="svg-container">
            <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={svgStyle}
            >
                <g clipPath="url(#clip0_522_618)">
                    <path d="M13.7 25.5L26.1 37.9L24 40L8 24L24 8L26.1 10.1L13.7 22.5H40V25.5H13.7Z" />
                </g>
                <defs>
                    <clipPath id="clip0_522_618">
                        <rect width="48" height="48" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}
