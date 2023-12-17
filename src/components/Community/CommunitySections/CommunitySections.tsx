import React from 'react'
import styles from './CommunitySections.module.scss'
import SectionChip from "./SectionChip/SectionChip";

const CommunitySections = () => {
    return (
        <section className={styles.grid}>
            <SectionChip text={'Выставки'}/>
            <SectionChip text={'Кино'}/>
            <SectionChip text={'Странное'}/>
            <SectionChip text={'Алкоголь'}/>
            <SectionChip text={'18+'}/>
            <SectionChip text={'Стендап'}/>
            <SectionChip text={'Музыка'}/>
            <SectionChip text={'Мастер-классы'}/>
            <SectionChip text={'Выходные'}/>
        </section>
    )
}

export default CommunitySections