import React from "react";
import styles from './CommunityDescription.module.scss'

const CommunityDescription = () => {
    return (
        <section className={styles.block}>
            <p className={styles.block_text}>
                Ждем всех, кто хочет узнать больше о напитках и любит весело проводить время!
                <br/><br/>
                Мы любим ходить на дегустации, мастер-классы, лекции, а также в пабы!
            </p>
            <p className={styles.block_link}>
                Читать далее
            </p>
        </section>
    )
}

export default CommunityDescription