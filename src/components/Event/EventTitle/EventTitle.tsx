import React from 'react'
import styles from './EventTitle.module.scss'
import FavoriteIcon from '../../../assets/favorite.svg'

const EventTitle = ({idEditMode = false} : {idEditMode? : boolean}) => {
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
                            {idEditMode ? 'Опубликовать' : 'Купить билеты'}
                        </p>
                    </button>
                    <button className={styles.block_data_buttons_notActual}>
                        <p className={styles.block_data_buttons_notActual_text}>
                            {idEditMode ? 'Отклонить' : 'Уже ходил'}
                        </p>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default EventTitle