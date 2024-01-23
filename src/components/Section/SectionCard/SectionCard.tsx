import React from 'react'
import styles from './Section.module.scss'
import {Link, useNavigate} from "react-router-dom";
import ITag from "../../../interfaces/ITag";

const SectionCard = ({name, description, tag_id, image}: ITag) => {
    const path = `/section/${tag_id}`
    const linkStyle = {
        textDecoration: 'none'
    }

    return (
        <div className={styles.card}>
            <Link to={path} style={linkStyle} target={'_blank'}>
                <div className={styles.card_image}>
                </div>
            </Link>
            <Link to={path} style={linkStyle}>
                <h5
                    className={styles.card_title}>
                    {name.replace(' / ', ' · ')}
                </h5>
            </Link>
            <Link to={path} style={linkStyle}>
                <p
                    className={styles.card_description}>
                    {description}
                </p>
            </Link>
        </div>
    )
}

export default SectionCard