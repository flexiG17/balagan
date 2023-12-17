import React from 'react'
import styles from './TimeLine.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";

const TimeLine = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_titles}>
                <p className={styles.block_titles_month}>
                    Январь
                </p>
                <p className={styles.block_titles_interval}>
                    Выбрать промежуток
                </p>
            </div>
            <div className={styles.block_days}>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        15
                    </p>
                    <p className={styles.block_days_date_label}>
                        вт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        16
                    </p>
                    <p className={styles.block_days_date_label}>
                        ср
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        17
                    </p>
                    <p className={styles.block_days_date_label}>
                        чт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        18
                    </p>
                    <p className={styles.block_days_date_label}>
                        пт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        19
                    </p>
                    <p className={styles.block_days_date_label}>
                        сб
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        20
                    </p>
                    <p className={styles.block_days_date_label}>
                        вс
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        21
                    </p>
                    <p className={styles.block_days_date_label}>
                        пн
                    </p>
                </div><div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        22
                    </p>
                    <p className={styles.block_days_date_label}>
                        вт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        23
                    </p>
                    <p className={styles.block_days_date_label}>
                        ср
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        24
                    </p>
                    <p className={styles.block_days_date_label}>
                        чт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        25
                    </p>
                    <p className={styles.block_days_date_label}>
                        пт
                    </p>
                </div>
                <div className={styles.block_days_date}>
                    <p className={styles.block_days_date_day}>
                        26
                    </p>
                    <p className={styles.block_days_date_label}>
                        сб
                    </p>
                </div>
            </div>
        </section>
    )
}

export default TimeLine