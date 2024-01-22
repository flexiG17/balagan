import React from "react";
import styles from './EventSet.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";
import CardGridInterface from "./EventList.interface";
import BigCommunityCard from "../../Community/BigCard/BigCommunityCard";

const CardGrid = ({type, events, communities} : CardGridInterface) => {
    return (
        <section className={styles.events}>
            {type === 'community' &&
                <>
                    {communities?.map(({name, community_id, users, tags}) => {
                        return <BigCommunityCard name={name} community_id={community_id} users={users} tags={tags}/>
                    })}
                </>
            }
            {type === 'event' &&
                <>
                    {events?.map(({name, event_id, place, price, date}) => {
                        return <RecommendedEventCard name={name} event_id={event_id} place={place} price={price} date={date}/>
                    })}
                </>
            }
        </section>
    )
}

export default CardGrid