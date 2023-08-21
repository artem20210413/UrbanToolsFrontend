import React from "react";
import styles from "./ImagesSlider.module.css";

export default function ImageSliderThumbnails({ images, activeIndex, onThumbnailClick }) {
    return (
        <div className={styles.thumbnails}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${styles.thumbnail} ${index === activeIndex ? styles.active : ""}`}
                    onClick={() => onThumbnailClick(index)}
                >
                    <img src={image} alt={`Thumbnail ${index}`} />
                </div>
            ))}
        </div>
    );
}
