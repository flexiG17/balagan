import React from "react";
import styles from './SingleSectionPage.module.scss'
import PageTitle from "../PageTitle/PageTitle";
import EventsList from "../EventsList/EventsList";
import SectionFilter from "./SectionFilter/SectionFilter";
import RangeComponent from "../shared/range/RangeComponent";

const SingleSectionPage = () => {
    return (
        <div>
            <PageTitle title={'Дегустация'}/>
            <div className={styles.grid}>
                <SectionFilter/>
                <EventsList type={'event'}/>
            </div>
        </div>
    )
}

export default SingleSectionPage