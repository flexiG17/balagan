import React from "react";
import styles from './RecommendedEventPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import EventsList from "../../components/EventsList/EventsList";
import EventFilter from "../../components/RecomendedEvent/Filter/EventFilter";

const RecommendedEventPage = () => {
    return (
        <Layout>
            <PageTitle title={'События'}/>
            <div className={styles.block}>
                <EventFilter/>
                <EventsList type={'event'}/>
            </div>
        </Layout>
    )
}

export default RecommendedEventPage