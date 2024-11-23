"use client";
import { useState } from "react";
import Image from "next/image";
import ratigStar from "/public/imgCatalogy/rating_star.png";
import ratigStarOK from "/public/imgCatalogy/rating_star_ok.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./FeedBackSlides.module.scss";
import { SlideObjectInterface } from "../../../../../app/interfaces/interfases";

interface FeedBackProps {
    id?: string;
    data: SlideObjectInterface[];
  }
  
const FeedBackSlide = ({data, id}:FeedBackProps) => {

    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        className: `${styles.feedBackSlider__wrapper}`,
        centerMode: true,
        infinite: true,
        centerPadding: "400px",
        slidesToShow: 1,
        swipe: true,
        arrows: false,
        pauseOnHover: false,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 8000,
        beforeChange: (current: number, next: number) => {
            setActiveSlide(next);
        },
        
        responsive: [
            {   
                breakpoint: 1360,
                settings: {
                    centerPadding: "330px",
                }
            },
            {   
                breakpoint: 1300,
                settings: {
                    centerPadding: "330px",
                }
            },
            {   
                breakpoint: 1024,
                settings: {
                    centerPadding: "260px",
                }
            },
            {
                breakpoint: 970,
                settings: {
                    centerPadding: "200px",
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: "170px",
                }
            },
            {
                breakpoint: 670,
                settings: {
                    centerPadding: "130px",
                }
            },
            {
                breakpoint: 570,
                settings: {
                    centerPadding: "80px",
                }
            },
            {
                breakpoint: 520,
                settings: {
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 472,
                settings: {
                    centerPadding: "60px",
                }
            },
            {
                breakpoint: 379,
                settings: {
                    centerPadding: "45px",
                }
            },
        ]
    };
    
    return (
            <Slider {...settings}>
                {data.map((slide, index) => (
                    <article
                        key={index}
                        className={`${styles.feedBackSlider__slide}
                         ${
                            index === activeSlide ? styles["feedBackSlider__slide--active"] : ""
                        }`} 
                    >
                        <section className={styles.feedBackSlider__head}>
                           
                            <Image  
                                unoptimized
                                className={styles.feedBackSlider__avatar}
                                src={`/imgFeedback/avatar/${slide.avatar}`}  
                                alt="comment avatar"  
                                height={190}  
                                width={190}  
                            /> 
                            <div className={styles.feedBackSlider__info}>
                                <span className={styles.feedBackSlider__name}>{slide.author}</span>
                                <span className={styles.feedBackSlider__date}>{slide.date}</span>
                                <span className={styles.feedBackSlider__rating}>
                                    <Image unoptimized src={ratigStarOK} alt="rating star" />
                                    <Image unoptimized src={ratigStarOK} alt="rating star" />
                                    <Image unoptimized src={ratigStarOK} alt="rating star" />
                                    <Image unoptimized src={ratigStarOK} alt="rating star" />
                                    <Image unoptimized src={ratigStar} alt="rating star" />
                                </span>
                            </div>
                        </section>
                        <section className={styles.feedBackSlider__body}>
                            <p className={styles.feedBackSlider__text}>{slide.comment}</p>
                        </section>
                    </article>
                ))}
            </Slider>
    );
};

export default FeedBackSlide;