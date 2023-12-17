import React from 'react'
import styles from './CommunityFilter.module.scss'
import Range from "../../shared/range/RangeComponent";
import RangeComponent from "../../shared/range/RangeComponent";
import MultiselectComponent from "../../shared/multiselect/MultiselectComponent";
import CheckboxComponent from "../../shared/checkbox/CheckboxComponent";

const CommunityFilter = () => {
    return (
        <section className={styles.block}>
            <div className={styles.block_title}>
                <h2 className={styles.block_title_text}>
                    Популярные коммьюнити
                </h2>
                <div className={styles.block_title_count}>
                    <p className={styles.block_title_count_value}>
                        {`${25}`}
                    </p>
                </div>
            </div>
            <MultiselectComponent title={'Разделы'} type={'section'}/>
            <RangeComponent leftBorder={'0'} rightBorder={'5679'} title={'Кол-во участников'}/>
            <MultiselectComponent title={'Удаленность\n' +
                'от места проведения'} type={'distance'}/>
        </section>
    )
}

export default CommunityFilter