import React, {Dispatch, SetStateAction, useEffect, useState} from 'react'
import styles from './PopularEvent.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";
import {getEvents} from "../../../actions/eventActions";
import IEvent from "../../../interfaces/IEvent";
import {InitialStateEvent} from "../../utils/initialStates/initialState";
import LoadingComponent from "../../shared/loading/LoadingComponent";

const PopularEvent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [eventList, setEventList] = useState<IEvent[]>([InitialStateEvent])

    useEffect(() => {
        getEvents(4, 4, 0, 0)
            .then(({data}) => {
                setIsLoading(false)
                setEventList(data.data)
            })
    }, [])

    console.log(eventList);
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Популярно на этой неделе
            </h2>
            <div className={styles.block_events}>
                {
                    isLoading
                        ?
                        <LoadingComponent/>
                        :
                        eventList.map((event) => {
                            return <RecommendedEventCard isEditMode={false} name={event.name} event_id={event.event_id}
                                                         place={event.place} date={event.date} price={event.price}/>
                        })}
            </div>
        </section>
    )
}

export default PopularEvent