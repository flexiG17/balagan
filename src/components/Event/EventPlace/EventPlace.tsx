import React from 'react'
import styles from './EventPlace.module.scss'

const EventPlace = () => {
    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>
                Как нас найти?
            </h3>
            <p className={styles.block_text}>
                Город Екатеринбург, ул. Мира, 47
                <br/><br/>
                Вход с улицы Малышева. Если возникли вопросы со входом, обратитесь за помощью к администратору: +79087608234
            </p>
        </section>
    )
}

export default EventPlace