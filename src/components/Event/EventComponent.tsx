import React, {useEffect, useState} from 'react'
import styles from './EventComponent.module.scss'
import EventTitle from "./EventTitle/EventTitle";
import EventInfo from "./EventInfo/EventInfo";
import EventRating from "./EventRating/EventRating";
import EventCommunity from "./EventCommunity/EventCommunity";
import EventSchedule from "./EventSchedule/EventSchedule";
import EventPlace from "./EventPlace/EventPlace";
import PopularEvent from "./PopularEvent/PopularEvent";
import {useLocation, useParams} from "react-router-dom";
import {getSingleEvent} from "../../actions/eventActions";
import IEvent from "../../interfaces/IEvent";
import {InitialStateEvent} from "../utils/initialStates/initialState";
import LoadingComponent from "../shared/loading/LoadingComponent";

const EventComponent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [event, setEvent] = useState<IEvent>()

    const location = useLocation()
    const isEditMode = location.state ? location.state.isEditMode : false
    const event_id = useParams().id

    const formattedName = event?.name?.replace('&quot;', '«').replace('&quot;', '»')

    useEffect(() => {
        getSingleEvent(event_id)
            .then(({data}) => {
                setIsLoading(false)
                setEvent(data)
            })
    }, [])

    return (
        <section className={styles.grid}>
            <EventTitle setLoading={setIsLoading}
                // @ts-ignore
                event_id={event_id} idEditMode={isEditMode} isLoading={isLoading} name={formattedName} url={event?.url}/>
            <div className={styles.block_grid}>
                {isLoading
                    ?
                    <LoadingComponent/>
                    :
                    <>
                    <EventInfo event={event}/>
                    {event?.communities?.data[0] && <EventCommunity communities={event?.communities?.data}/>}
                    {!isEditMode && <EventRating/>}
                    {!isEditMode && <EventSchedule title={"Расписание"} buttonText={'Все даты'} event={event}/>}
                    <EventPlace place={event?.place}/>
                    {!isEditMode && <PopularEvent/>}
                </>}

            </div>
        </section>
    )
}

export default EventComponent