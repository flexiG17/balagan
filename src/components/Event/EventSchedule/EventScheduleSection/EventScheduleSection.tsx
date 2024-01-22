import React from 'react'
import styles from './EventScheduleSection.module.scss'
import EventScheduleSectionInterface from "./EventScheduleSection.interface";
import EventSchedule from "../EventSchedule";
import {Link} from "react-router-dom";

const EventScheduleSection = ({name, place = 'г. Екатеринбург', dateCount, day, month, time, price = 300, url='/'} : EventScheduleSectionInterface) => {
    return (
        <div className={styles.block}>
            <div className={styles.block_position}>
                <div className={styles.block_place}>
                    <h3 className={styles.block_place_title}>
                        {name}
                    </h3>
                    <p className={styles.block_place_text}>
                        {place}
                    </p>
                </div>
                <div className={styles.block_date}>
                    <p className={styles.block_date_count}>
                        {dateCount}
                    </p>
                    <div className={styles.block_date_block}>
                        <div className={styles.block_date_block_day}>
                            {day}
                        </div>
                        <div className={styles.block_date_block_month}>
                            {month}
                        </div>
                    </div>
                </div>
                <div className={styles.block_time}>
                    {time}
                </div>
                <div className={styles.block_buttonPosition}>
                    <Link
                        to={url}
                        className={styles.block_buttonPosition_container}
                        target='_blank'
                    >
                        <p>
                            {price} Р
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default EventScheduleSection