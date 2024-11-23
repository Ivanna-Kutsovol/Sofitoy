"use client";

import Image from "next/image";
import MainImg1 from "/public/imgSpesialCondision/specials_conditions_top_right.png";
import MainImg2 from "/public/imgSpesialCondision/specials_conditions_bottom_left.png";
import MainImg3 from "/public/imgSpesialCondision/specials_conditions_tab.webp";
import SCIcon1 from "/public/imgSpesialCondision/specials_conditions_firstIcon.png";
import SCIcon2 from "/public/imgSpesialCondision/specials_conditions_secondIcon.png";
import SCIcon3 from "/public/imgSpesialCondision/specials_conditions_thirdIcon.png";
import SCIcon4 from "/public/imgSpesialCondision/specials_conditions_foursIcon.png";
import styles from "./SpecialsConditions.module.scss";
import { useState, useEffect } from 'react';

interface SpecialsConditionsProps {
    id: string;
  }

const SpecialsConditions: React.FC<SpecialsConditionsProps> = ({id}) => {
    const [strokeWidth, setStrokeWidth] = useState(2);
    const updateStrokeWidth = () => {
        const width = window.innerWidth;
        if (width < 500) {
            setStrokeWidth(1);
        } else if (width < 1365) {
            setStrokeWidth(2);
        } else {
            setStrokeWidth(3);
        }
    };
    useEffect(() => {
        updateStrokeWidth();
        window.addEventListener('resize', updateStrokeWidth);
        return () => {
            window.removeEventListener('resize', updateStrokeWidth);
        };
    }, []);

    return (
        <div className={styles.specialConditions} id={id}>
            <h2 className={styles.specialConditions__heading}>Special conditions for <br /> partners </h2>
            <div className={styles.specialConditions__container}>
                <Image unoptimized src={MainImg1} alt="img 1"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__topRight}`} />
                <Image unoptimized src={MainImg2} alt="img 2"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__bottomLeft}`} />
                <Image unoptimized src={MainImg3} alt="img 3"
                    className={`${styles.specialConditions__img} ${styles.specialConditions__img__tab}`} />
                <div className={styles.specialConditions__svg1}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" y1="10%" x1="4%" x2="57%" y2="26%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="57%" y1="26%" y2="90%" x2="34%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="34%" y1="90%" x2="96%" y2="72%"></line>
                    </svg>
                </div>
                <div className={styles.specialConditions__svg2}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" y1="20%" x1="4%" x2="57%" y2="26%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="57%" y1="26%" y2="90%" x2="40%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="40%" y1="90%" x2="96%" y2="60%"></line>
                    </svg>
                </div>
                <div className={styles.specialConditions__svg3}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="35%" y1="8%" x2="92%" y2="30%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="92%" y1="30%" x2="38%" y2="62%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="38%" y1="62%" x2="90%" y2="86%"></line>
                    </svg>
                </div>
                <div className={styles.specialConditions__svg4}>
                    <svg width="100%" height="100%">
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="12%" y1="12%" x2="88%" y2="35%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="88%" y1="35%" x2="12%" y2="66%"></line>
                        <line strokeWidth={strokeWidth} stroke="#FF89C2" x1="12%" y1="66%" x2="88%" y2="90%"></line>
                    </svg>
                </div>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__first}`}>
                    Our manager will contact you and talk about the terms of cooperation
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__second}`}>
                    You call or leave a request on the website
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__third}`}>
                    We discuss all the conditions and you become our new partner
                </p>
                <p className={`${styles.specialConditions__info} ${styles.specialConditions__info__fours}`}>
                    We provide you with a catalog of our product positions
                </p>

                <Image unoptimized src={SCIcon1} alt="sc icon 1"
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__first}`} />
                <Image unoptimized src={SCIcon2} alt="sc icon 2"
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__second}`} />
                <Image unoptimized src={SCIcon3} alt="sc icon 3"
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__third}`} />
                <Image unoptimized src={SCIcon4} alt="sc icon 4"
                    className={`${styles.specialConditions__icon} ${styles.specialConditions__icon__fours}`} />
            </div>
        </div>
    )
}

export default SpecialsConditions;