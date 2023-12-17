import React from "react";
import styles from './SimilarCommunity.module.scss'
import CommunityCard from "../SmallCard/CommunityCard";

const SimilarCommunity = () => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Похожие коммьюнити
            </h2>
            <div className={styles.block_card}>
                <CommunityCard text={'Все о хмели'}/>
                <CommunityCard text={'Сомелье'}/>
                <CommunityCard text={'Пивной Екатеринбург'}/>
                <CommunityCard text={'Фермерство как смысл жизни'}/>
                <CommunityCard text={'Клуб любителей рока'}/>
            </div>
        </section>
    )
}

export default SimilarCommunity