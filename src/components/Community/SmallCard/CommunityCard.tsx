import React from 'react'
import styles from './Community.module.scss'
import AdviceBackground from "../assets/advice.svg";
import {Link, useNavigate} from "react-router-dom";
import ICommunity from "../../../interfaces/ICommunity";

const CommunityCard = (props : ICommunity) => {
    const pathToNavigate = `/community/${props.community_id}`

    return(
        <>
            <div className={styles.card}>
                <Link to={pathToNavigate} style={{textDecoration: "none"}}>
                    <img
                        className={styles.card_image} src={AdviceBackground} alt='Совет'/>
                </Link>
                <Link to={pathToNavigate} style={{textDecoration: "none"}}>
                    <h5
                        className={styles.card_title}>
                        {props.name}
                    </h5>
                </Link>
            </div>
        </>
    )
}

export default CommunityCard