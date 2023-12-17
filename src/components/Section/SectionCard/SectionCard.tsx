import React from 'react'
import styles from './Section.module.scss'
import {useNavigate} from "react-router-dom";

const SectionCard = ({title, text} : {title : string, text : string}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/section')
    }

    return (
        <div className={styles.card}>
            <div
                onClick={handleClick}
                className={styles.card_image}>
            </div>
            <h5
                onClick={handleClick}
                className={styles.card_title}>
                {title}
            </h5>
            <p
                onClick={handleClick}
                className={styles.card_description}>
                {text}
            </p>
        </div>
    )
}

export default SectionCard