"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import styles from "./NewGoods.module.scss";
import sliderImg1 from "/public/imgNewGoods/new_slider_rabbit.png";
import sliderImg2 from "/public/imgNewGoods/new_slider_cat.png";
import sliderImg3 from "/public/imgNewGoods/new_slider_capibara.png";

const sliderImages = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
];

const NewGoods = () => {
    return (
        <section className={styles.newGoods}>
            <div className={styles.newGoods__container}>
                <h2 className={styles.newGoods__heading}>new</h2>
                <motion.div className={styles.newGoods__slider}
                animate={{ x: ['0', '-944px'] }}
                transition={{
                  repeat: Infinity,
                  ease: 'linear',
                  duration: 10,
                }}
                >
                    {[...sliderImages, ...sliderImages, ...sliderImages].map((src, index) => (
                        <div className={styles.newGoods__sliderItem} key={index}>
                            <Image unoptimized src={src} className={styles.newGoods__sliderImg} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default NewGoods;