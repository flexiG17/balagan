import React from 'react'
import styles from './Community.module.scss'
import AdviceBackground from "../assets/advice.svg";
import {useNavigate} from "react-router-dom";

const CommunityCard = ({text} : {text : string}) => {
    const navigate = useNavigate()

    return(
        <>
            <div className={styles.card}>
                <img
                    onClick={() => {
                        navigate('/community')
                    }}
                    className={styles.card_image} src={AdviceBackground} alt='Совет'/>
                <h5
                    onClick={() => {
                        navigate('/community')
                    }}
                    className={styles.card_title}>
                    {text}
                </h5>
            </div>
        </>
    )
}

export default CommunityCard