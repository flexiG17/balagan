import React from "react";
import styles from './EventSet.module.scss'
import RecommendedEventCard from "../../RecomendedEvent/Card/RecommendedEventCard";
import CardGridInterface from "./EventList.interface";
import BigCommunityCard from "../../Community/BigCard/BigCommunityCard";

const CardGrid = ({type} : CardGridInterface) => {
    return (
        <section className={styles.events}>
            {type === 'community' &&
                <>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                    <BigCommunityCard/>
                </>
            }
            {type === 'event' &&
                <>
                    {/*<RecommendedEventCard/>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>*/}
                </>
            }
        </section>
    )
}

export default CardGrid