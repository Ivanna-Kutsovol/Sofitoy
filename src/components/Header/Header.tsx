"use client";

import Logo from "../UI/Logo/Logo";
import Link from "next/link";
import Button from "../UI/Button/Button";
import burgerImg from "/public/imgHeader/burgerImg.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.scss";
import { useEffect, useRef, useState } from "react";

const Header = () => {
    const [burgerMenu, setMenu] = useState(false);
    const openBurgerMenu = () => setMenu(!burgerMenu);

    const [showHeader, setShowHeader] = useState(true);
    const [headerHeight, setHeaderHeight] = useState(0);
    const headerRef = useRef<HTMLDivElement | null>(null); 

    let lastScroll = 0;

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight); 
            }
        };

        updateHeaderHeight(); 
        window.addEventListener("resize", updateHeaderHeight);

        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll > lastScroll && currentScroll > 100) {
                setShowHeader(false);
            } else {
                setShowHeader(true); 
            }

            lastScroll = currentScroll;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", updateHeaderHeight);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <div style={{ height: `${headerHeight}px`, display:'flex', justifyContent:'center'}}>
            <header
                ref={headerRef} // Привязываем ref к хедеру
                className={`${styles.header} ${!showHeader ? styles.header__hidden : ""}`}
            >
            <div className={styles.header__head}>
                <Link href="/">
                    <Logo></Logo>
                </Link>
                
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNav__list}>
                        <li className={styles.mainNav__item}>
                            <Link href="/#about-us" scroll={true} className={styles.mainNav__link}>About us</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="/#home-catalogy" scroll={true} className={styles.mainNav__link}>Catalogy</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="/#feedback" scroll={true} className={styles.mainNav__link}>Feedback</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="/#specials-conditions" scroll={true} className={styles.mainNav__link}>For Partrens</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="/#order-call" scroll={true} className={styles.mainNav__link}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Button
                    className={styles.burgerMenu}
                    burgerImg={burgerImg}
                    alt="burger menu"
                    onClick={openBurgerMenu}
                    type="button"
                />
            </div>
                <MobileMenu burgerMenu={burgerMenu} openBurgerMenu={openBurgerMenu}></MobileMenu>
        </header>
        </div>
        </>
    )
}
export default Header;