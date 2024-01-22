import React from 'react'
import styles from './EventSchedule.module.scss'
import EventScheduleSection from "./EventScheduleSection/EventScheduleSection";
import IEvent from "../../../interfaces/IEvent";

interface PropsType {
    title: string,
    buttonText: string,
    event?: IEvent
}

const EventSchedule = ({title, buttonText, event} : PropsType) => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                {title}
            </h2>
            <EventScheduleSection
                name={event?.name}
                day={'понедельник'}
                dateCount={'15'}
                month={'января'}
                place={event?.place}
                price={event?.price}
                url={event?.url}
                time={'15:00'}
            />
            <EventScheduleSection
                name={event?.name}
                day={'вторник'}
                dateCount={'07'}
                month={'февраля'}
                place={event?.place}
                price={event?.price}
                url={event?.url}
                time={'11:00'}
            />
            <EventScheduleSection
                name={event?.name}
                day={'суббота'}
                dateCount={'23'}
                month={'декабря'}
                place={event?.place}
                price={event?.price}
                url={event?.url}
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