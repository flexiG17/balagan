import React from 'react'
import styles from './EventsList.module.scss'
import TimeLine from "./TimeLine/TimeLine";
import SelectComponent from "../shared/select/SelectComponent";
import CardGrid from "./CardGrid/CardGrid";
import EventListInterface from "./EventList.interface";

const EventsList = ({type} : EventListInterface) => {

    return(
        <section className={styles.block}>
            <SelectComponent/>
            {type != 'community' && <TimeLine/>}
            <CardGrid type={type}/>
        </section>
    )
}

export default EventsList