import React from 'react'
import styles from './Answer.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";
import {useNavigate} from "react-router-dom";

const Answer = () => {

    const navigate = useNavigate()
    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>Популярные мероприятия сейчас</h3>

            <div className={styles.block_events}>
                <RecommendedEventCard/>
                <RecommendedEventCard/>
                <RecommendedEventCard/>
            </div>

            <button
                onClick={() => { navigate('/searchResults')}}
                className={styles.block_button}>
                <p className={styles.block_button_text}>
                    Смотреть все результаты &nbsp;&nbsp;{'>'}
                </p>
            </button>
        </section>
    )
}

export default Answer