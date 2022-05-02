import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Reviews.module.css';
import Image from "next/image";

// Import image
import partner1 from '../public/Partners1.png';
import partner2 from '../public/Partners2.png';
import partner3 from '../public/Partners3.png';
import partner4 from '../public/Partners4.png';
import partner5 from '../public/Partners5.png';
import close from '../public/close.png';
import avatar from '../public/avatar.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Reviews = () => {
    return (
        <section className="reviews" id="reviews">
            <div className="container">
                <h2 className={styles.reviewsTitle}>Отзывы  партнеров</h2>

                <div className={styles.reviewsSlider}>
                    <div className="carousel-container">
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={3}
                            navigation
                        >
                            <SwiperSlide>
                                <div className={styles.quotesBlock}>
                                    <Image className={styles.quotes} src={close} alt='close'/>
                                    <p>Часто замечала бело-рыжих дронов Lintu в небе с посылками. Как-то раз и сама решила воспользоваться услугами этой курьерской службы. Дрон доставил мой заказ за 15 минут, я очень довольна.</p>
                                </div>
                                <div className="personParners">
                                    <Image src={avatar} alt='avatar' />
                                    <p>Амина Яковлева</p>
                                    <p>Making tech</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.quotesBlock}>
                                    <Image className={styles.quotes} src={close} alt='close'/>
                                    <p>Использую Lintu в работе. Я рада, что нашла именно эту службу доставки. За весь год пользования их услугами, проблем с отправкой не возникало вообще. Сроки доставки не переносили. Хорошая компания!</p>
                                </div>
                                <div className="personParners">
                                    <Image src={avatar} alt='avatar' />
                                    <p>Мария Макарова</p>
                                    <p>OneOptics</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.quotesBlock}>
                                    <Image className={styles.quotes} src={close} alt='close'/>
                                    <p>Lintu пользовался неоднократно, отправляю доки клиентам. С доставкой все ок, редко бывают задержки, в основном все приходит в течении 30 минут.</p>
                                </div>
                                <div className="personParners">
                                    <Image src={avatar} alt='avatar' />
                                    <p>Алексей Коновалов</p>
                                    <p>Calm Driving</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.quotesBlock}>
                                    <Image className={styles.quotes} src={close} alt='close'/>
                                    <p>Часто замечала бело-рыжих дронов Lintu в небе с посылками. Как-то раз и сама решила воспользоваться услугами этой курьерской службы. Дрон доставил мой заказ за 15 минут, я очень довольна.</p>
                                </div>
                                <div className="personParners">
                                    <Image src={avatar} alt='avatar' />
                                    <p>Амина Яковлева</p>
                                    <p>Making tech</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div className={styles.partners}>
                    <Image src={partner1} alt='partner1'/>
                    <Image src={partner2} alt='partner2'/>
                    <Image src={partner3} alt='partner3'/>
                    <Image src={partner4} alt='partner4'/>
                    <Image src={partner5} alt='partner5'/>
                </div>
            </div>
        </section>
    )
}

export default Reviews;