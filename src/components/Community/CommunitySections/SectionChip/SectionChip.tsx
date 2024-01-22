import React from 'react'
import styles from './SectionChip.module.scss'
import {Link, useNavigate} from "react-router-dom";
import ITag from "../../../../interfaces/ITag";

const SectionChip = ({name, tag_id}: ITag) => {
    const navigate = useNavigate()

    return (
        <Link to={`/section/${tag_id}`} target='_blank' style={{textDecoration: 'none'}}>
            <section className={styles.block}>
                <p className={styles.block_text}>
                    {name}
                </p>
            </section>
        </Link>
    )
}

export default SectionChip