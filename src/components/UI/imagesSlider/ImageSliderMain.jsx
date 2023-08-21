import React from "react";
import styles from "./ImagesSlider.module.css";

export default function ImageSliderMain({ image }) {
    return (
        <div className={styles.mainImage}>
            <img src={image} alt="Main" />
        </div>
    );
}
