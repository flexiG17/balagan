import React, {useEffect, useState} from "react";
import styles from './SingleSectionPage.module.scss'
import PageTitle from "../PageTitle/PageTitle";
import EventsList from "../EventsList/EventsList";
import SectionFilter from "./SectionFilter/SectionFilter";
import RangeComponent from "../shared/range/RangeComponent";
import IEvent from "../../interfaces/IEvent";
import {getEvents} from "../../actions/eventActions";
import {useLocation, useParams} from "react-router-dom";

const SingleSectionPage = () => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [eventCount, setEventCount] = useState(1)
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = React.useState(1);

    const eventsPerPage = 12
    const offset = page * eventsPerPage - eventsPerPage
    const getNewData = () => {
        setIsLoading(true)
        getEvents(eventsPerPage, page * eventsPerPage - eventsPerPage, 0, 0)
            .then(({data} : {data: {data : IEvent[]}}) => {
                setIsLoading(false)
                setEvents(data.data)
            })
    }

    const tagId = useParams().id

    useEffect(() => {
        getEvents(eventsPerPage, offset, 0, 0)
            .then(({data} : {data: {data : IEvent[], count: number}}) => {
                /*const events = [...data.data]
                    .filter((event) => event.tags?.data
                        .forEach(({tag_id}) => {
                            console.log(tag_id, 'tag_id');
                            console.log(tagId, 'from path');
                            console.log(tag_id.toString() === tagId);
                            if (tag_id.toString() === tagId)
                                return true
                        }))
                setEvents(events)*/

                setIsLoading(false)
                setEventCount(data.count)
                setEvents(data.data)
            })
    }, []);

    return (
        <div>
            <PageTitle title={'Дегустация'}/>
            <div className={styles.grid}>
                <SectionFilter count={eventCount}/>
                <EventsList page={page} setPage={setPage} type={'event'} isLoading={isLoading} events={events} getNewData={getNewData}/>
            </div>
        </div>
    )
}

export default SingleSectionPage