import React from "react";
import styles from './CommunityDescription.module.scss'
import ICommunity from "../../../interfaces/ICommunity";

const CommunityDescription = ({description} : ICommunity) => {
    return (
        <section className={styles.block}>
            <p className={styles.block_text}>
                {description}
            </p>
            <p className={styles.block_link}>
                Читать далее
            </p>
        </section>
    )
}

export default CommunityDescription