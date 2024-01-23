import React, {useEffect, useState} from 'react';
import styles from './ModeratorPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import SelectComponent from "../../components/shared/select/SelectComponent";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import IEvent from "../../interfaces/IEvent";
import {getEvents, getModeratorEvents} from "../../actions/eventActions";
import LoadingComponent from "../../components/shared/loading/LoadingComponent";


const ModeratorPage = () => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getModeratorEvents(16, 0, false)
            .then(({data} : {data: {data : IEvent[], count: number}}) => {
                setIsLoading(false)
                setEvents(data.data)
            })
    }, []);

    return (
        <Layout>
            <PageTitle title={'Модераторство событий'}/>
            <section className={styles.block}>
                <div className={styles.block_navPanel}>
                    <div className={styles.block_navPanel_count}>
                        <p className={styles.block_navPanel_count_text}>
                            Все
                        </p>
                        <div className={styles.block_navPanel_count_container}>
                            <p className={styles.block_navPanel_count_container_value}>
                                {events.length}
                            </p>
                        </div>
                    </div>
                    <SelectComponent/>
                </div>
                <div className={styles.block_eventsGrid}>
                    {isLoading
                    ?
                        <LoadingComponent/>
                    :
                    <>
                        {events.map((event) => {
                            return <RecommendedEventCard
                                // @ts-ignore
                                status={event['es.status']}
                                image={event.image}
                                event_id={event.event_id}
                                name={event.name}
                                price={event.price}
                                date={event.date}
                                place={event.place}
                                isEditMode={true}
                            />
                        })}
                    </>
                    }
                </div>
            </section>
        </Layout>
    )
}

export default ModeratorPage