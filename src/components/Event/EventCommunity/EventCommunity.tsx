import React from "react";
import styles from './EventCommunity.module.scss'
import CommunityCard from "../../Community/SmallCard/CommunityCard";
import ICommunity from "../../../interfaces/ICommunity";

const EventCommunity = ({communities = []} : {communities?: ICommunity[] }) => {
    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>
                Коммьюнити
            </h3>
            <p className={styles.block_text}>
                Коммьюнити, которые уже добавили мероприятие к себе
            </p>

            <div className={styles.block_community}>
                {communities.map((community) => {
                    return <CommunityCard community_id={community.community_id} name={community.name}/>
                })}
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="50" fill="#3B285C"/>
                    <path d="M38.0154 73.2048C39.3693 74.2651 41.5644 74.2651 42.9183 73.2048L65.9537 55.1646C70.0144 51.9845 70.0155 46.8291 65.9565 43.6478L43.1781 25.7952C41.8242 24.7349 39.6291 24.7349 38.2753 25.7952C36.9214 26.8555 36.9214 28.5746 38.2753 29.6349L61.0595 47.4783C62.4137 48.5388 62.4137 50.2577 61.0595 51.3179L38.0154 69.3649C36.6615 70.4254 36.6615 72.1443 38.0154 73.2048Z" fill="white"/>
                </svg>
            </div>
            <p className={styles.block_text}>
                Присоединяйся и найди себе компанию!
            </p>
        </section>
    )
}

export default EventCommunity