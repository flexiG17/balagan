import React from "react";
import styles from './EventPage.module.scss'
import Layout from "../../components/layout/Layout";
import EventComponent from "../../components/Event/EventComponent";
import {useLocation} from "react-router-dom";

const EventPage = () => {
    return(
        <Layout>
            <EventComponent/>
        </Layout>
    )
}

export default EventPage