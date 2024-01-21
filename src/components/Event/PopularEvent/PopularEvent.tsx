import React from 'react'
import styles from './PopularEvent.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";

const PopularEvent = () => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Популярно на этой неделе
            </h2>
            <div className={styles.block_events}>
                {/*<RecommendedEventCard/>
                <RecommendedEventCard/>
                <RecommendedEventCard/>
                <RecommendedEventCard/>*/}
            </div>
        </section>
    )
}

export default PopularEvent