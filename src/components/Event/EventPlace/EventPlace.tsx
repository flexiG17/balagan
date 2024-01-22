import React from 'react'
import styles from './EventPlace.module.scss'
import IEvent from "../../../interfaces/IEvent";

const EventPlace = ({place} : IEvent) => {
    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>
                Как нас найти?
            </h3>
            <p className={styles.block_text}>
                г. Екатеринбург,
                <br/>
                <br/>
                {place}
            </p>
        </section>
    )
}

export default EventPlace