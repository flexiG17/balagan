import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.scss'
import ThematicSection from "../../components/ThematicSection/ThematicSection";
import WebApplicationSection from "../../components/WebApplicationSection/WebApplicationSection";
import RecommendedEventCard from "../../components/RecomendedEvent/Card/RecommendedEventCard";
import CommunityCard from "../../components/Community/SmallCard/CommunityCard";
import SectionCard from "../../components/Section/SectionCard/SectionCard";
import Layout from "../../components/layout/Layout";
import SearchMainPage from "../../components/SearchMainPage/SearchBar/SearchMainPage";
import {getEvents} from "../../actions/eventActions";
import LoadingComponent from "../../components/shared/loading/LoadingComponent";
import IEvent from "../../interfaces/IEvent";
import {getCommunities} from "../../actions/communityActions";
import ICommunity from "../../interfaces/ICommunity";
import {getTags} from "../../actions/tagActions";
import ITag from "../../interfaces/ITag";

const MainPage = () => {
    const [isEventLoading, setIsEventLoading] = useState(true)
    const [events, setEvents] = useState<IEvent[]>([])

    const [isCommunityLoading, setIsCommunityLoading] = useState(true)
    const [communities, setCommunities] = useState<ICommunity[]>([])

    const [isTagLoading, setIsTagLoading] = useState(true)
    const [tags, setTags] = useState<ITag[]>([])

    console.log(tags);
    useEffect(() => {
        getEvents(4, 0, 0, 0)
            .then(({data}) => {
                setIsEventLoading(false)
                setEvents(data.data)
            })
            .catch((e) =>
                alert(e)
            )

        getCommunities(6, 0, 0)
            .then(({data}) => {
                setIsCommunityLoading(false)
                setCommunities(data.data)
            })
            .catch((e) =>
                alert(e)
            )

        getTags(4, 0)
            .then(({data}) => {
                setIsTagLoading(false)
                setTags(data.data)
            })
            .catch((e) =>
                alert(e)
            )
    }, [])

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
                    {isEventLoading
                        ?
                        <LoadingComponent/>
                        :
                        <>
                            {events.map((event) => {
                                return <RecommendedEventCard
                                    image={event.image}
                                    name={event.name}
                                    event_id={event.event_id}
                                    place={event.place}
                                    date={event.date}
                                    price={event.price}
                                />
                            })}
                        </>}
                </ThematicSection>
                <ThematicSection title={'Популярные коммьюнити'} action={'popularCommunity'}>
                    {isCommunityLoading
                        ?
                        <LoadingComponent/>
                        :
                        <>
                            {communities.map((community) => {
                                return <CommunityCard
                                    image={community.image}
                                    key={community.community_id}
                                    name={community.name}
                                    community_id={community.community_id}
                                    tags={community.tags}
                                    description={community.description}/>
                            })}
                        </>}
                </ThematicSection>
                <ThematicSection title={'Разделы'} action={'sectionsList'}>
                    {isTagLoading
                        ?
                        <LoadingComponent/>
                        :
                        <>
                            {tags.map((tag) => {
                                return <SectionCard name={tag.name} tag_id={tag.tag_id} image={tag.image}
                                                    description={tag.description}/>
                            })}
                        </>
                    }
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