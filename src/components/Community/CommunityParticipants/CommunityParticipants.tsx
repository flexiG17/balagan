import React from "react";
import styles from './CommunityParticipants.module.scss'
import CommunityUser from "./CommunityUser/CommunityUser";
import ICommunity from "../../../interfaces/ICommunity";

const CommunityParticipants = ({users, organizer} : ICommunity) => {
    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Участники
            </h2>
            <p className={styles.block_text}>
                {`${users?.count} чел.`}
            </p>
            {users?.count != 0 && <CommunityUser users={users}/>}
            <div className={styles.block_author}>
                <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150" fill="none">
                    <circle cx="75" cy="75" r="72.5" stroke="url(#paint0_linear_883_2401)" stroke-opacity="0.65" stroke-width="5"/>
                    <defs>
                        <linearGradient id="paint0_linear_883_2401" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                            <stop/>
                            <stop offset="1"/>
                        </linearGradient>
                    </defs>
                </svg>

                <div className={styles.block_author_data}>
                    <p className={styles.block_author_data_name}>
                        {organizer?.name}
                    </p>
                    <p className={styles.block_author_data_description}>
                        Создатель коммьюнити
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CommunityParticipants