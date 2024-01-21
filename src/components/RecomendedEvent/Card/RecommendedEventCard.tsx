import React from 'react'
import styles from './RecommendedEvent.module.scss'
import FavoriteIcon from "../../../assets/favorite.svg";
import ClockIcon from "../assets/clock.svg";
import PlaceIcon from "../assets/place.svg";
import {Link, useNavigate} from "react-router-dom";
import IEvent from '../../../interfaces/IEvent';

interface IProps extends IEvent{
    isEditMode? : boolean,
}

const RecommendedEventCard = ({isEditMode = false, event_id, name, date, place, price} : IProps) => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        return `/event/${event_id}`
    }

    return (
        <div className={styles.card}>
            <Link
                className={styles.card_image}
                to={handleNavigate()}
                style={{textDecoration: 'none'}}
                state={{isEditMode : isEditMode}}
            >
                    <div className={styles.card_image_icons}>
                        <div className={styles.card_price}>
                            <p className={styles.card_price_title}>
                                {!isEditMode ? `${price}₽` : 'В обработке'}
                            </p>
                        </div>
                    </div>
            </Link>
            <div className={styles.card_info}>
                <Link
                    to={handleNavigate()}
                    style={{textDecoration: 'none'}}
                    state={{isEditMode : isEditMode}}
                >
                    <h5
                        className={styles.card_info_title}>
                        {name}
                    </h5>
                </Link>
                <div className={styles.card_info_more}>
                    <img className={styles.card_info_more_icons} src={ClockIcon} alt='Иконка времени'/>
                    <div className={styles.card_info_more_text}>
                        {Boolean(date) ? date : new Date().toLocaleDateString('ru')}
                    </div>
                </div>
                <div className={styles.card_info_more}>
                    <img
                        style={{paddingRight: 5, paddingLeft: 3}}
                        className={styles.card_info_more_icons} src={PlaceIcon} alt='Иконка места'/>
                    <div className={styles.card_info_more_text}>
                        {place}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedEventCard