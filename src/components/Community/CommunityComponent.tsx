import React, {useEffect, useState} from 'react'
import styles from './CommunityComponent.module.scss'
import CommunityTitle from "./CommunityTitle/CommunityTitle";
import CommunityDescription from "./CommunityDescription/CommunityDescription";
import CommunityParticipants from "./CommunityParticipants/CommunityParticipants";
import CommunityInterests from "./CommunityInterests/CommunityInterests";
import EventSchedule from "../Event/EventSchedule/EventSchedule";
import EventRating from "../Event/EventRating/EventRating";
import SimilarCommunity from "./SimilarCommunity/SimilarCommunity";
import {useLocation, useParams} from "react-router-dom";
import {getSingleCommunity} from "../../actions/communityActions";
import ICommunity from "../../interfaces/ICommunity";
import {InitialStateCommunity} from "../utils/initialStates/initialState";

const CommunityComponent = () => {
    const [community, setCommunity] = useState<ICommunity>(InitialStateCommunity)
    const [isLoading, setLoading] = useState(true)

    const communityId = useParams().id

    useEffect(() => {
        getSingleCommunity(communityId)
            .then(({data}) => {
                setCommunity(data)
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }, []);
    return (
        <section className={styles.block}>
            <CommunityTitle isLoading={isLoading} name={community.name}/>
            <div className={styles.block_grid}>
                <CommunityDescription description={community.description}/>
                <div className={styles.block_grid_leftRightBlock}>
                    <CommunityParticipants users={community.users} organizer={community.organizer}/>
                    <CommunityInterests tags={community.tags}/>
                </div>
                {/*<EventSchedule title={'Мероприятия коммьюнити'} buttonText={'Все запланированные мероприятия'}/>*/}
                <EventRating/>
                <SimilarCommunity/>
            </div>
        </section>
    )
}
export default CommunityComponent