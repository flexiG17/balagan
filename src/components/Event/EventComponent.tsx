import React from 'react'
import styles from './EventComponent.module.scss'
import EventTitle from "./EventTitle/EventTitle";
import EventInfo from "./EventInfo/EventInfo";
import EventRating from "./EventRating/EventRating";
import EventCommunity from "./EventCommunity/EventCommunity";
import EventSchedule from "./EventSchedule/EventSchedule";
import EventPlace from "./EventPlace/EventPlace";
import PopularEvent from "./PopularEvent/PopularEvent";

const EventComponent = ({isEditMode = false} : {isEditMode? : boolean}) => {
    return (
        <section className={styles.grid}>
            <EventTitle idEditMode={isEditMode}/>
            <div className={styles.block_grid}>
                <EventInfo/>
                <EventCommunity/>
                {!isEditMode && <EventRating/>}
                {!isEditMode && <EventSchedule title={"Расписание"} buttonText={'Все даты'}/>}
                <EventPlace/>
                {!isEditMode && <PopularEvent/>}
            </div>
        </section>
    )
}

export default EventComponent