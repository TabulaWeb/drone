import { useEffect, useState } from "react";
import { useRef } from "react";

import styles from '../styles/Main.module.css';
import Image from 'next/image';
import droneAnimation from '../public/droneAnimation.png'
import cloudOne from '../public/cloudOne.png';
import cloudTwo from '../public/cloudTwo.png';
import cloudThree from '../public/cloud3.png';
import cloudFour from '../public/cloud4.png';
import play from '../public/play.png';

const Main = () => {
    const [scrollY, setScrollY] = useState(0);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        // just trigger this so that the initial state 
        // is updated as soon as the component is mounted
        // related: https://stackoverflow.com/a/63408216
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const videoHandler = (control) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    return(
        <section className='main'>
            {/* <p className="scrollPosition">{scrollY}</p> */}
            <div className="container">
                <div className="main-title">
                    <h1>Доставка посылок при помощи дронов</h1>
                    <p>Попробуйте инновационную доставку. Выберите удобное время, и наш дрон привезет посылку на Ваш адрес в течение часа</p>
                    <button>Оформить заявку</button>
                    <div className={
                            scrollY >= 300 && scrollY < 1144 ? 
                                'droneAnimation active' 
                                : scrollY >= 1144 ?
                                'droneAnimation deactive'
                                :
                                'droneAnimation'
                            }>
                        <Image src={droneAnimation} alt='drone animation'/>
                    </div>
                    <div className={scrollY >= 300 ? 'buttonArrow active' : 'buttonArrow'}>
                        <a href="#why">
                            <svg width="36" height="50" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.1408 0.185806C16.506 0.410416 15.9982 0.8694 15.6955 1.51393L15.4611 2.00221V21.6018C15.4611 32.3928 15.4513 41.2112 15.4318 41.2112C15.422 41.2112 12.9318 38.7307 9.90444 35.7034C6.25209 32.051 4.24037 30.1077 3.94741 29.9514C2.64858 29.2483 1.10561 29.7561 0.43178 31.094C0.138812 31.6897 0.129046 32.6467 0.412249 33.2327C0.548968 33.5159 3.08803 36.1135 8.64467 41.6702C16.4572 49.4729 16.7013 49.6975 17.2091 49.844C17.922 50.0491 18.2736 50.0393 18.9474 49.7952C19.4845 49.5999 19.8947 49.2092 27.4435 41.6604C36.1447 32.969 35.8029 33.3694 35.8029 32.178C35.8029 30.3518 34.0451 29.1702 32.3068 29.8245C31.8771 29.9807 31.1251 30.6936 26.1837 35.6253L20.5392 41.2503L20.5197 21.5335L20.4904 1.8069L20.2755 1.40651C19.9728 0.830338 19.3673 0.332291 18.7716 0.156509C18.1173 -0.0388031 17.7853 -0.0388031 17.1408 0.185806Z" fill="url(#paint0_linear_608_336)"/>
                                <defs>
                                <linearGradient id="paint0_linear_608_336" x1="18.0052" y1="49.9888" x2="18.0052" y2="0.0134926" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#ECD8D0"/>
                                <stop offset="1" stopColor="#B4ABB0"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div className="cloudOne">
                        <Image src={cloudOne} alt='clud one' />
                    </div>
                    <div className="cloudTwo">
                        <Image src={cloudTwo} alt='clud two' />
                    </div>
                </div>

                <div className="main-why" id='why'>
                    <h2 className='main-why__title'>Почему Lintu</h2>
                    <div className="main-why__content">
                        <div className="main-why__content-text">
                            <div className="main-why__text">
                                <p>Для доставки грузов Lintu использует исключительно дроны. </p>
                                <p>Вся логистическая схема нашей компании основана на отсутствии человеческого фактора. </p>
                                <p>Наши «курьеры» никогда не устают и не сбиваются с пути, поэтому мы доставляем грузы без пробок и перебоев.</p>
                            </div>

                            <div className="main-why__video">
                                <div className="customPlayer">
                                    <video
                                        ref={videoRef}
                                        className="video"
                                        src="./drone.mp4"
                                        poster='./poster.png'
                                        onClick={() => videoHandler("pause")}
                                    >
                                    </video>
                                    <div className="controlsContainer">
                                        <div className="controls">
                                            {playing ? (
                                                null
                                            ) : (
                                                <img onClick={() => videoHandler("play")} className="controlsIcon--small" alt="play" src='./play.png' />
                                            )}
                                            
                                        </div>
                                    </div>
                                </div>
                                <p>Посмотрите на полет нового дрона-доставщика от Lintu </p>
                            </div>
                        </div>

                        <div className="main-why__content-stat">
                            <div className="main-why__stat">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M28.6093 8.0359C28.489 8.05309 28.0507 8.11324 27.621 8.16481C25.0601 8.48277 22.0694 9.69449 19.8866 11.3187C18.9757 11.9976 17.5405 13.364 16.8187 14.232L16.3116 14.8593H12.3155C7.98428 14.8593 7.9585 14.8593 7.74365 15.332C7.61475 15.6156 7.61475 15.8218 7.74365 16.1054C7.9499 16.5695 8.02725 16.5781 11.7569 16.5781H15.1944L14.8077 17.3257C14.5929 17.7468 14.3007 18.4 14.1546 18.7867L13.8882 19.5H8.7835C3.24053 19.5 3.31787 19.4914 3.10303 19.9726C2.97412 20.2562 2.97412 20.4625 3.10303 20.7461C3.31787 21.2273 3.26631 21.2187 8.55146 21.2187C12.7194 21.2187 13.4069 21.2359 13.3726 21.339C13.3296 21.4507 13.1233 22.7828 13.0116 23.7281L12.9601 24.1406H11.2413C9.36787 24.1406 9.13584 24.1921 8.94678 24.6132C8.80928 24.9054 8.81787 25.1289 8.96396 25.4211C9.17021 25.8164 9.39365 25.8593 11.2499 25.8593H12.9601L13.003 26.2203C13.0288 26.4265 13.089 26.9336 13.1491 27.3632C13.364 29.0648 14.1374 31.4968 14.9108 32.8804L15.2116 33.4218H9.44521C3.18896 33.4218 3.31787 33.4132 3.10303 33.8945C2.89678 34.3328 3.06865 34.857 3.47256 35.0375C3.63584 35.1148 5.29443 35.1406 10.0038 35.1406H16.3116L16.8187 35.7679C17.4976 36.5843 18.9499 37.9851 19.7663 38.5953C21.9921 40.2625 24.4843 41.3195 27.3632 41.8179C28.5491 42.0242 31.4022 42.0242 32.6054 41.8093C35.4155 41.3281 37.8046 40.3312 40.0561 38.707C40.9327 38.0711 42.9351 36.0945 43.5796 35.2265C46.6647 31.05 47.7304 25.7562 46.4757 20.832C45.9257 18.7007 44.8944 16.5437 43.5882 14.7992C42.9608 13.957 41.5601 12.4961 40.7608 11.8429C38.4405 9.9523 35.6562 8.69762 32.6483 8.19918C31.8749 8.07027 29.0647 7.94996 28.6093 8.0359ZM31.5999 9.79762C40.4343 10.7687 46.6132 19.0187 45.0233 27.7328C43.3905 36.6703 34.2897 42.2562 25.6187 39.6437C18.546 37.5039 13.9827 30.6546 14.7819 23.3843C15.5726 16.1398 21.3132 10.4851 28.6093 9.76324C29.2968 9.69449 30.8179 9.71168 31.5999 9.79762Z" fill="#322C2A"/>
                                    <path d="M28.7381 11.7311C26.5381 11.9717 24.3982 12.7452 22.5076 14.0084C21.4592 14.7045 19.7318 16.4233 19.01 17.4803C17.9873 19.0014 17.2654 20.7288 16.9045 22.5334C16.6295 23.9084 16.6295 26.0913 16.9045 27.4663C17.4459 30.1905 18.6318 32.3905 20.6084 34.3756C22.6107 36.3694 24.8881 37.5811 27.6639 38.1139C28.9014 38.3459 31.1787 38.3288 32.4506 38.0795C35.1748 37.5381 37.3748 36.3522 39.36 34.3756C41.3537 32.3733 42.5654 30.0959 43.0982 27.3202C43.3303 26.0827 43.3131 23.8053 43.0639 22.5334C42.5225 19.8092 41.3365 17.6092 39.36 15.6241C37.3834 13.6561 35.1576 12.453 32.5021 11.9374C31.5998 11.7569 29.5287 11.6452 28.7381 11.7311ZM32.124 13.6131C34.4787 14.0686 36.4381 15.117 38.1568 16.8272C39.8326 18.5116 40.8381 20.3678 41.3451 22.7053C41.6115 23.9514 41.6115 26.0483 41.3451 27.2944C40.8381 29.6319 39.8326 31.4795 38.1482 33.1639C36.4639 34.8483 34.6162 35.8538 32.2787 36.3608C31.0326 36.6272 28.9357 36.6272 27.6896 36.3608C25.4982 35.8881 23.6248 34.9084 22.0178 33.3874C20.3334 31.7975 19.2076 29.8124 18.6662 27.4663C18.4686 26.6241 18.4342 26.3233 18.4342 24.9999C18.4342 23.6764 18.4686 23.3756 18.6662 22.5334C19.8006 17.6608 23.6162 14.1717 28.5662 13.4928C29.3826 13.3811 31.2389 13.4413 32.124 13.6131Z" fill="#322C2A"/>
                                    <path d="M29.5375 16.1226C28.9789 16.4663 29.0132 17.3257 29.5976 17.5921C30.0359 17.7898 30.5171 17.6523 30.7234 17.257C30.8781 16.939 30.8781 16.6984 30.6976 16.4062C30.4484 15.9851 29.9585 15.8648 29.5375 16.1226Z" fill="#322C2A"/>
                                    <path d="M26.9935 21.6055C26.6583 21.7516 26.4521 22.1727 26.5294 22.5508C26.5552 22.7227 26.856 23.0922 27.4232 23.6766L28.274 24.5531L28.2997 25.0602C28.3599 26.5727 30.1216 27.2688 31.1958 26.1945L31.531 25.8594H34.9771H38.4232L38.7154 25.5672C38.9216 25.3524 39.0075 25.1977 39.0075 25C39.0075 24.8024 38.9216 24.6477 38.7154 24.4328L38.4232 24.1406H34.9427H31.4622L31.3333 23.9344C31.0927 23.5734 30.6029 23.3328 30.0443 23.3156L29.5372 23.2899L28.6521 22.4305C28.1622 21.9492 27.7068 21.5625 27.6294 21.5625C27.5607 21.5625 27.4575 21.5453 27.3888 21.5195C27.3286 21.5024 27.1482 21.5367 26.9935 21.6055Z" fill="#322C2A"/>
                                    <path d="M21.253 24.4328C20.8577 24.8281 20.8577 25.1719 21.253 25.5672C21.5624 25.8765 21.8288 25.9281 22.2069 25.7562C22.7999 25.4898 22.8171 24.5617 22.2413 24.2609C21.8546 24.0633 21.571 24.1148 21.253 24.4328Z" fill="#322C2A"/>
                                    <path d="M29.5635 32.4248C28.9963 32.7428 28.9877 33.5506 29.5549 33.8771C29.9846 34.1349 30.4487 34.0146 30.6979 33.5935C31.1448 32.8373 30.3369 31.9951 29.5635 32.4248Z" fill="#322C2A"/>
                                    <path d="M3.4384 28.9016C2.86262 29.2196 2.8798 30.1305 3.47277 30.3969C3.82512 30.5602 8.60324 30.543 8.92121 30.3797C9.4884 30.0789 9.4884 29.2024 8.92121 28.9016C8.58605 28.7297 3.74777 28.7297 3.4384 28.9016Z" fill="#322C2A"/>
                                </svg>
                                <p>Среднее время доставки 20-30 минут</p>
                            </div>

                            <div className="main-why__stat">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5469 5.05469C4.91408 5.28906 4.84377 6.28125 5.43752 6.55469C5.56252 6.60938 6.25783 6.64062 7.38283 6.64062H9.14065V8.30469V9.97656L8.72658 10.0703C8.21877 10.1797 7.57033 10.6016 7.26565 11.0234C6.82033 11.6484 6.78908 11.875 6.81252 14.3125C6.83596 16.4531 6.84377 16.5391 7.02346 16.8906C7.26565 17.3906 7.76565 17.875 8.28127 18.1172C8.69533 18.3125 8.76565 18.3203 10.1172 18.3203C11.4922 18.3203 11.5313 18.3125 11.961 18.1094C12.4766 17.8516 12.9766 17.375 13.1719 16.9375L13.3125 16.625L15.1094 16.6562C16.8672 16.6797 16.9219 16.6875 17.3438 16.8828C17.5781 17 17.8906 17.2109 18.0391 17.3516C18.3906 17.7031 18.8594 18.4375 18.7735 18.5156C18.7422 18.5469 17.2266 19.4453 15.4063 20.5078C13.4844 21.6328 11.9375 22.5859 11.7031 22.8047C10.9375 23.4922 10.4688 24.4453 10.3516 25.5469C10.3125 25.9766 10.4063 26.6875 10.9688 30.0781C11.336 32.2891 11.6719 34.2344 11.7188 34.3984C11.8125 34.7188 12.1641 35 12.4844 35C12.7891 35 13.1328 34.7734 13.25 34.4922C13.3516 34.2422 13.3125 33.9375 12.6875 30.2188C11.9375 25.7109 11.9141 25.4219 12.2969 24.7109C12.4219 24.4922 12.625 24.2031 12.7656 24.0781C12.9453 23.8984 18.8516 20.3672 19.8203 19.8594C19.9688 19.7734 20.0547 19.8125 20.5235 20.1641C21.1797 20.6562 22.086 21.0938 23.0078 21.375C23.6563 21.5781 23.8203 21.5938 25.0391 21.5938C26.0625 21.6016 26.4766 21.5703 26.8516 21.4688C27.7344 21.2266 28.5469 20.8672 29.1719 20.4531C29.5156 20.2266 29.8672 19.9922 29.961 19.9297C30.1172 19.8281 30.3594 19.9531 33.5625 21.8281C35.4453 22.9375 37.1016 23.9453 37.2344 24.0781C37.375 24.2031 37.5781 24.4922 37.7031 24.7109C38.086 25.4219 38.0625 25.7109 37.3125 30.2188C36.6875 33.9375 36.6485 34.2422 36.75 34.4922C36.8672 34.7734 37.211 35 37.5156 35C37.836 35 38.1875 34.7188 38.2813 34.3984C38.3281 34.2344 38.6641 32.2891 39.0313 30.0781C39.7656 25.6562 39.7735 25.5469 39.4141 24.5078C39.3125 24.2188 39.125 23.8047 38.9844 23.5938C38.4922 22.8281 37.9844 22.4688 34.5625 20.4766C32.7578 19.4297 31.2735 18.5625 31.2578 18.5469C31.211 18.5 31.8594 17.5469 32.086 17.3281C32.211 17.2109 32.5156 17.0234 32.7735 16.8984L33.2422 16.6797H35.0703H36.8985L37.0781 16.9922C37.336 17.4609 37.7969 17.8906 38.2813 18.1172C38.6953 18.3125 38.7656 18.3203 40.1172 18.3203C41.4922 18.3203 41.5313 18.3125 41.961 18.1094C42.4922 17.8438 42.9141 17.4297 43.1875 16.9141L43.3985 16.5234V14.1797C43.3985 11.8516 43.3985 11.8359 43.211 11.4453C42.8203 10.6641 42.0781 10.125 41.25 10.0234L40.8594 9.97656V8.3125V6.64062H42.6172C43.7422 6.64062 44.4375 6.60938 44.5625 6.55469C45.0313 6.33594 45.1172 5.60156 44.7188 5.22656L44.5156 5.03906H40H35.4844L35.2813 5.22656C34.8828 5.60156 34.9688 6.33594 35.4375 6.55469C35.5625 6.60938 36.2578 6.64062 37.3828 6.64062H39.1406V8.30469V9.97656L38.7266 10.0703C38.0313 10.2266 37.1719 10.9297 36.9922 11.4922C36.9453 11.6328 36.8438 11.6406 35.125 11.6406C33.7188 11.6406 33.2266 11.6172 32.9766 11.5234C32.3906 11.3203 31.9766 10.9453 31.4375 10.1484C30.2813 8.41406 28.5938 7.25781 26.6016 6.83594C25.6172 6.61719 24.1406 6.64844 23.1719 6.90625C21.3047 7.39062 19.8047 8.46094 18.7266 10.0781C18.211 10.8516 17.9297 11.1406 17.461 11.3906C17.0703 11.6016 17.0547 11.6016 15.1953 11.625L13.3203 11.6484L13.086 11.2422C12.6797 10.5469 11.8047 10 11.0781 10H10.8594V8.32031V6.64062H12.6172C13.7422 6.64062 14.4375 6.60938 14.5625 6.55469C15.0313 6.33594 15.1172 5.60156 14.7188 5.22656L14.5156 5.03906L10.0938 5.02344C7.65627 5.01562 5.6094 5.03125 5.5469 5.05469ZM26.9141 8.625C28.2422 9.07031 29.2578 9.88281 30.1172 11.1797C30.8594 12.2812 31.4453 12.7656 32.5 13.1328C32.961 13.2891 33.1875 13.3125 34.8281 13.3438L36.6406 13.375V14.1875V15H34.9844C33.1406 15 32.6563 15.0781 31.8828 15.4609C31.2422 15.7891 30.6328 16.375 30.1094 17.1719C28.836 19.1172 26.8672 20.1172 24.625 19.9766C22.7188 19.8516 21.1406 18.875 19.9531 17.0938C19.2813 16.0938 18.6641 15.5781 17.6875 15.2188C17.2735 15.0703 17.0313 15.0469 15.336 15.0156L13.4375 14.9844V14.1797V13.375L15.2578 13.3438C16.836 13.3125 17.1328 13.2812 17.586 13.1406C18.5 12.8438 19.4297 12.1016 19.9219 11.2891C20.4844 10.3516 21.2422 9.60938 22.1875 9.07812C23.1563 8.53125 23.9453 8.35156 25.2735 8.39062C26.125 8.41406 26.3906 8.44531 26.9141 8.625ZM11.3047 11.7578C11.7656 11.9531 11.8047 12.1719 11.7813 14.3125L11.7578 16.1875L11.5 16.4141L11.25 16.6406H10.1172H8.9844L8.7344 16.4141L8.47658 16.1875L8.45315 14.2656C8.42971 12.125 8.46096 11.9609 8.92971 11.7578C9.28127 11.6094 10.9453 11.6094 11.3047 11.7578ZM41.3047 11.7578C41.7656 11.9531 41.8047 12.1719 41.7813 14.3125L41.7578 16.1875L41.5 16.4141L41.25 16.6406H40.1172H38.9844L38.7344 16.4141L38.4766 16.1875L38.4531 14.2656C38.4297 12.125 38.461 11.9609 38.9297 11.7578C39.2813 11.6094 40.9453 11.6094 41.3047 11.7578Z" fill="#322C2A"/>
                                    <path d="M22.6953 25.9766C21.5391 26.5234 20.3594 27.0703 20.0781 27.2031C19.7969 27.3359 18.625 27.875 17.4609 28.4141C16.2188 28.9844 15.2813 29.4609 15.1797 29.5781L15 29.7734V34.9453C15 39.8516 15.0078 40.1328 15.1484 40.3516C15.2734 40.5547 16 40.9141 20.0469 42.7891C22.6641 44.0078 24.8984 45 25.0078 45C25.1172 45 26.1328 44.5703 27.2656 44.0391C28.4063 43.5078 30.5469 42.5156 32.0234 41.8359C34.2734 40.7891 34.7344 40.5469 34.8594 40.3516C34.9922 40.1328 35 39.8281 35 34.9453V29.7734L34.8281 29.5781C34.6094 29.3359 25.4844 25.0781 25.0781 25.0312C24.8516 25 24.4297 25.1719 22.6953 25.9766ZM28.6016 28.4141C30.5313 29.3125 32.1094 30.0625 32.1094 30.0859C32.1094 30.1094 31.6328 30.3516 31.0469 30.6172L29.9922 31.1094L26.4844 29.4453C24.5547 28.5234 22.9766 27.7578 22.9688 27.7344C22.9688 27.6797 24.8594 26.8047 24.9922 26.8047C25.0547 26.7969 26.6797 27.5234 28.6016 28.4141ZM24.5234 30.3516C26.4141 31.25 27.9375 32.0156 27.9063 32.0469C27.875 32.0781 27.2109 32.4062 26.4219 32.7656L25 33.4297L21.4453 31.7734C19.4922 30.8672 17.9219 30.0938 17.9531 30.0625C18.0781 29.9375 20.8281 28.6797 20.9531 28.6953C21.0234 28.7031 22.6328 29.4453 24.5234 30.3516ZM20.4609 33.1562L24.1406 34.8672V38.8438C24.1406 41.0234 24.125 42.8125 24.1094 42.8125C24.0781 42.8125 21.3906 41.5703 17.5781 39.7969L16.6797 39.3828L16.6563 35.3828C16.6484 33.0156 16.6719 31.4062 16.7109 31.4219C16.75 31.4297 18.4375 32.2188 20.4609 33.1562ZM33.3438 35.3984L33.3203 39.3828L29.6328 41.1016C27.6016 42.0391 25.9219 42.8125 25.8984 42.8125C25.875 42.8125 25.8594 41.0234 25.8594 38.8438V34.875L27.4844 34.1172L29.1016 33.3672L29.1406 34.7109C29.1797 36.1094 29.2188 36.2891 29.5469 36.5156C29.7734 36.6797 30.2266 36.6719 30.4609 36.5156C30.8125 36.2656 30.8594 35.9844 30.8594 34.2031V32.5391L32.0547 31.9844C32.7031 31.6719 33.2656 31.4219 33.3047 31.4141C33.3359 31.4062 33.3516 33.2031 33.3438 35.3984Z" fill="#322C2A"/>
                                </svg>
                                <p>Доставляем любой груз до 10 кг</p>
                            </div>

                            <div className="main-why__stat">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_559_1875)">
                                    <path d="M18.8125 5.2265L18.5547 5.45307V7.48432C18.5547 9.51556 18.5547 9.51556 18.7422 9.71869C18.9766 9.96088 19.3125 10.0468 19.6172 9.92181C20.0469 9.74213 20.0781 9.57806 20.0781 7.46088C20.0781 6.289 20.0469 5.4765 20 5.38275C19.8984 5.19525 19.5234 4.99994 19.2656 4.99994C19.1562 4.99994 18.9531 5.1015 18.8125 5.2265Z" fill="#322C2A"/>
                                    <path d="M22.5312 5.2655L22.2656 5.53112V8.78112C22.2656 12.2577 22.2812 12.3749 22.6484 12.578C22.9531 12.7342 23.3594 12.6717 23.6016 12.4296L23.8281 12.203V8.91394C23.8281 5.3905 23.8203 5.31237 23.4297 5.10925C23.0781 4.92956 22.8203 4.97644 22.5312 5.2655Z" fill="#322C2A"/>
                                    <path d="M29.5391 6.875C27.1797 7.49219 25.7344 9.89062 26.2891 12.2578C26.4766 13.0391 26.9063 13.7891 27.5313 14.4141C28.4141 15.2891 29.4219 15.7031 30.6641 15.7031C31.9375 15.7031 32.9297 15.2891 33.836 14.375C34.7422 13.4609 35.1563 12.4766 35.1563 11.2266C35.1563 8.28125 32.3829 6.13281 29.5391 6.875ZM31.5704 8.4375C32.2266 8.64844 32.75 9.03906 33.125 9.61719C34.1016 11.125 33.5235 13.1328 31.8907 13.8906C31.5 14.0781 31.3438 14.1016 30.6641 14.1016C29.9766 14.1016 29.8282 14.0781 29.4375 13.8906C28.8594 13.625 28.2969 13.0547 28 12.4609C27.7969 12.0391 27.7735 11.9141 27.7735 11.25C27.7735 10.5781 27.7969 10.4609 28.0157 10C28.6719 8.625 30.1329 7.98437 31.5704 8.4375Z" fill="#322C2A"/>
                                    <path d="M18.3594 13.6327C16.711 13.9999 15.3438 15.3593 14.9532 16.9999C14.8673 17.3827 14.836 17.7499 14.8673 18.2812C14.9141 19.1562 15.1094 19.789 15.5548 20.4687C15.7188 20.7265 15.8594 20.9609 15.8594 20.9765C15.8594 20.9999 14.9298 21.0156 13.7969 21.0156C11.961 21.0156 11.6798 21.0312 11.2344 21.1718C9.79694 21.6093 8.711 22.8984 8.51569 24.3749C8.43757 25.0234 8.38493 38.9609 8.46305 39.3515C8.58024 39.9452 8.56575 35.0624 9.01888 34.6718L8.78993 36.8671L10.0391 41.6015L10.0079 27.1327C10.0391 24.8046 10.0704 24.3593 10.1876 24.0546C10.3829 23.5234 10.7969 23.0859 11.3516 22.8124L11.836 22.5781L23.3594 22.5937L34.8829 22.6171L35.2579 22.8124C35.711 23.039 36.1329 23.4843 36.3594 23.9765C36.5157 24.3124 36.5235 24.4765 36.5469 26.6952L36.5704 29.0546L32.1719 29.0781C27.8673 29.1093 27.7657 29.1093 27.2579 29.2812C25.0079 30.0312 23.9063 32.5781 24.9298 34.6718C25.2423 35.3124 25.961 36.0781 26.5469 36.3906C27.4454 36.8749 27.4923 36.8749 32.2501 36.8749H36.5704L36.5469 39.2421L36.5235 41.6015L36.2657 42.1327C36.0782 42.4999 35.8985 42.7343 35.6485 42.9296C34.9376 43.4687 35.7032 43.4452 23.1173 43.4218L11.7579 43.3984L11.3985 43.2187C10.8985 42.9765 10.4844 42.5546 10.2423 42.039L10.0391 41.6015L10.0079 27.1327L9.89069 31.5312L9.7735 35.9296C10.0079 27.1327 9.33138 33.2734 9.01888 33.4374C9.01888 33.4374 8.42194 36.2421 8.461 39.1796C8.48444 41.5624 8.50007 41.7968 8.65632 42.2734C8.98444 43.2656 9.70319 44.1015 10.6407 44.5781C11.5001 45.0156 10.8907 44.9999 24.9688 44.9999C33.4766 44.9999 38.0938 44.9687 38.3673 44.9218C39.7188 44.664 40.8907 43.6249 41.3438 42.2734L41.5235 41.7577L41.5469 33.4374C41.5626 28.1952 41.5391 24.8827 41.4923 24.4765C41.2969 22.8749 40.2188 21.6015 38.6798 21.1406C38.2969 21.0312 37.3985 21.0156 30.4844 21.0156H22.7188L22.9141 20.7499C24.2501 18.9999 24.0704 16.414 22.5079 14.8515C21.4532 13.7968 19.7969 13.3046 18.3594 13.6327ZM20.5079 15.3437C21.1173 15.6171 21.7266 16.2265 22.0001 16.8202C22.2032 17.2421 22.2266 17.3906 22.2266 18.0468C22.2266 18.6874 22.1954 18.8515 22.0235 19.2187C21.7423 19.8124 21.2657 20.3202 20.7266 20.6093C19.2423 21.3984 17.4454 20.8202 16.7032 19.3124C16.461 18.8281 16.4454 18.7343 16.4454 18.0077C16.4454 17.3124 16.4688 17.1796 16.6641 16.7812C17.0469 16.0077 17.8282 15.3671 18.6485 15.1562C19.1485 15.0312 20.0235 15.1171 20.5079 15.3437ZM38.6563 22.8202C39.1954 23.0859 39.6094 23.5312 39.8204 24.0702C39.9298 24.3593 39.961 24.7812 39.9844 26.7343L40.0157 29.0624H39.0704H38.1251V26.9296C38.1251 24.4374 38.0704 23.9999 37.6719 23.1796L37.3751 22.5781H37.7735C38.0704 22.5781 38.3126 22.6406 38.6563 22.8202ZM39.9844 32.9843L40.0001 35.3124H34.0001C27.2813 35.3124 27.5782 35.3359 26.9141 34.7499C26.7188 34.5781 26.461 34.2499 26.3438 34.0312C26.0626 33.4843 26.0469 32.5624 26.3126 32.0234C26.6407 31.3515 27.2891 30.8437 27.9923 30.7031C28.1719 30.6718 30.9376 30.6484 34.1407 30.6562L39.961 30.664L39.9844 32.9843ZM39.961 39.2577V41.6015L39.7579 42.039C39.3751 42.8437 38.6798 43.3359 37.8048 43.414L37.3204 43.4609L37.5313 43.1093C37.6407 42.9218 37.8126 42.5546 37.9063 42.2968C38.0626 41.8671 38.0782 41.6718 38.1094 39.3515L38.1407 36.8671L39.0469 36.8906L39.961 36.914V39.2577Z" fill="#322C2A"/>
                                    <path d="M27.8905 32.3282C27.5077 32.5157 27.3593 32.9297 27.539 33.3047C27.7734 33.7969 28.3749 33.9063 28.7577 33.5235C29.1562 33.125 29.0155 32.4532 28.4999 32.2735C28.1952 32.1641 28.2109 32.1641 27.8905 32.3282Z" fill="#322C2A"/>
                                    <path d="M8.92977 32.3045C8.42977 32.5155 8.33602 33.1639 8.74227 33.5311C9.07821 33.8358 9.46102 33.828 9.77352 33.5233C10.172 33.1248 10.0313 32.453 9.51571 32.2733C9.21883 32.1717 9.23446 32.1717 8.92977 32.3045Z" fill="#322C2A"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_559_1875">
                                    <rect width="40" height="40" fill="white" transform="translate(5 5)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                                <p>Возврат средств при утрате  или повреждении груза</p>
                            </div>

                            <div className="main-why__stat">
                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5351 7.07031C10.4312 7.29531 9.40467 8.06172 8.92654 9.03203C8.47654 9.95312 8.5117 8.61719 8.4906 24.6133C8.47654 34.45 8.49764 39.3508 8.54685 39.7305C8.63123 40.4055 9.01092 41.2563 9.45389 41.7484C9.81248 42.1562 10.4101 42.557 11.0078 42.7891L11.4648 42.9648H20.4648H29.4648L29.9429 42.8031C30.9273 42.4586 31.6304 41.8258 32.1015 40.8625C32.4672 40.1313 32.5234 39.7023 32.5234 37.7406C32.5234 35.9688 32.4812 35.7859 32.0664 35.5891C31.7781 35.4484 31.7219 35.4484 31.4406 35.582C31.0258 35.7789 31.0117 35.8211 30.9765 37.9375C30.9414 39.8078 30.9344 39.8852 30.7726 40.2156C30.5406 40.6797 30.1328 41.0734 29.6476 41.3055L29.2539 41.4883H20.5H11.7461L11.3523 41.3055C10.8672 41.0734 10.4594 40.6797 10.2273 40.2156L10.0586 39.8711L10.0375 25.0914L10.0234 10.3117L10.1711 9.925C10.3328 9.48203 10.7758 8.98281 11.2047 8.76484C11.6969 8.51172 12.0273 8.47656 13.4617 8.52578C15.1351 8.58203 15.114 8.56797 15.2687 9.46094C15.3883 10.143 15.5781 10.5086 16.014 10.9164C16.6258 11.4719 16.5625 11.4648 20.5351 11.4648H24.0508L24.4164 11.2961C24.8383 11.1133 25.3797 10.5719 25.5414 10.1781C25.5976 10.0375 25.689 9.67891 25.7383 9.39062C25.8859 8.575 25.8789 8.58203 27.5383 8.52578C28.3609 8.49766 29.0219 8.51172 29.2047 8.55391C29.8937 8.7086 30.4633 9.1586 30.7726 9.78437C30.9344 10.1148 30.9414 10.1922 30.9765 12.0625C31.0117 14.1789 31.0258 14.2211 31.4406 14.418C31.7219 14.5516 31.7781 14.5516 32.0664 14.4109C32.4812 14.2141 32.5234 14.0313 32.5234 12.2594C32.5234 10.3188 32.4601 9.87578 32.1086 9.14453C31.6586 8.20938 31.0047 7.60469 30.0203 7.225L29.5351 7.03516L20.6758 7.0211C15.8031 7.0211 11.6898 7.04219 11.5351 7.07031ZM24.339 8.65234C24.3109 8.75078 24.2758 8.97578 24.2547 9.16563C24.1984 9.5875 24.0648 9.79844 23.7695 9.925C23.4179 10.0727 17.582 10.0727 17.2304 9.925C16.9351 9.79844 16.8015 9.5875 16.7453 9.16563C16.7242 8.97578 16.689 8.75078 16.6609 8.65234L16.6187 8.47656H20.5H24.3812L24.339 8.65234Z" fill="#322C2A"/>
                                    <path d="M27.039 17.7578C24.9718 18.7211 23.0311 19.6211 22.7288 19.7617C22.3351 19.9446 22.1593 20.0711 22.0819 20.2258C21.9905 20.4016 21.9765 21.0414 21.9905 25.0703L22.0116 29.711L22.1944 29.8867C22.3351 30.0274 25.6679 31.6164 30.5335 33.8664C30.6952 33.9367 30.9202 34 31.0257 33.993C31.3351 33.986 39.6952 30.0625 39.8499 29.8516C39.9694 29.6828 39.9765 29.4157 39.9765 25C39.9835 20.5492 39.9765 20.3172 39.8499 20.1485C39.7796 20.05 39.639 19.9375 39.5475 19.8883C37.7124 18.9953 31.2296 16.0492 31.0468 16.0282C30.8429 16.0071 30.1397 16.3094 27.039 17.7578ZM34.2179 19.0657C35.9335 19.8602 37.3608 20.5352 37.389 20.5563C37.41 20.5844 36.9952 20.8094 36.4679 21.0485L35.4976 21.4985L32.3616 20.0008C30.6319 19.1852 29.2186 18.4891 29.2186 18.461C29.2186 18.3977 30.8358 17.6313 30.9835 17.6242C31.0397 17.6172 32.4952 18.2711 34.2179 19.0657ZM30.5265 20.7953C32.2421 21.611 33.6483 22.3 33.6483 22.3211C33.6483 22.3844 31.089 23.5516 30.9765 23.5375C30.9202 23.5375 30.0343 23.1367 29.0077 22.6657C27.9811 22.1875 26.5679 21.5266 25.8647 21.1961C25.1616 20.8727 24.6061 20.5844 24.6343 20.5563C24.6976 20.493 27.271 19.3047 27.3413 19.3047C27.3765 19.3047 28.8108 19.9727 30.5265 20.7953ZM27.2147 23.4813L30.1679 24.8524L30.189 28.4524C30.203 31.3211 30.189 32.0383 30.1186 32.0102C30.0272 31.975 26.7226 30.4352 24.6483 29.4719L23.5585 28.9586L23.5374 25.3657L23.5233 21.7727L23.889 21.9414C24.0929 22.0328 25.5905 22.7219 27.2147 23.4813ZM38.4507 28.9446C38.3804 29.0078 31.8694 32.0313 31.7991 32.0313C31.771 32.0313 31.7499 30.4282 31.7499 28.4594V24.8946L33.1491 24.2477C33.9155 23.8891 34.5905 23.5797 34.6608 23.5516C34.7593 23.5094 34.7733 23.6289 34.7733 24.7891V26.0688L34.9772 26.2727C35.2022 26.4907 35.5327 26.5399 35.8491 26.3992C36.1866 26.2446 36.2147 26.125 36.2499 24.4094L36.285 22.7922L37.3749 22.286L38.4647 21.7727L38.4858 25.3375C38.4929 27.2922 38.4788 28.9164 38.4507 28.9446Z" fill="#322C2A"/>
                                </svg>
                                <p>Отслеживание доставки через приложение</p>
                            </div>
                        </div>
                    </div>
                    <div className="cloudThree">
                        <Image src={cloudThree} alt='cloud four' />
                    </div>
                    <div className="cloudFour">
                        <Image src={cloudFour} alt='cloud three' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;