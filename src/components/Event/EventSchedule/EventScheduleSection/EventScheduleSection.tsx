import React from 'react'
import styles from './EventScheduleSection.module.scss'
import EventScheduleSectionInterface from "./EventScheduleSection.interface";

const EventScheduleSection = (props : EventScheduleSectionInterface) => {
    return (
        <div className={styles.block}>
            <div className={styles.block_place}>
                <h3 className={styles.block_place_title}>
                    {props.section}
                </h3>
                <p className={styles.block_place_text}>
                    {props.place}
                </p>
            </div>
            <div className={styles.block_date}>
                <p className={styles.block_date_count}>
                    {props.dateCount}
                </p>
                <div className={styles.block_date_block}>
                    <div className={styles.block_date_block_day}>
                        {props.day}
                    </div>
                    <div className={styles.block_date_block_month}>
                        {props.month}
                    </div>
                </div>
            </div>
            <div className={styles.block_time}>
                {props.time}
            </div>
            <button className={styles.block_button}>
                <p>
                    {props.price}
                </p>
            </button>
        </div>
    )
}

export default EventScheduleSection