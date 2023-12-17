import React from 'react'
import styles from './RecommendedEvent.module.scss'
import FavoriteIcon from "../../../assets/favorite.svg";
import ClockIcon from "../assets/clock.svg";
import PlaceIcon from "../assets/place.svg";
import {useNavigate} from "react-router-dom";

const RecommendedEventCard = () => {

    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/event')
    }

    return (
        <div className={styles.card}>
            <div
                onClick={handleNavigate}
                className={styles.card_image}>
                <div className={styles.card_image_icons}>
                    <div className={styles.card_price}>
                        <p className={styles.card_price_title}>
                            {`${'300 ₽'}`}
                        </p>
                    </div>
                    <div className={styles.card_image_icons_favorite}>
                        <img src={FavoriteIcon} alt='Добавить в избранное'/>
                    </div>
                </div>
            </div>
            <div className={styles.card_info}>
                <h5
                    onClick={handleNavigate}
                    className={styles.card_info_title}>
                    {`${'Дегустация пива'}`}
                </h5>
                <div className={styles.card_info_more}>
                    <img className={styles.card_info_more_icons} src={ClockIcon} alt='Иконка времени'/>
                    <div className={styles.card_info_more_text}>
                        {`${'15 августа'} · ${'12:00'}`}
                    </div>
                </div>
                <div className={styles.card_info_more}>
                    <img className={styles.card_info_more_icons} src={PlaceIcon} alt='Иконка места'/>
                    <div className={styles.card_info_more_text}>
                        {`${'Площадь 1985'}, ${'5 км'}`}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecommendedEventCard