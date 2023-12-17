import React from 'react';
import styles from './MainPage.module.scss'
import SearchIcon from '../../components/SearchMainPage/assets/search.svg'
import FilterIcon from '../../components/SearchMainPage/assets/filter.svg'
import ThematicSection from "../../components/ThematicSection/ThematicSection";
import WebApplicationSection from "../../components/WebApplicationSection/WebApplicationSection";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import CommunityCard from "../../components/Community/SmallCard/CommunityCard";
import SectionCard from "../../components/Section/SectionCard/SectionCard";
import Layout from "../../components/layout/Layout";
import SearchMainPage from "../../components/SearchMainPage/SearchBar/SearchMainPage";
import Prompt from "../../components/SearchMainPage/Prompt/Prompt";

const MainPage = () => {

    return (
        <Layout>
            <section className={styles.mainInfoBlock}>
                <div className={styles.contentOnTop}>
                    <h1 className={styles.h1TitleBlock}>
                        НАЙДИТЕ <br/> КОМПАНИЮ ДЛЯ ПОСЕЩЕНИЯ <br/> МЕРОПРИЯТИЙ ГОРОДА <br/> УЖЕ СЕЙЧАС
                    </h1>
                    <div className={styles.rightBlock}>
                        <h3 className={styles.h3TitleBlock}>
                            Выставки современного <br/> искусства, концерты, <br/> дегустации
                        </h3>
                        <button className={styles.findCompanyButton}>
                            <h5 className={styles.findCompanyButton_title}>
                                Найти компанию
                            </h5>
                        </button>
                    </div>
                </div>
            </section>
            <section className={styles.mainContent}>
                <SearchMainPage/>
                <ThematicSection title={'Рекомендуем посетить'} action={'recommended'}>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>
                    <RecommendedEventCard/>
                </ThematicSection>
                <ThematicSection title={'Популярные коммьюнити'} action={'popularCommunity'}>
                    <CommunityCard text={'Все о хмели'}/>
                    <CommunityCard text={'Сомелье'}/>
                    <CommunityCard text={'Пивной Екатеринбург'}/>
                    <CommunityCard text={'Фермерство как смысл жизни'}/>
                    <CommunityCard text={'Клуб любителей рока'}/>
                </ThematicSection>
                <ThematicSection title={'Разделы'} action={'sectionsList'}>
                    <SectionCard title={'ВЫСТАВКИ'} text={'Все современное искусство города в одном месте'}/>
                    <SectionCard title={'КОНЦЕРТЫ'} text={'Все выступления твоих любимых исполнителей'}/>
                    <SectionCard title={'ДЕГУСТАЦИИ'} text={'Сыр, вино, чайные церемонии что еще надо для счастья?'}/>
                    <SectionCard title={'СВИДАНИЯ'} text={'Красивые и романтичные места для времяпрепровождения'}/>
                </ThematicSection>
            </section>
            <section className={styles.secondInformation}>
                <h1 className={styles.secondInformationTitle}>
                    ЗАЧЕМ НУЖНА ПЛАТФОРМА?
                </h1>

                <div className={styles.secondInformationDirection}>
                    <div className={styles.sectionBlock}>
                        <div className={styles.secondInformationImage}>
                        </div>
                        <h5 className={styles.secondInformationText}>
                            {`${'ПРЕИМУЩЕСТВО\n' +
                            'ПЕРВОЕ'}`}
                        </h5>
                    </div>
                    <div className={styles.sectionBlock}>
                        <div className={styles.secondInformationImage}>
                        </div>
                        <h5 className={styles.secondInformationText}>
                            {`${'ПРЕИМУЩЕСТВО\n' +
                            'ПЕРВОЕ'}`}
                        </h5>
                    </div>
                    <div className={styles.sectionBlock}>
                        <div className={styles.secondInformationImage}>
                        </div>
                        <h5 className={styles.secondInformationText}>
                            {`${'ПРЕИМУЩЕСТВО\n' +
                            'ПЕРВОЕ'}`}
                        </h5>
                    </div>
                    <div className={styles.sectionBlock}>
                        <div className={styles.secondInformationImage}>
                        </div>
                        <h5 className={styles.secondInformationText}>
                            {`${'ПРЕИМУЩЕСТВО\n' +
                            'ПЕРВОЕ'}`}
                        </h5>
                    </div>
                </div>
            </section>
            <WebApplicationSection/>
        </Layout>
    )
}

export default MainPage