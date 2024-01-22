import React, {useEffect, useState} from 'react'
import styles from './SearchMainPage.module.scss'
import SearchIcon from '../assets/search.svg'
import FilterIcon from '../assets/filter.svg'
import Prompt from "../Prompt/Prompt";
import Answer from "../Answer/Answer";
import IEvent from "../../../interfaces/IEvent";
import {getEvents} from "../../../actions/eventActions";

const SearchMainPage = () => {
    const [isActive, setIsActive] = useState(false)
    const [inputData, setInputData] = useState('')

    return (
        <>
            <section className={styles.block}>
                <div className={styles.block_component}>
                    <img className={styles.block_component_icon} src={SearchIcon} alt={'Кнопка поиска'}/>
                    <input
                        onFocus={() => {
                            setIsActive(true);
                        }}
                        onChange={e => setInputData(e.target.value)}
                        className={styles.block_input} type="text" placeholder='Введите название'
                        value={inputData}
                    />
                    {/*<img className={styles.block_component_icon} src={FilterIcon} alt={'Кнопка поиска'}/>*/}
                    {isActive &&
                        <div className={styles.block_component_buttons}>
                            <button className={styles.block_component_buttons_search}>
                                <p className={styles.block_component_buttons_search_text}>
                                    Найти
                                </p>
                            </button>
                            <button
                                onClick={() => {
                                    setInputData('')
                                    setIsActive(false);
                                }}
                                className={styles.block_component_buttons_close}>
                                <p className={styles.block_component_buttons_close_text}>
                                    Закрыть
                                </p>
                            </button>
                        </div>}
                </div>
            </section>

            {isActive &&
                <section className={styles.response}>
                    <Prompt setInputData={setInputData}/>
                    <Answer inputData={inputData}/>
                </section>}

        </>
    )
}

export default SearchMainPage