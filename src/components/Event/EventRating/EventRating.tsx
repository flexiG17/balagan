import React from "react";
import styles from './EventRating.module.scss'

const EventRating = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_title}>
                <h3 className={styles.block_title_text}>
                    Отзывы и оценки
                </h3>
            </div>
            <p className={styles.block_description}>
                Отзывов еще нет, будьте первым!
            </p>
        </section>
    )
}

export default EventRating