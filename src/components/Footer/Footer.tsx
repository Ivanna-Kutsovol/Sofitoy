import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";
import Logo from "../UI/Logo/Logo";
import facebookImg from "/public/imgFooter/facebook_icon.png";
import instagramImg from "/public/imgFooter/instagram_icon.png";
import xImg from "/public/imgFooter/twitter_icon.png";
import contactImg from "/public/imgFooter/call_icon.png";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.footer__section}>
                        <Link href="/"><Logo /></Link>
                        <div className={styles.footer__social}>
                            <div className={styles.social__heading}>Social networks</div>
                            <nav className={styles.social}>
                                <ul>
                                    <li className={styles.social__item}>
                                        <a href="#" className={styles.social__link}>
                                            <Image unoptimized src={instagramImg} alt="instagram" className={styles.social__img} />
                                        </a>
                                    </li>
                                    <li className={styles.social__item}>
                                        <a href="#" className={styles.social__link}>
                                            <Image unoptimized src={xImg} alt="x" className={styles.social__img} />
                                        </a>
                                    </li>
                                    <li className={styles.social__item}>
                                        <a href="#" className={styles.social__link}>
                                            <Image unoptimized src={facebookImg} alt="facebook" className={styles.social__img} />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className={styles.footer__section}>
                        <div className={styles.footer__contact}>
                            <div className={styles.contact__heading}>
                                <Image unoptimized  src={contactImg} className={styles.contact__image} alt="contact image" />
                                <span className={styles.contact__title}>contact us</span>
                            </div>
                            <nav className={styles.contact}>
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
                        </div>
                    </div>
                </div>
                <div className={styles.footer__copy}>rights reserved</div>
            </div>
        </footer>
    )
}

export default Footer;