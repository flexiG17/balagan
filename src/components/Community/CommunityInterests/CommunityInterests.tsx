import React from "react";
import styles from './ComunityInterests.module.scss'
import CommunitySections from "../CommunitySections/CommunitySections";
import ICommunity from "../../../interfaces/ICommunity";

const CommunityInterests = ({tags} : ICommunity) => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Наши интересы
            </h2>
            <p className={styles.block_text}>
                Или на каких мероприятиях любим проводить время
            </p>

            <CommunitySections tags={tags}/>
        </section>
    )
}

export default CommunityInterests