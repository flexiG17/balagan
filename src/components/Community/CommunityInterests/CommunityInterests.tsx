import React from "react";
import styles from './ComunityInterests.module.scss'
import CommunitySections from "../CommunitySections/CommunitySections";

const CommunityInterests = () => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Наши интересы
            </h2>
            <p className={styles.block_text}>
                Или на каких мероприятиях любим проводить время
            </p>

            <CommunitySections/>
        </section>
    )
}

export default CommunityInterests