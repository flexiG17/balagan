import React from 'react'
import styles from './EventTitle.module.scss'
import FavoriteIcon from '../../../assets/favorite.svg'
import LoadingComponent from "../../shared/loading/LoadingComponent";
import IEvent from "../../../interfaces/IEvent";
import {Link} from "react-router-dom";

interface IProps extends IEvent{
    idEditMode?: boolean,
    isLoading?: boolean
}

const EventTitle = ({idEditMode = false, isLoading = false, name, url = '/'}: IProps) => {
    return (
        <section className={styles.block}>
            <div className={styles.block_data}>
                {isLoading
                    ?
                    <LoadingComponent color={'#fff'}/>
                    :
                    <>
                        <h1 className={styles.block_data_title}>
                            {name}
                        </h1>
                        <div className={styles.block_data_sections}>
                            <p className={styles.block_data_sections_text}>
                                {`${'Дегустации'}`}
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                 fill="none">
                                <circle cx="5" cy="5" r="5" fill="white"/>
                            </svg>
                            <p className={styles.block_data_sections_text}>
                                {`${'18+'}`}
                            </p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10"
                                 fill="none">
                                <circle cx="5" cy="5" r="5" fill="white"/>
                            </svg>
                            <p className={styles.block_data_sections_text}>
                                {`${'Свидания'}`}
                            </p>
                        </div>
                        <div className={styles.block_data_buttons}>
                            <button className={styles.block_data_buttons_buy}>
                                {idEditMode
                                    ?
                                        <p className={styles.block_data_buttons_buy_text}>
                                            Опубликовать
                                        </p>
                                    :
                                    <Link
                                        to={url}
                                        target="_blank"
                                        style={{textDecoration: 'none'}}
                                    >
                                        <p className={styles.block_data_buttons_buy_text}>
                                            Купить билеты
                                        </p>
                                    </Link>
                                }
                            </button>
                            <button className={styles.block_data_buttons_notActual}>
                                <p className={styles.block_data_buttons_notActual_text}>
                                    {idEditMode ? 'Отклонить' : 'Уже ходил'}
                                </p>
                            </button>
                        </div>
                    </>
                }
            </div>
        </section>
    )
}

export default EventTitle