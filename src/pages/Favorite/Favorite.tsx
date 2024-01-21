import React from 'react'
import PageTitle from "../../components/PageTitle/PageTitle";
import ThematicSection from "../../components/ThematicSection/ThematicSection";
import WebApplicationSection from "../../components/WebApplicationSection/WebApplicationSection";
import styles from "./Favorite.module.scss"
import Layout from "../../components/layout/Layout";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import CommunityCard from "../../components/Community/SmallCard/CommunityCard";

const FavoritePage = () => {
    return (
        <Layout>
            <PageTitle title={'Избранное'}/>
            <ThematicSection title={'Рекомендуем посетить'} action={'recommended'}>
                {/*<RecommendedEventCard/>
                <RecommendedEventCard/>
                <RecommendedEventCard/>
                <RecommendedEventCard/>*/}
            </ThematicSection>
            <ThematicSection title={'Популярные коммьюнити'} action={'community'}>
                {/*<CommunityCard text={'Все о хмели'}/>
                <CommunityCard text={'Сомелье'}/>
                <CommunityCard text={'Пивной Екатеринбург'}/>
                <CommunityCard text={'Фермерство как смысл жизни'}/>
                <CommunityCard text={'Клуб любителей рока'}/>*/}
            </ThematicSection>
            <div className={styles.blockSeparator}>
                <WebApplicationSection/>
            </div>
        </Layout>
    )
}

export default FavoritePage