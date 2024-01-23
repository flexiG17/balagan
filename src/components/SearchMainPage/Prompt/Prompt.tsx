import React, {Dispatch, SetStateAction} from 'react'
import styles from './Prompt.module.scss'
import ClockItem from '../assets/clock.svg'
import SearchIcon from '../assets/search.svg'

const Prompt = ({setInputData} : {setInputData : Dispatch<SetStateAction<string>>}) => {

    return (
        <section className={styles.block}>
            <section className={styles.block_info}>
                <h3 className={styles.block_info_title}>
                    История
                </h3>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p
                        onClick={() => setInputData('Литературный')}
                        className={styles.block_info_request_text}>
                        {`${'Литературный'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p
                        onClick={() => setInputData('Мастер-класс')}
                        className={styles.block_info_request_text}>
                        {`${'Мастер-класс'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={ClockItem} alt='Иконка'/>
                    <p
                        onClick={() => setInputData('Модный показ')}
                        className={styles.block_info_request_text}>
                        {`${'Модный показ'}`}
                    </p>
                </div>
            </section>

            <section className={styles.block_info}>
                <h3 className={styles.block_info_title}>Часто ищут</h3>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}
                       onClick={() => setInputData('Концерт федук')}>
                        {`${'Концерт федук'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}
                       onClick={() => setInputData('Рок')}>
                        {`${'Рок'}`}
                    </p>
                </div>
                <div className={styles.block_info_request}>
                    <img className={styles.block_info_request_icon} src={SearchIcon} alt='Иконка'/>
                    <p className={styles.block_info_request_text}
                       onClick={() => setInputData('Вечеринка')}>
                        {`${'Вечеринка'}`}
                    </p>
                </div>
            </section>
        </section>
    )
}

export default Prompt