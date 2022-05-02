import styles from '../styles/Work.module.css'

const Work = () => {
    return(
        <section className='work'>
            <div className="container">
                <h2 className={styles.workTitle}>Как работает доставка</h2>

                <div className={styles.workCards}>
                    <div className={styles.workCard}>
                        <div className={styles.workCardImage}>
                        <svg className={styles.workCardImageSvg} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_559_3725)">
                            <path d="M12.2559 0.136688C11.4355 0.341766 10.8203 0.693329 10.1953 1.31833C9.23828 2.26559 8.88672 3.24216 8.88672 4.93161V5.85934H25H41.1133V4.93161C41.1133 3.25192 40.7617 2.27536 39.7949 1.30856C39.1602 0.673798 38.4668 0.283173 37.6172 0.107391C36.8359 -0.0586243 12.9199 -0.0293274 12.2559 0.136688Z" fill="#9DB3C0"/>
                            <path d="M8.88672 22.0215V35.2539H25H41.1133V22.0215V8.78903H25H8.88672V22.0215ZM20.0391 11.9238C20.8887 12.0996 21.582 12.4902 22.2168 13.125C23.125 14.0332 23.623 15.3418 23.5156 16.5039L23.4668 16.9922L23.8184 17.0605C24.2676 17.1582 25.7324 17.1582 26.1816 17.0605L26.5332 16.9922L26.4844 16.5039C26.377 15.3222 26.875 14.0234 27.7832 13.1347C29.541 11.3965 32.2168 11.3965 33.9355 13.125C34.6289 13.8183 35.0098 14.5605 35.1758 15.5371C35.4004 16.8164 34.9512 18.2422 34.0234 19.2383C33.2129 20.1074 31.6992 20.6933 30.5664 20.5859L30.0781 20.5371L30.0098 20.8886C29.9707 21.084 29.9316 21.6113 29.9316 22.0703C29.9316 22.5293 29.9707 23.0566 30.0098 23.2519L30.0781 23.6035L30.5664 23.5547C31.7383 23.4472 33.0371 23.9355 33.9355 24.8437C36.4551 27.373 35.0879 31.6406 31.5527 32.2461C30.1758 32.4804 28.8184 32.041 27.7832 31.0058C26.875 30.1074 26.377 28.8086 26.4844 27.6367L26.5332 27.1484L26.1816 27.08C25.7324 26.9824 24.2676 26.9824 23.8184 27.08L23.4668 27.1484L23.5156 27.6367C23.6133 28.7207 23.1152 30.0879 22.3047 30.957C22.0605 31.2109 21.5723 31.582 21.2012 31.7773C19.4434 32.6953 17.4707 32.4023 16.0645 31.0058C14.3262 29.2871 14.3262 26.5625 16.0645 24.8535C16.9824 23.9453 18.2715 23.4472 19.4336 23.5547L19.9219 23.6035L19.9902 23.2519C20.0293 23.0566 20.0684 22.5293 20.0684 22.0703C20.0684 21.6113 20.0293 21.084 19.9902 20.8886L19.9219 20.5371L19.4336 20.5859C18.2715 20.6933 16.9824 20.1953 16.0645 19.2871C14.3262 17.5683 14.3262 14.8437 16.0645 13.1347C17.168 12.041 18.5742 11.6211 20.0391 11.9238Z" fill="#9DB3C0"/>
                            <path d="M18.4375 14.9511C18.0176 15.166 17.6758 15.7422 17.6758 16.2109C17.6758 16.9336 18.418 17.6758 19.1309 17.6758C19.8828 17.6758 20.6055 16.9531 20.6055 16.2109C20.6055 15.7226 20.2637 15.166 19.8242 14.9414C19.3457 14.6972 18.9062 14.6972 18.4375 14.9511Z" fill="#9DB3C0"/>
                            <path d="M30.1562 14.9511C29.7363 15.166 29.3945 15.7422 29.3945 16.2109C29.3945 16.9336 30.1367 17.6758 30.8496 17.6758C31.6016 17.6758 32.3242 16.9531 32.3242 16.2109C32.3242 15.7226 31.9824 15.166 31.543 14.9414C31.0645 14.6972 30.625 14.6972 30.1562 14.9511Z" fill="#9DB3C0"/>
                            <path d="M22.7834 19.9412C22.8127 20.0291 22.8908 20.5467 22.9494 21.0838C23.0666 22.0213 22.9689 23.701 22.7834 24.199C22.7346 24.3064 22.7639 24.3357 22.8713 24.2869C23.3693 24.1014 25.049 24.0037 25.9865 24.1209C26.5236 24.1795 27.0412 24.2576 27.1291 24.2869C27.2365 24.3357 27.2658 24.3064 27.217 24.199C27.1877 24.1111 27.1096 23.5936 27.051 23.0564C26.9338 22.1189 27.0314 20.4392 27.217 19.9412C27.2658 19.8338 27.2365 19.8045 27.1193 19.8533C27.0412 19.8826 26.5236 19.9607 25.9865 20.0291C25.0295 20.156 23.76 20.0779 22.9592 19.8533C22.7736 19.8045 22.7346 19.824 22.7834 19.9412Z" fill="#9DB3C0"/>
                            <path d="M18.4375 26.6699C18.0176 26.8847 17.6758 27.4609 17.6758 27.9297C17.6758 28.6523 18.418 29.3945 19.1309 29.3945C19.8828 29.3945 20.6055 28.6718 20.6055 27.9297C20.6055 27.4414 20.2637 26.8847 19.8242 26.6601C19.3457 26.416 18.9062 26.416 18.4375 26.6699Z" fill="#9DB3C0"/>
                            <path d="M30.1562 26.6699C29.7363 26.8847 29.3945 27.4609 29.3945 27.9297C29.3945 28.6523 30.1367 29.3945 30.8496 29.3945C31.6016 29.3945 32.3242 28.6718 32.3242 27.9297C32.3242 27.4414 31.9824 26.8847 31.543 26.6601C31.0645 26.416 30.625 26.416 30.1562 26.6699Z" fill="#9DB3C0"/>
                            <path d="M8.88672 42.0897C8.88672 44.6288 8.92578 46.1718 8.99414 46.5038C9.35547 48.1835 10.7031 49.5311 12.3828 49.8925C13.1055 50.0487 36.875 50.0487 37.6172 49.8925C39.2773 49.5409 40.6543 48.1542 41.0059 46.5038C41.0742 46.1718 41.1133 44.5702 41.1133 42.0897V38.1835H25H8.88672V42.0897ZM28.6133 41.4061C29.0527 41.6307 29.3945 42.1874 29.3945 42.6757C29.3945 43.1639 29.0527 43.7206 28.6133 43.9452C28.252 44.1307 28.0469 44.1405 24.9902 44.1405C21.8164 44.1405 21.748 44.1405 21.3672 43.9257C20.3809 43.369 20.3711 42.0311 21.3477 41.4452C21.7285 41.2108 21.7383 41.2108 24.9805 41.2108C28.0469 41.2108 28.252 41.2206 28.6133 41.4061Z" fill="#9DB3C0"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_559_3725">
                            <rect width="50" height="50" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <p className={styles.workCardTitle}>Шаг 1</p>
                        <p className={styles.workCardDescription}>Установите приложение Lintu  и включите пуш-уведомления</p>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workCardImage}>
                        <svg className={styles.workCardImageSvg} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_559_3718)">
                            <path d="M8.4668 0.0973759C7.73438 0.224329 6.99219 0.634485 6.47461 1.21066C6.14258 1.58175 5.23438 3.13449 3.34961 6.56222C1.88477 9.21847 0.683594 11.4353 0.683594 11.4743C0.683594 11.5525 18.0762 11.4548 18.1543 11.3767C18.1738 11.3474 18.4082 8.96456 18.6621 6.0837C18.916 3.19308 19.1504 0.644251 19.1699 0.409876L19.2188 -0.00028038L14.0723 0.00948524C11.25 0.0192509 8.7207 0.0583134 8.4668 0.0973759Z" fill="#9DB3C0"/>
                            <path d="M22.3631 0.0683594C22.3533 0.117188 22.5877 2.68555 22.8709 5.78125L23.3885 11.4258H32.1971H41.0057L38.9939 7.83203C37.9002 5.85938 36.66 3.64258 36.2498 2.89062C35.3904 1.33789 34.8338 0.693359 34.0135 0.3125L33.4471 0.0488281L27.91 0.0195312C24.8533 0.00976562 22.3631 0.0292969 22.3631 0.0683594Z" fill="#9DB3C0"/>
                            <path d="M5.88867 14.6191L0 14.6484L0.00976562 24.248C0.0195312 29.5215 0.0488281 35.0879 0.0878906 36.6211C0.146484 39.2773 0.166016 39.4238 0.380859 39.8438C0.683594 40.4395 1.31836 41.0742 1.9043 41.3867L2.39258 41.6504L10.9668 41.6797L19.5312 41.6992L19.4727 41.4355C19.4336 41.2793 19.3652 41.0645 19.3262 40.9375C19.1113 40.3809 18.8379 38.4082 18.7793 37.1582C18.6914 35.0391 18.9844 32.9297 19.6387 30.9082C20.0488 29.6777 21.2695 27.2656 22.0117 26.2207C24.5898 22.6465 28.4961 20.0684 32.7246 19.1504C35.3711 18.584 38.8379 18.6719 41.1621 19.3848C41.4355 19.4629 41.6602 19.5312 41.6797 19.5312C41.7285 19.5312 41.6992 16.123 41.6309 15.3516L41.5723 14.5508L26.6699 14.5703C18.4766 14.5898 9.12109 14.6094 5.88867 14.6191Z" fill="#9DB3C0"/>
                            <path d="M34.2772 23.0858C28.3494 24.1405 23.8768 28.7499 23.0369 34.6581C22.8905 35.6933 22.9686 38.1835 23.1834 39.1601C23.7498 41.748 24.9315 43.9648 26.7674 45.8495C28.7303 47.871 30.9764 49.1112 33.7694 49.7265C35.1854 50.039 37.744 50.039 39.1502 49.7265C41.9334 49.1015 44.0526 47.9491 46.0057 46.0058C47.9491 44.0526 49.1014 41.9335 49.7264 39.1503C50.0389 37.7441 50.0389 35.1855 49.7264 33.7694C49.3065 31.8358 48.5155 30.0487 47.3924 28.5058C46.6991 27.539 45.0096 25.8886 44.0623 25.2636C42.617 24.2968 40.9276 23.5741 39.2088 23.1933C38.2616 22.9784 35.2537 22.9101 34.2772 23.0858ZM41.9725 31.5136C42.6561 32.0214 42.8807 32.9101 42.4803 33.5644C42.3826 33.7304 40.7225 35.6835 38.8084 37.9003C36.3475 40.7421 35.2244 41.953 34.9998 42.0507C34.6092 42.2167 34.1991 42.2265 33.8182 42.0898C33.5057 41.9726 29.5506 38.0761 29.3358 37.6757C29.0233 37.08 29.2576 36.123 29.8045 35.7226C30.1268 35.498 30.8006 35.3905 31.2205 35.498C31.3866 35.537 32.0311 36.0937 32.8905 36.9433C34.2576 38.3105 34.2772 38.3202 34.4627 38.1347C34.5604 38.0273 35.8592 36.5331 37.3436 34.8144C38.867 33.0468 40.1951 31.5917 40.4002 31.4648C40.8494 31.1913 41.5721 31.2108 41.9725 31.5136Z" fill="#9DB3C0"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_559_3718">
                            <rect width="50" height="50" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <p className={styles.workCardTitle}>Шаг 1</p>
                        <p className={styles.workCardDescription}>Оформите доставку в приложении или на сайте и выберите удобное время</p>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workCardImage}>
                        <svg className={styles.workCardImageSvg} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_559_3711)">
                            <path d="M20.7515 3.11523C18.525 3.48633 16.5523 4.58984 15.2925 6.16211C14.5699 7.07031 14.1402 7.87109 13.7789 8.93555C12.8999 11.5918 13.2515 14.8633 14.7359 17.627C15.1753 18.4473 19.3062 25.957 20.4683 28.0371C21.0933 29.1504 21.3277 29.3457 22.0699 29.3457C22.8121 29.3457 23.0464 29.1504 23.6714 28.0371C25.0679 25.5371 28.9937 18.3984 29.4136 17.5977C29.9605 16.5723 30.3707 15.4297 30.6246 14.2383C30.8687 13.125 30.8687 10.7617 30.6343 9.83398C29.8335 6.62109 27.3921 4.13086 24.2671 3.32031C23.398 3.08594 21.5523 2.98828 20.7515 3.11523ZM22.9683 7.5293C23.8082 7.71484 24.5113 8.10547 25.146 8.74023C27.6753 11.2598 26.2984 15.5273 22.7632 16.1328C21.3863 16.3672 20.0289 15.9277 18.9937 14.8926C17.2554 13.1738 17.2554 10.4492 18.9937 8.74023C20.0972 7.64648 21.5132 7.2168 22.9683 7.5293Z" fill="#9DB3C0"/>
                            <path d="M21.3672 10.5566C20.9473 10.7715 20.6055 11.3477 20.6055 11.8164C20.6055 12.5391 21.3477 13.2812 22.0605 13.2812C22.8125 13.2812 23.5352 12.5586 23.5352 11.8164C23.5352 11.3281 23.1934 10.7715 22.7539 10.5469C22.2754 10.3027 21.8359 10.3027 21.3672 10.5566Z" fill="#9DB3C0"/>
                            <path d="M3.3689 17.8125C2.54858 18.0176 1.93335 18.3691 1.30835 18.9941C0.673584 19.6289 0.282959 20.3223 0.107178 21.1719C-0.0490723 21.9043 -0.0490723 42.7539 0.107178 43.4766C0.292725 44.3164 0.68335 45.0195 1.31812 45.6543C2.27515 46.6113 3.25171 46.9727 4.9314 46.9727H5.85913V32.3242V17.6758L4.86304 17.6855C4.3064 17.6855 3.64233 17.7441 3.3689 17.8125Z" fill="#9DB3C0"/>
                            <path d="M8.78906 32.3242V46.9727H22.0215H35.2539V41.1133V35.2539H32.3242H29.3945V37.5977C29.3945 39.7656 29.375 39.9805 29.1992 40.332C29.0723 40.5859 28.8672 40.791 28.6133 40.918C28.2422 41.1133 28.0566 41.1133 20.5957 41.1133H12.9688L12.5781 40.8984C12.3438 40.7617 12.1094 40.5273 12.002 40.3125C11.8262 39.9707 11.8164 39.668 11.8164 35.2539C11.8164 30.8301 11.8262 30.5371 12.002 30.1953C12.3633 29.4922 12.5293 29.4531 15.3516 29.3945L17.8613 29.3457L15.2637 24.6582C13.8281 22.0801 12.4023 19.4531 12.0801 18.8184L11.4941 17.6758H10.1367H8.78906V32.3242Z" fill="#9DB3C0"/>
                            <path d="M32.1973 18.5742C31.9629 19.0723 31.5918 19.7656 31.3867 20.1172C31.1719 20.4688 29.8145 22.9199 28.3691 25.5762C25.5078 30.8105 25.2637 31.1621 24.1309 31.7773C23.1543 32.3047 22.9395 32.3242 18.6816 32.3242H14.7461V35.2539V38.1836H20.6055H26.4648V35.8398C26.4648 33.1543 26.5137 32.9395 27.2266 32.5391C27.6074 32.3242 27.6563 32.3242 31.4355 32.3242H35.2539V25V17.6758H33.9355H32.6172L32.1973 18.5742Z" fill="#9DB3C0"/>
                            <path d="M38.1836 32.3242V46.9727H42.0898C44.5801 46.9727 46.1719 46.9336 46.5039 46.8652C48.1641 46.5137 49.541 45.127 49.8926 43.4766C50.0488 42.7441 50.0391 21.8945 49.8926 21.1719C49.5313 19.4922 48.1738 18.1348 46.5039 17.7832C46.1719 17.7148 44.5801 17.6758 42.0898 17.6758H38.1836V32.3242ZM43.3594 29.5898C44.043 29.9414 44.1406 30.2734 44.1406 32.3242C44.1406 34.375 44.043 34.707 43.3594 35.0586C42.8613 35.3125 42.4512 35.3027 41.9727 35.0391C41.2891 34.6484 41.2109 34.3652 41.2109 32.3047C41.2207 30.2637 41.2891 30.0293 41.9531 29.6289C42.4219 29.3457 42.8516 29.3359 43.3594 29.5898Z" fill="#9DB3C0"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_559_3711">
                            <rect width="50" height="50" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <p className={styles.workCardTitle}>Шаг 1</p>
                        <p className={styles.workCardDescription}>Отслеживайте доставку в приложении или просто дождитесь уведомления</p>
                    </div>
                    <div className={styles.workCard}>
                        <div className={styles.workCardImage}>
                        <svg className={styles.workCardImageSvg} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.927564 0.136742C0.00959536 0.537132 -0.283373 1.78713 0.361158 2.54885C0.800611 3.06643 1.07405 3.12502 2.97835 3.12502H4.68733V4.51174V5.90823L4.15022 6.19143C3.48616 6.53323 2.89046 7.16799 2.55842 7.89065C2.29475 8.44729 2.29475 8.45705 2.26546 11.1817C2.22639 14.2969 2.27522 14.6485 2.83186 15.5176C3.58381 16.6797 4.6678 17.1875 6.38655 17.1875C7.00178 17.1875 7.58772 17.1289 7.91975 17.0313C8.93538 16.7383 9.88264 15.8985 10.2928 14.9121L10.449 14.5313L12.6658 14.5703C14.824 14.5996 14.9119 14.6094 15.4295 14.8535C15.9471 15.0977 16.8358 15.8789 16.7479 16.0156C16.7283 16.0547 14.8729 17.1485 12.6268 18.4668C9.00374 20.586 8.47639 20.9278 7.86116 21.5332C7.47053 21.9239 7.04085 22.4707 6.8553 22.8223C6.46467 23.5645 6.15217 24.7461 6.15217 25.4981C6.15217 26.0449 7.70491 35.7227 7.90999 36.4453C8.1053 37.1485 8.92561 37.6074 9.73616 37.4512C10.1951 37.3633 10.8006 36.7578 10.8885 36.2891C10.9373 36.0742 10.6639 34.1602 10.0975 30.752C9.14046 24.9414 9.15022 24.9707 9.75569 24.0821C10.0975 23.584 10.1854 23.5254 14.5994 20.9473C16.3182 19.9414 17.9588 18.9746 18.2518 18.7989L18.7791 18.4864L19.4237 18.9649C20.2342 19.5703 21.3768 20.127 22.5096 20.4688C23.6522 20.8008 25.6248 20.8985 26.8065 20.6739C28.2811 20.3906 29.9315 19.6387 31.0643 18.7403L31.3084 18.5449L35.5076 21.0059C37.8123 22.3535 39.8143 23.5645 39.951 23.6914C40.283 24.0137 40.6151 24.6778 40.6834 25.2051C40.7225 25.5078 40.4979 27.1289 39.8924 30.791C39.3358 34.1992 39.0623 36.0645 39.1112 36.2891C39.1991 36.7578 39.7948 37.3633 40.2635 37.4512C41.0741 37.6074 41.8944 37.1485 42.0897 36.4453C42.2948 35.7227 43.8475 26.0449 43.8475 25.4981C43.8475 24.2676 43.2713 22.7735 42.4315 21.8067C41.7967 21.084 41.4647 20.8692 37.2557 18.4082C35.1658 17.1875 33.408 16.1524 33.3592 16.1133C33.203 15.9668 34.0623 15.166 34.6971 14.8828C35.3026 14.5996 35.3123 14.5996 37.5682 14.5703L39.8241 14.5313L40.0194 14.961C40.4881 15.9864 41.2596 16.6797 42.3045 17.0117C43.0565 17.2364 44.658 17.2559 45.4198 17.0313C46.4647 16.7285 47.3924 15.8887 47.8221 14.8438C47.9783 14.4531 47.9979 14.0918 47.9979 11.4258V8.44729L47.6756 7.79299C47.2948 7.01174 46.6112 6.36721 45.8494 6.04494L45.3123 5.82034V4.48244V3.13479L47.158 3.10549C48.8475 3.07619 49.033 3.05666 49.2772 2.87112C49.7948 2.49026 49.951 2.17776 49.951 1.56252C49.951 0.947289 49.7948 0.634789 49.2772 0.253929C49.0135 0.048851 48.9061 0.048851 43.7498 0.048851C38.5936 0.048851 38.4862 0.048851 38.2225 0.253929C37.7049 0.634789 37.5487 0.947289 37.5487 1.56252C37.5487 2.17776 37.7049 2.49026 38.2225 2.87112C38.4666 3.05666 38.6522 3.07619 40.3416 3.10549L42.1873 3.13479V4.52151V5.90823L41.6502 6.19143C41.0057 6.52346 40.3221 7.24612 40.078 7.86135L39.8924 8.3008H37.6366C35.8983 8.3008 35.283 8.27151 34.9705 8.15432C34.2381 7.90041 33.7303 7.44143 33.0662 6.44534C31.6014 4.2676 29.5018 2.83205 27.0018 2.29494C25.7713 2.02151 23.9256 2.06057 22.7147 2.38284C20.3905 2.9883 18.5057 4.33596 17.158 6.34768C16.5135 7.31448 16.1619 7.6758 15.576 7.9883C15.0877 8.25198 15.0682 8.25198 12.744 8.28127L10.4002 8.31057L10.2147 7.84182C9.951 7.18752 9.08186 6.34768 8.37874 6.05471L7.81233 5.82034V4.48244V3.13479L9.65803 3.10549C11.3475 3.07619 11.533 3.05666 11.7772 2.87112C12.2948 2.49026 12.451 2.17776 12.451 1.56252C12.451 0.947289 12.2948 0.634789 11.7772 0.253929C11.5135 0.048851 11.3865 0.048851 6.36702 0.0293198C2.23616 0.00978851 1.16194 0.0293198 0.927564 0.136742Z" fill="#9DB3C0"/>
                            <path d="M22.7735 25.9862C21.6797 26.533 20.8203 27.0115 20.8692 27.0506C20.9082 27.0897 23.4571 28.408 26.5137 29.9803L32.0801 32.8318L34.3262 31.7186L36.5625 30.5955L31.0059 27.8416C27.8516 26.2694 25.293 25.0682 25.0977 25.0389C24.8242 25.0096 24.3848 25.1951 22.7735 25.9862Z" fill="#9DB3C0"/>
                            <path d="M16.0452 29.3263L13.4866 30.6056L19.2483 33.4669L25.0198 36.3184L27.4612 35.0977L29.9123 33.8673L28.7502 33.2618C28.1155 32.9298 26.0061 31.8458 24.0725 30.8692C22.1389 29.8829 20.1174 28.8477 19.5803 28.5645L18.6038 28.047L16.0452 29.3263Z" fill="#9DB3C0"/>
                            <path d="M12.5 37.9003C12.5 42.6464 12.5195 43.6132 12.6367 43.8378C12.7539 44.0624 13.8379 44.6581 18.3887 47.0312L23.9941 49.9608L24.0527 44.0038C24.0918 40.7226 24.082 38.0175 24.043 37.9784C24.0039 37.9394 21.3965 36.6308 18.2422 35.078L12.5 32.246V37.9003Z" fill="#9DB3C0"/>
                            <path d="M35.156 33.3986L32.8611 34.5509L32.8123 36.8165L32.7634 39.0822L32.49 39.3165C32.0994 39.6486 31.6111 39.629 31.24 39.2677L30.9568 38.9845V37.2658C30.9568 36.3185 30.9373 35.547 30.908 35.547C30.8787 35.547 29.7361 36.0939 28.3787 36.7579L25.8982 37.9591L25.947 43.9064C25.9666 47.1779 25.9958 49.8732 26.0056 49.9122C26.0251 49.9513 27.8318 49.0236 35.283 45.1271C36.7771 44.3458 37.2458 44.0529 37.363 43.838C37.4802 43.6036 37.4997 42.715 37.4802 37.9103L37.4509 32.2462L35.156 33.3986Z" fill="#9DB3C0"/>
                        </svg>
                        </div>
                        <p className={styles.workCardTitle}>Шаг 1</p>
                        <p className={styles.workCardDescription}>Встретьте дрона-курьера, введите код из СМС в приложении и заберите посылку</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work;