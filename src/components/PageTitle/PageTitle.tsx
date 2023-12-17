import React from 'react'
import styles from './PageTitle.module.scss'

type PropsType = {
    title: string
}

const PageTitle = ({title} : PropsType) => {
    return (
        <section className={styles.block}>
            <h1 className={styles.block_title}>
                {title}
            </h1>
        </section>
    )
}

export default PageTitle