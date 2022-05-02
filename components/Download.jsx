import styles from '../styles/Download.module.css';
import Image from 'next/image';
import GooglePlay from '../public/GooglePlay.png';
import AppStore from '../public/AppStore.png';
import phoneApp from '../public/phoneApp.png';

const Download = () => {
    return (
        <section className={styles.download}>
            <div className='container download-container'>
                <div className={styles.downloadImage}>
                    <Image src={phoneApp} alt='phone app' />
                </div>

                <div className={styles.downloadText}>
                    <h2 className={styles.downloadTextTitle}>Скачивайте наше удобное приложение</h2>
                    <div className={styles.downloadTextLinks}>
                        <a className='downloadTextLink' href="#">
                            <Image src={AppStore} alt='app store' />
                        </a>
                        <a className='downloadTextLink' href="#">
                            <Image src={GooglePlay} alt='google play' />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Download;