import Image from 'next/image';
import logoImg from "/public/imgLogo/logoImg.png";
import styles from "./Logo.module.scss";

const Logo = () => {
    return (
        <Image 
        unoptimized
        className={styles.logo}
        src={logoImg}
        alt='Logo'
        priority = {true}
        />
    )
}

export default Logo;