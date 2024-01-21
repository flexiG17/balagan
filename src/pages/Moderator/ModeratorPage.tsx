import React from 'react';
import styles from './ModeratorPage.module.scss'
import Layout from "../../components/layout/Layout";
import PageTitle from "../../components/PageTitle/PageTitle";
import SelectComponent from "../../components/shared/select/SelectComponent";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";


const ModeratorPage = () => {
    return (
        <Layout>
            <PageTitle title={'Модераторство событий'}/>
            <section className={styles.block}>
                <div className={styles.block_navPanel}>
                    <div className={styles.block_navPanel_count}>
                        <p className={styles.block_navPanel_count_text}>
                            Все
                        </p>
                        <div className={styles.block_navPanel_count_container}>
                            <p className={styles.block_navPanel_count_container_value}>
                                25
                            </p>
                        </div>
                    </div>
                    <SelectComponent/>
                </div>
                <div className={styles.block_eventsGrid}>
                    {/*<RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>
                    <RecommendedEventCard isEditMode={true}/>*/}
                </div>
            </section>
        </Layout>
    )
}

export default ModeratorPage