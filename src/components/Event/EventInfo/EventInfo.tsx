import React from "react";
import styles from './EventInfo.module.scss'

const EventInfo = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_data}>
                <div className={styles.block_data_price}>
                    <p className={styles.block_data_title}>
                        {`${'300 Р'}`}
                    </p>
                    <p className={styles.block_data_text}>
                        цена<br/>мероприятия
                    </p>
                </div>
                <div className={styles.block_data_date}>
                    <div className={styles.block_data_date_block}>
                        <p className={styles.block_data_title}>
                            {`${'15.01.2024'}`}
                        </p>
                        <p className={styles.block_data_text}>
                            ближайшая<br/>
                            дата проведения
                        </p>
                    </div>
                    <div className={styles.block_data_date_block}>
                        <p className={styles.block_data_title}>
                            {`${'15:00'}`}
                        </p>
                        <p className={styles.block_data_text}>
                            время<br/>
                            проведения
                        </p>
                    </div>
                </div>
                <div className={styles.block_data_time}>
                    <p className={styles.block_data_title}>
                        {`${'2 часа'}`}
                    </p>
                    <p className={styles.block_data_text}>
                        длительность<br/>
                        мероприятия
                    </p>
                </div>
            </div>

            <div className={styles.block_description}>
                <p className={styles.block_description_text}>
                    Погрузитесь в мир дегустации прямо на мероприятии!
                    <br/> <br/>
                    Найдите себе компанию и проведите время на 5+, наслаждаясь вкуснейшими напитками, сделанными на
                    Урале.
                </p>
                <p className={styles.block_description_more}>
                    Читать далее
                </p>
            </div>

            <div className={styles.block_photos}>
                <div className={styles.block_photos_image}>

                </div>
                <div className={styles.block_photos_image}>

                </div>
                <div className={styles.block_photos_image}>

                </div>
            </div>
        </section>
    )
}

export default EventInfo