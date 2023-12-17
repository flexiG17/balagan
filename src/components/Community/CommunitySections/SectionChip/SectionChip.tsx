import React from 'react'
import styles from './SectionChip.module.scss'
import {useNavigate} from "react-router-dom";

const SectionChip = ({text} : {text : string}) => {
    const navigate = useNavigate()

    return (
        <section
            onClick={() => navigate('/section')}
            className={styles.block}>
            <p className={styles.block_text}>
                {text}
            </p>
        </section>
    )
}

export default SectionChip