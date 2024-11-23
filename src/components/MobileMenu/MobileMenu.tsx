import Link from "next/link";
import styles from "./MobileMenu.module.scss";
import Image from "next/image";
import closeBtn from "/public/imgMobileMenu/closeBtn.png"
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = (props: any) => {

    const togleMobileMenu = () => props.openBurgerMenu();

    const MobileMenuAnimateVariants = {
        hidden: {
            y: -700,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "tween"
            }
        },
        close: {
            y: -700,
            opacity: 0,
            transition: {
                duration: 1,
                type: "tween"
            }
        }
    }

    const CloseBntVariants = {
        hidden: {
            x: -700,
            y: 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            rotate: 360,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 1,
                type: "tween"
            }
        },
        close: {
            x: 0,
            y: -300,
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <>
            <AnimatePresence>
                {
                    props.burgerMenu && (
                        <motion.div className={styles.mobileMenu__wrapper}
                            id="mobileMenu"
                            initial={"hidden"}
                            animate={"show"}
                            exit={"close"}
                            variants={MobileMenuAnimateVariants}>
                            <motion.div className={styles.mobileMenu__close}
                                initial={"hidden"}
                                animate={"show"}
                                exit={"close"}
                                variants={CloseBntVariants}
                                onClick={togleMobileMenu}
                                whileTap={{ scale: 1.2 }}
                            >
                                <Image unoptimized src={closeBtn} alt="close mobile menu" />
                            </motion.div>
                            <nav className={styles.mobileMenu}>
                                <ul className={styles.mobileMenu__list}>
                                    <li className={styles.mobileMenu__item}>
                                        <Link href="#about-us" scroll={true} className={styles.mobileMenu__link} onClick={togleMobileMenu}>About us</Link>
                                    </li>
                                    <li className={styles.mobileMenu__item}>
                                        <Link href="#home-catalogy" scroll={true} className={styles.mobileMenu__link} onClick={togleMobileMenu}>Catalogy</Link>
                                    </li>
                                    <li className={styles.mobileMenu__item}>
                                        <Link href="#feedback" scroll={true} className={styles.mobileMenu__link} onClick={togleMobileMenu}>Feedback</Link>
                                    </li>
                                    <li className={styles.mobileMenu__item}>
                                        <Link href="#specials-conditions" scroll={true} className={styles.mobileMenu__link} onClick={togleMobileMenu}>For Partrens</Link>
                                    </li>
                                    <li className={styles.mobileMenu__item}>
                                        <Link href="#order-call" scroll={true} className={styles.mobileMenu__link} onClick={togleMobileMenu}>Contacts</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav className={styles.mobileMenu__contact}>
                                <ul>
                                    <li className={styles.contact__item}>
                                        <a href="tel:+14080000000" className={styles.contact__link}>+1 408 000 0000</a>
                                    </li>
                                    <li className={styles.contact__item}>
                                        <a href="tel:+14080000000" className={styles.contact__link}>+1 408 000 0000</a>
                                    </li>
                                    <li className={styles.contact__item}>
                                        <a href="tel:+14080000000" className={styles.contact__link}>+1 408 000 0000</a>
                                    </li>
                                </ul>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    )
}

export default MobileMenu;