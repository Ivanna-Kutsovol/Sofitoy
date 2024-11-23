"use client";

import styles from "./ToTopButton.module.scss";
import Image from "next/image";
import scrollToTopButton from "/public/imgToTop/scrollToTop.png";
import { useEffect, useState } from "react";

const ToTopButton = () => {
    const [shownButton, setShownButton] = useState(false);
    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.scrollY > 200 ? setShownButton(true) : setShownButton(false);
        };
        window.addEventListener("scroll", handleScrollButtonVisibility);

        return () => {
            window.removeEventListener("scroll", handleScrollButtonVisibility);
        };
    }, []);


    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    return (
        <>
            {shownButton && (
                <button 
                type="button" 
                className={styles.scrollToTop}
                onClick={handleScrollToTop}
                >
                    <Image
                        unoptimized
                        src={scrollToTopButton}
                        className={styles.scrollToTop__Img}
                        alt="scroll to top"
                    />
                </button>
            )}
        </>
    )
}

export default ToTopButton;