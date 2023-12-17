import React from 'react'
import styles from './EventTitle.module.scss'
import FavoriteIcon from '../../../assets/favorite.svg'

const EventTitle = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_data}>
                <h1 className={styles.block_data_title}>
                    Дегустация пива
                </h1>
                <div className={styles.block_data_sections}>
                    <p className={styles.block_data_sections_text}>
                        {`${'Дегустации'}`}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="5" fill="white"/>
                    </svg>
                    <p className={styles.block_data_sections_text}>
                        {`${'18+'}`}
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <circle cx="5" cy="5" r="5" fill="white"/>
                    </svg>
                    <p className={styles.block_data_sections_text}>
                        {`${'Свидания'}`}
                    </p>
                </div>
                <div className={styles.block_data_buttons}>
                    <button className={styles.block_data_buttons_buy}>
                        <p className={styles.block_data_buttons_buy_text}>
                            Купить билеты
                        </p>
                    </button>
                    <div className={styles.block_data_buttons_favorite}>
                        <svg
                            className={styles.block_data_buttons_favorite_icon}
                            width="30" height="30">
                            <path d="M14.9905 6.41965C12.4913 3.49788 8.32371 2.71193 5.19239 5.38739C2.06108 8.06286 1.62023 12.5361 4.07927 15.7004C6.12379 18.3313 12.3112 23.88 14.3391 25.6759C14.566 25.8768 14.6795 25.9773 14.8118 26.0168C14.9273 26.0512 15.0536 26.0512 15.1691 26.0168C15.3015 25.9773 15.4149 25.8768 15.6418 25.6759C17.6697 23.88 23.8571 18.3313 25.9017 15.7004C28.3607 12.5361 27.9737 8.03471 24.7885 5.38739C21.6034 2.74007 17.4897 3.49788 14.9905 6.41965Z" fill="white" stroke="#100F21" stroke-width="2.16499" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <button className={styles.block_data_buttons_notActual}>
                        <p className={styles.block_data_buttons_notActual_text}>
                            Уже ходил
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EventTitle