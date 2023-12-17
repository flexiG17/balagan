import React from "react";
import styles from './CommunityTitle.module.scss'

const CommunityTitle = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_data}>
                <h1 className={styles.block_data_title}>
                    Всё о хмели
                </h1>
                <p className={styles.block_data_text}>
                    Чтобы присоединиться к коммьюнити,
                    <br/>
                    скачайте <u>мобильную версию приложения</u>
                </p>
            </div>
        </section>
    )
}

export default CommunityTitle