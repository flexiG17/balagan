import React, {useEffect, useState} from "react";
import styles from './PopularCommunityPage.module.scss'
import Layout from "../../../components/layout/Layout";
import PageTitle from "../../../components/PageTitle/PageTitle";
import CommunityFilter from "../../../components/Community/Filter/CommunityFilter";
import EventsList from "../../../components/EventsList/EventsList";
import IEvent from "../../../interfaces/IEvent";
import {getEvents} from "../../../actions/eventActions";
import ICommunity from "../../../interfaces/ICommunity";
import {getCommunities} from "../../../actions/communityActions";

const PopularCommunityPage = () => {
    const [communities, setCommunities] = useState<ICommunity[]>([])

    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = React.useState(1);

    const eventsPerPage = 12
    const offset = page * eventsPerPage - eventsPerPage
    const getNewData = () => {
        setIsLoading(true)
        getEvents(eventsPerPage, page * eventsPerPage - eventsPerPage, 0, 0)
            .then(({data}: { data: { data: ICommunity[] } }) => {
                setIsLoading(false)
                setCommunities(data.data)
            })
    }

    useEffect(() => {
        getCommunities(eventsPerPage, offset, 0)
            .then(({data} : {data: {data : ICommunity[]}}) => {
                setIsLoading(false)
                setCommunities(data.data)
            })
    }, []);
    return (
        <Layout>
            <PageTitle title={'Коммьюнити'}/>
            <div className={styles.block}>
                <CommunityFilter count={communities.length}/>
                <EventsList page={page} setPage={setPage} type={'community'} isLoading={isLoading} communities={communities} getNewData={getNewData}/>
            </div>
        </Layout>
    )
}

export default PopularCommunityPage