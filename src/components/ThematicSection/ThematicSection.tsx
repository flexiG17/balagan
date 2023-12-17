import React, {ReactNode} from 'react'
import styles from './ThematicSection.module.scss'
import {useNavigate} from "react-router-dom";

type PropsType = {
    children: ReactNode,
    title: string,
    action: string
}

const ThematicSection = ({children, title, action} : PropsType) => {
    const navigate = useNavigate()

    return (
        <section className={styles.content}>
            <div className={styles.content_titleBlock}>
                <h2 className={styles.content_titleBlock_text}>
                    {title}
                </h2>
                <p
                    onClick={() => {navigate(`/${action}`)}}
                    className={styles.content_titleBlock_text}>
                    {`${25} >`}
                </p>
            </div>
            <section className={styles.content_cards}>
                {children}
            </section>
        </section>
    )
}

export default ThematicSection;