import React from 'react'
import styles from './CommunityUser.module.scss'
import UserCard from "./UserCard/UserCard";

const CommunityUser = () => {
    return (
        <section className={styles.block}>
            <UserCard title={'Лёня Герасимова'}/>
            <UserCard title={'Света Анисимова'}/>
            <UserCard title={'Екатерина Дульцева'}/>

            <svg
                className={styles.block_arrow}
                xmlns="http://www.w3.org/2000/svg" width="40" height="62" viewBox="0 0 40 62" fill="none">
                <path d="M1.26926 60.0619C2.96166 61.3829 5.70551 61.3829 7.3979 60.0619L36.1921 37.5843C41.2681 33.6219 41.2694 27.1985 36.1956 23.2346L7.72266 0.990839C6.03031 -0.33028 3.28642 -0.33028 1.59407 0.990839C-0.0982847 2.31192 -0.0982847 4.45387 1.59407 5.77495L30.0744 28.0073C31.7671 29.3287 31.7671 31.4704 30.0744 32.7914L1.26926 55.2774C-0.423088 56.5988 -0.423088 58.7405 1.26926 60.0619Z" fill="#18132C"/>
            </svg>
        </section>
    )
}

export default CommunityUser