import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import logoFooter from '../public/logoFooter.png'
import GooglePlay from '../public/GooglePlay.png';
import AppStore from '../public/AppStore.png'

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className={styles.footer}>
                    <div className={styles.footerSearch}>
                        <input type="text" className={styles.footerSearchInput} placeholder='Поиск' />

                        <div className="footerSearchLogo">
                            <Image src={logoFooter} alt='logo footer'></Image>
                            <p className={styles.footerLogoText}>Доставка посылок при помощи дронов</p>
                        </div>
                    </div>

                    <div className={styles.footerInfo}>
                        <div className={styles.footerInfoPhone}>
                            <a className={styles.footerInfoPhoneText} href="">+7(495)000-00-00</a>
                            <a className={styles.footerInfoPhoneLink} href="">Заказать звонок</a>
                        </div>

                        <div className="footerInfoSocial">
                            <p className={styles.footerInfoSocialText}>Мы в соцсетях:</p>
                            <div className={styles.footerInfoSocialLink}>
                                <a className={styles.socialLink} href="#">VKontakte</a>
                                <a className={styles.socialLink} href="#">Facebook</a>
                                <a className={styles.socialLink} href="#">Instagram</a>
                            </div>
                        </div>
                    </div>

                    <div className="footerDownload">
                        <p className={styles.footerDownloadTitle}>Скачать приложение: </p>
                        <div className={styles.footerDownloadLinks}>
                            <a href="#">
                                <Image src={AppStore} alt='app store' />
                            </a>

                            <a href="#">
                                <Image src={GooglePlay} alt='google play' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;