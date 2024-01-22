import React from 'react'
import styles from './SectionFilter.module.scss'
import RangeComponent from "../../shared/range/RangeComponent";
import MultiselectComponent from "../../shared/multiselect/MultiselectComponent";

const SectionFilter = ({count} : {count:number}) => {
    return (
        <section className={styles.block}>
            <div className={styles.block_title}>
                <h3 className={styles.block_title_text}>
                    Рекомендуем посетить
                </h3>
                <div className={styles.block_title_count}>
                    <p>
                        {count}
                    </p>
                </div>
            </div>

            <RangeComponent leftBorder={0} rightBorder={5679} title={'Цена, Р'}/>
            <MultiselectComponent title={'Удаленность\n' +
                'от места проведения'} type={'distance'}/>
        </section>
    )
}

export default SectionFilter