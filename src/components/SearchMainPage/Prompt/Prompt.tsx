import React from 'react'
import styles from './Prompt.module.scss'
import ClockItem from '../assets/clock.svg'
import SearchIcon from '../assets/search.svg'

const Prompt = () => {

    return (
        <section className={styles.block}>
            <section className={styles.block_info}>
                <h3 className={styles.block_info_title}>
                    История
                </h3>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Филармония'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Филармония'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Дегустация'}`}
                    </p>
                </div>
            </section>

            <section className={styles.block_info}>
                <h3 className={styles.block_info_title}>Часто ищут</h3>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Концерт федук'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Рок'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}>
                        {`${'Вечеринка'}`}
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Prompt