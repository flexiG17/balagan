import React from 'react'
import styles from './CommunitySections.module.scss'
import SectionChip from "./SectionChip/SectionChip";
import ICommunity from "../../../interfaces/ICommunity";

const CommunitySections = ({tags} : ICommunity) => {
    console.log(tags);

    return (
        <section className={styles.grid}>
            {tags?.data.map(({name, tag_id}) => {
                return <SectionChip name={name} tag_id={tag_id}/>
            })}
        </section>
    )
}

export default CommunitySections