import React from "react";
import styles from './RangeComponent.module.scss'
import RangeInterface from "./Range.interface";

const RangeComponent = ({leftBorder, rightBorder, title} : RangeInterface) => {
    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>
                {`${title}`}
            </h3>
            <div className={styles.block_price}>
                <input className={styles.block_price_input} type='text' placeholder={`от ${leftBorder}`}/>
                <input className={styles.block_price_input} type='text' placeholder={`до ${rightBorder}`}/>
            </div>
        </section>
    )
}

export default RangeComponent