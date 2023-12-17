import React from "react";
import styles from './PopularCommunityPage.module.scss'
import Layout from "../../../components/layout/Layout";
import PageTitle from "../../../components/PageTitle/PageTitle";
import CommunityFilter from "../../../components/Community/Filter/CommunityFilter";
import EventsList from "../../../components/EventsList/EventsList";

const PopularCommunityPage = () => {
    return (
        <Layout>
            <PageTitle title={'Коммьюнити'}/>
            <div className={styles.block}>
                <CommunityFilter/>
                <EventsList type={'community'}/>
            </div>
        </Layout>
    )
}

export default PopularCommunityPage