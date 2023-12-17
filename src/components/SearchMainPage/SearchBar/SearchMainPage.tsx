import React, {useState} from 'react'
import styles from './SearchMainPage.module.scss'
import SearchIcon from '../assets/search.svg'
import FilterIcon from '../assets/filter.svg'
import Prompt from "../Prompt/Prompt";
import Answer from "../Answer/Answer";

const SearchMainPage = () => {
    const [cond, setCond] = useState(false)

    return (
        <>
            <section className={styles.block}>
                <div className={styles.block_component}>
                    <img className={styles.block_component_icon} src={SearchIcon} alt={'Кнопка поиска'}/>
                    <input
                        onFocus={() => {
                            setCond(true);
                        }}
                        className={styles.block_input} type="text" placeholder='Введите название'/>
                    {/*<img className={styles.block_component_icon} src={FilterIcon} alt={'Кнопка поиска'}/>*/}
                    {cond &&
                        <div className={styles.block_component_buttons}>
                            <button className={styles.block_component_buttons_search}>
                                <p className={styles.block_component_buttons_search_text}>
                                    Найти
                                </p>
                            </button>
                            <button
                                onClick={() => {
                                    setCond(false);
                                }}
                                className={styles.block_component_buttons_close}>
                                <p className={styles.block_component_buttons_close_text}>
                                    Закрыть
                                </p>
                            </button>
                        </div>}
                </div>
            </section>

            {cond &&
                <section className={styles.response}>
                    <Prompt/>
                    <Answer/>
                </section>}

        </>
    )
}

export default SearchMainPage