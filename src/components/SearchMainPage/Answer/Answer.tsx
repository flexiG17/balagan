import React, {useEffect, useState} from 'react'
import styles from './Answer.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";
import {Link, useNavigate} from "react-router-dom";
import IEvent from "../../../interfaces/IEvent";
import {getEvents} from "../../../actions/eventActions";
import LoadingComponent from "../../shared/loading/LoadingComponent";

const Answer = ({inputData}: { inputData: string }) => {
    const [events, setEvents] = useState<IEvent[]>()
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getEvents(3, 4, 0, 0)
            .then(({data}) => {
                setLoading(false)
                setEvents(data.data)
            })
    }, []);

    const dataToDisplay =
        events?.filter((value) => value?.name?.toLowerCase().includes(inputData.toLowerCase()))

    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>Популярные мероприятия сейчас</h3>

            <div className={styles.block_events}>
                {isLoading
                    ?
                    <LoadingComponent/>
                    :
                    <>
                        {dataToDisplay?.map(({name, event_id, date, place, price, image}) => {
                            return <RecommendedEventCard name={name} event_id={event_id} date={date} price={price}
                                                         place={place} image={image}/>
                        })}
                    </>
                }
            </div>

            <button
                className={styles.block_button}>
                <Link to={'/searchResults'} style={{textDecoration: 'none'}} state={{dataToSearch: inputData}}>
                    <p className={styles.block_button_text}>
                        Смотреть все результаты &nbsp;&nbsp;{'>'}
                    </p>
                </Link>
            </button>
        </section>
    )
}

export default Answer