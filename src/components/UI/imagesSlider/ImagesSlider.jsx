import React, { useState } from "react";
import ImageSliderMain from "./ImageSliderMain";
import ImageSliderThumbnails from "./ImageSliderThumbnails";
import styles from "./ImagesSlider.module.css";

export default function ImagesSlider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setActiveIndex(index);
    };
    if (!images || images.length === 0) {
        return null; // Нет данных, ничего не выводим
    }
    return (
        <div className={styles.slider}>
            <ImageSliderMain image={images[activeIndex]??null} />
            <ImageSliderThumbnails
                images={images??[]}
                activeIndex={activeIndex}
                onThumbnailClick={handleThumbnailClick}
            />
        </div>
    );
}
