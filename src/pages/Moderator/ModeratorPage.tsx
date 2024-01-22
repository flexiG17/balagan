import React, {useEffect, useState} from 'react';
import styles from './ModeratorPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import SelectComponent from "../../components/shared/select/SelectComponent";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import IEvent from "../../interfaces/IEvent";
import {getEvents} from "../../actions/eventActions";
import LoadingComponent from "../../components/shared/loading/LoadingComponent";


const ModeratorPage = () => {
    const [events, setEvents] = useState<IEvent[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getEvents(16, 0, 0, 0)
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
                                25
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
                        {events.map(({event_id, name, place, price, date}) => {
                            return <RecommendedEventCard
                                event_id={event_id}
                                name={name}
                                price={price}
                                date={date}
                                place={place}
                                isEditMode={true}
                            />
                        })}
                    </>
                    }
                    {/*<RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>*/}
                </div>
            </section>
        </Layout>
    )
}

export default ModeratorPage