import React from 'react'
import styles from './UserCard.module.scss'

const UserCard = ({title} : {title : string}) => {
     return(
         <section className={styles.block}>
             <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none">
                 <circle cx="60" cy="60" r="57.5" stroke="url(#paint0_linear_883_2399)" stroke-opacity="0.65" stroke-width="5"/>
                 <defs>
                     <linearGradient id="paint0_linear_883_2399" x1="60" y1="0" x2="60" y2="120" gradientUnits="userSpaceOnUse">
                         <stop/>
                         <stop offset="1"/>
                     </linearGradient>
                 </defs>
             </svg>
             <p className={styles.block_text}>
                 {title}
             </p>
         </section>
     )
}

export default UserCard