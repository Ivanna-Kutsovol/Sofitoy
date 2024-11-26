"use client";
import Image from "next/image";
import styles from "./NewGoods.module.scss";

import sliderImg1 from "/public/imgNewGoods/new_slider_rabbit.png";
import sliderImg2 from "/public/imgNewGoods/new_slider_cat.png";
import sliderImg3 from "/public/imgNewGoods/new_slider_capibara.png";

const sliderImages = [sliderImg1, sliderImg2, sliderImg3];

const NewGoods = () => {
  // Создаём дублированный массив для бесшовной анимации
  const repeatedImages = [...sliderImages, ...sliderImages, ...sliderImages];

  return (
    <section className={styles.newGoods}>
      <div className={styles.newGoods__container}>
        <h2 className={styles.newGoods__heading}>new</h2>
        <div className={styles.newGoods__slider}>
          {repeatedImages.map((src, index) => (
            <div className={styles.newGoods__sliderItem} key={index}>
              <Image
                unoptimized
                src={src}
                className={styles.newGoods__sliderImg}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewGoods;