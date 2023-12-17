import React from 'react'
import styles from './CheckboxComponent.module.scss'
import CheckboxInterface from "./Checkbox.interface";

const CheckboxComponent = ({text, id} : CheckboxInterface) => {
    return (
        <div className={styles.block}>
            <div className={styles.block_checkbox}>
                <input className={styles.block_checkbox_input} id={id} type="checkbox"/>
                <label className={styles.block_checkbox_label} htmlFor={id}>
                    {text}
                </label>
            </div>
        </div>
    )
}

export default CheckboxComponent