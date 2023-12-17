import React from "react";
import styles from './BigCommunityCard.module.scss'
import CommunityImage from "../assets/advice.svg";
import NotFavoriteIcon from '../assets/notFavorite.svg'
import GroupPeopleIcon from '../assets/GroupPeople.svg'
import UserPhotoIcon from '../assets/UserPhoto.svg'
import {useNavigate} from "react-router-dom";

const BigCommunityCard = () => {
    const navigate = useNavigate()

    return (
        <section className={styles.card}>
            <img className={styles.card_favorite} src={NotFavoriteIcon} alt='Не в избранном'/>
            <img
                onClick={() => {
                    navigate('/community')
                }}
                className={styles.card_image} src={CommunityImage} alt='Изображение'/>
            <h5
                onClick={() => {
                    navigate('/community')
                }}
                className={styles.card_title}>
                {`${'Все о хмели'}`}
            </h5>
            <div className={styles.card_buttons}>
                <button className={styles.card_buttons_button}>
                    <p className={styles.card_buttons_button_text}>
                        Выставки
                    </p>
                </button>
                <button className={styles.card_buttons_button}>
                    <p className={styles.card_buttons_button_text}>
                        Дегустации
                    </p>
                </button>
            </div>
            <div className={styles.card_data}>
                <img className={styles.card_data_image} src={GroupPeopleIcon} alt="Иконка людей"/>
                <p className={styles.card_data_text}>
                    {`${'33 участника'}`}
                </p>
            </div>
            <div className={styles.card_data}>
                <img className={styles.card_data_userImage} src={UserPhotoIcon} alt="Иконка пользователя"/>
                <p className={styles.card_data_text}>
                    {`${'ФИО создателя'}`}
                </p>
            </div>
        </section>
    )
}

export default BigCommunityCard