import React from 'react'
import styles from './EventSchedule.module.scss'
import EventScheduleSection from "./EventScheduleSection/EventScheduleSection";

interface PropsType {
    title: string,
    buttonText: string
}

const EventSchedule = ({title, buttonText} : PropsType) => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                {title}
            </h2>
            <EventScheduleSection
                section={'Дегустация пива'}
                day={'понедельник'}
                dateCount={'15'}
                month={'января'}
                place={'г. Екатеринбург, ул. Мира, 47'}
                price={'300 Р'}
                time={'15:00'}
            />
            <EventScheduleSection
                section={'Что-то интересное'}
                day={'вторник'}
                dateCount={'07'}
                month={'февраля'}
                place={'г. Екатеринбург, ул. Мира, 32'}
                price={'1500 Р'}
                time={'11:00'}
            />
            <EventScheduleSection
                section={'Ура ведро гвоздей'}
                day={'суббота'}
                dateCount={'23'}
                month={'декабря'}
                place={'г. Екатеринбург, ул. Аграрная, 104'}
                price={'700 Р'}
                time={'19:00'}
            />

            <button className={styles.block_button}>
                <p>
                    {buttonText}
                </p>
            </button>
        </section>
    )
}

export default EventSchedule