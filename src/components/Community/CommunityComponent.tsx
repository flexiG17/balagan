import React from 'react'
import styles from './CommunityComponent.module.scss'
import CommunityTitle from "./CommunityTitle/CommunityTitle";
import CommunityDescription from "./CommunityDescription/CommunityDescription";
import CommunityParticipants from "./CommunityParticipants/CommunityParticipants";
import CommunityInterests from "./CommunityInterests/CommunityInterests";
import EventSchedule from "../Event/EventSchedule/EventSchedule";
import EventRating from "../Event/EventRating/EventRating";
import SimilarCommunity from "./SimilarCommunity/SimilarCommunity";
import {useLocation} from "react-router-dom";

const CommunityComponent = () => {
    const location = useLocation().pathname
    const community_id = +location[location.length - 1]

    return (
        <section className={styles.block}>
            <CommunityTitle/>
            <div className={styles.block_grid}>
                <CommunityDescription/>
                <div className={styles.block_grid_leftRightBlock}>
                    <CommunityParticipants/>
                    <CommunityInterests/>
                </div>
                <EventSchedule title={'Мероприятия коммьюнити'} buttonText={'Все запланированные мероприятия'}/>
                <EventRating/>
                <SimilarCommunity/>
            </div>
        </section>
    )
}
export default CommunityComponent