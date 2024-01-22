import React from "react";
import styles from './BigCommunityCard.module.scss'
import CommunityImage from "../assets/advice.svg";
import NotFavoriteIcon from '../assets/notFavorite.svg'
import GroupPeopleIcon from '../assets/GroupPeople.svg'
import UserPhotoIcon from '../assets/UserPhoto.svg'
import {Link, useNavigate} from "react-router-dom";
import ICommunity from "../../../interfaces/ICommunity";

const BigCommunityCard = ({name, tags, users, community_id} : ICommunity) => {

    const navigatePath = `/community/${community_id}`

    return (
        <section className={styles.card}>
            <Link to={navigatePath} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                <img className={styles.card_image} src={CommunityImage} alt='Изображение'/>
            </Link>
            <Link to={navigatePath} style={{textDecoration: 'none'}}>
                <h5
                    className={styles.card_title}>
                    {name}
                </h5>
            </Link>
            <div className={styles.card_buttons}>
                {tags?.data.slice(0,2).map(({name, tag_id}) => {
                    return <Link to={`/section/${tag_id}`} className={styles.card_buttons_button} target={'_blank'}>
                        <p className={styles.card_buttons_button_text}>
                            {name}
                        </p>
                    </Link>
                })}
            </div>
            <div className={styles.card_data}>
                <img className={styles.card_data_image} src={GroupPeopleIcon} alt="Иконка людей"/>
                <p className={styles.card_data_text}>
                    {`${users?.count} участников`}
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