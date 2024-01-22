import React from "react";
import styles from './EventInfo.module.scss'
import IEvent from "../../../interfaces/IEvent";

const EventInfo = ({event} : {event? : IEvent}) => {
    return (
        <section className={styles.block}>
            <div className={styles.block_data}>
                <div className={styles.block_data_price}>
                    <p className={styles.block_data_title}>
                        {`${event?.price} Р`}
                    </p>
                    <p className={styles.block_data_text}>
                        цена<br/>мероприятия
                    </p>
                </div>
                <div className={styles.block_data_date}>
                    <div className={styles.block_data_date_block}>
                        <p className={styles.block_data_title}>
                            {/*{event.date}*/}
                            {new Date().toLocaleDateString('ru')}
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
                    {event?.description}
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