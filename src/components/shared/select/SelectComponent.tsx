import React from 'react'
import styles from './SelectComponent.module.scss'

const SelectComponent = () => {
    return (
        <section className={styles.block}>
            <select className={styles.block_select}>
                <option className={styles.block_select_option}>
                    {`${"По умолчанию"}`}
                </option>
                <option className={styles.block_select_option}>
                    {`${"По рейтингу"}`}
                </option>
            </select>
        </section>
    )
}

export default SelectComponent
