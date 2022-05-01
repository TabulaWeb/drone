import Image from "next/image";
import Logo from '../public/logo.png';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                    <div className="headerLogo">
                        <Image src={Logo} alt='logo'></Image>
                    </div>

                    <nav className={styles.headerNav}>
                        <a className={styles.navElement} href="#why">Почему Lintu</a>
                        <a className={styles.navElement} href="#services">Услуги</a>
                        <a className={styles.navElement} href="#reviews">Отзывы</a>
                        <a className={styles.navElement} href="#download">Скачать приложение</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;