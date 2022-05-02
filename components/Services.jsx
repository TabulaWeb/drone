import styles from '../styles/Services.module.css'
import {useState} from 'react';
import Image from 'next/image';
import drone from '../public/drone.png';

const Services = () => {
    const [check, setCheck] = useState(false);

    const getCheck = (check) => {
        setCheck(check)
        console.log(check)
    }
   
    return (
        <section className={styles.services} id="services">
            <div className="container">
                <h2 className={styles.servicesTitle}>Услуги</h2>

                <div className={check ? 'formSwitch active' : 'formSwitch'}>
                    <p className={!check ? 'formSwitchText active' : 'formSwitchText'} onClick={() => getCheck(false)}>Для себя</p>
                    <p className={check ? 'formSwitchText active' : 'formSwitchText'} onClick={() => getCheck(true)}>Для бизнеса</p>
                </div>

                <div className="servicesText">
                    <p>Транспортировка малогабаритных грузов и пакетов в кратчайшие сроки. </p>
                    <p>Также мы осуществляем доставку более 100 000 различных продуктов и товаров для дома, детей, красоты и семьи из крупнейших торговых сетей и гипермаркетов.</p>
                    <p>Чтобы узнать, откуда мы можем привезти товары к вам домой, достаточно ввести адрес на главной странице сайта или приложения, после чего отобразятся доступные торговые сети.</p>
                    <p className='servicesTextBold'>Вес — не более 10 кг</p>
                    <p className='servicesTextBold'>Габариты — не более 150 см в длину</p>
                </div>
            </div>
            <div className="background-cloud">
            </div>
            <div className="background-drone">
                <Image src={drone} alt='drone' />
            </div>
        </section>
    )
}

export default Services