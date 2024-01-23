import React, {useEffect, useState} from "react";
import styles from './RecommendedEventPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import EventsList from "../../components/EventsList/EventsList";
import EventFilter from "../../components/RecomendedEvent/Filter/EventFilter";
import IEvent from "../../interfaces/IEvent";
import {useLocation} from "react-router-dom";
import {getEvents} from "../../actions/eventActions";

const RecommendedEventPage = () => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [eventCount, setEventCount] = useState(0)

    const eventsPerPage = 12
    const getNewData = (value: number) => {
        const offset = value * eventsPerPage - eventsPerPage
        console.log(offset);

        setIsLoading(true)
        getEvents(eventsPerPage, value * eventsPerPage - eventsPerPage, 0, 0)
            .then(({data} : {data: {data : IEvent[], count: number}}) => {
                setIsLoading(false)
                setEvents(data.data)
            })
    }

    useEffect(() => {
        getEvents(eventsPerPage, 0, 0, 0)
            .then(({data} : {data: {data : IEvent[], count: number}}) => {
                setEventCount(data.count)
                setIsLoading(false)
                setEvents(data.data)
            })
    }, []);

    return (
        <Layout>
            <PageTitle title={'События'}/>
            <div className={styles.block}>
                <EventFilter count={eventCount}/>
                <EventsList type={'event'} isLoading={isLoading} events={events} getNewData={getNewData} />
            </div>
        </Layout>
    )
}

export default RecommendedEventPage