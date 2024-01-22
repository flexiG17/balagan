import React, {useEffect, useState} from 'react'
import styles from './SearchResults.module.scss'
import Layout from "../../components/layout/Layout";
import ThematicSection from "../../components/ThematicSection/ThematicSection";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import CommunityCard from "../../components/Community/SmallCard/CommunityCard";
import SectionCard from "../../components/Section/SectionCard/SectionCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import ClockItem from "../../components/SearchMainPage/assets/clock.svg";
import SearchIcon from "../../components/SearchMainPage/assets/search.svg";
import EventsList from "../../components/EventsList/EventsList";
import RangeComponent from "../../components/shared/range/RangeComponent";
import MultiselectComponent from "../../components/shared/multiselect/MultiselectComponent";
import {useLocation} from "react-router-dom";
import IEvent from "../../interfaces/IEvent";
import {getEvents} from "../../actions/eventActions";

const SearchResults = () => {
    const dataToSearch = useLocation().state.dataToSearch
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [eventCount, setEventCount] = useState(0)

    const eventsPerPage = 12
    const getNewData = (value: number) => {
        const offset = value * eventsPerPage - eventsPerPage

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
            <PageTitle title={'Поиск среди мероприятий'}/>
            <div className={styles.grid}>
                <section className={styles.block}>
                    <section className={styles.block_info}>
                        <div className={styles.block_info_count}>
                            <h2>
                                {Boolean(dataToSearch) ? dataToSearch : 'Всего'}
                            </h2>
                            <div className={styles.block_info_count_component}>
                                <p className={styles.block_info_count_component_text}>
                                    {eventCount}
                                </p>
                            </div>
                        </div>
                        <div className={styles.block_info_request}>
                            <p className={styles.block_info_request_text}>
                                {`${'Дегустация'}`}
                            </p>
                            <p className={styles.block_info_request_count}>
                                {`${'13'}`}
                            </p>
                        </div>
                        <div className={styles.block_info_request}>
                            <p className={styles.block_info_request_text}>
                                {`${'Выставки'}`}
                            </p>
                            <p className={styles.block_info_request_count}>
                                {`${'2'}`}
                            </p>
                        </div>
                        <div className={styles.block_info_request}>
                            <p className={styles.block_info_request_text}>
                                {`${'Времяпрепровождения'}`}
                            </p>
                            <p className={styles.block_info_request_count}>
                                {`${'1'}`}
                            </p>
                        </div>
                    </section>

                    <RangeComponent leftBorder={0} rightBorder={5679} title={'Цена, Р'}/>

                    <MultiselectComponent title={'Удаленность\n' +
                        'от места проведения'} type={'distance'}/>
                </section>
                <EventsList type={'event'} isLoading={isLoading} events={events} getNewData={getNewData}/>
            </div>
        </Layout>
    )
}

export default SearchResults