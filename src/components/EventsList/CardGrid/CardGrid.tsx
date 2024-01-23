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
                    {communities?.map(({name, community_id, users, tags, image}) => {
                        return <BigCommunityCard image={image} name={name} community_id={community_id} users={users} tags={tags}/>
                    })}
                </>
            }
            {type === 'event' &&
                <>
                    {events?.map(({name, event_id, place, price, date, image}) => {
                        return <RecommendedEventCard name={name} event_id={event_id} place={place} price={price} date={date} image={image}/>
                    })}
                </>
            }
        </section>
    )
}

export default CardGrid