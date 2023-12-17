import React from 'react'
import styles from './Footer.module.scss'
import TitleIcon from '../../../assets/images/title.svg'
import InstagramIcon from './assets/instagramIcon.svg'
import FacebookIcon from './assets/facebookIcon.svg'
import XIcon from './assets/XIcon.svg'
import InIcon from './assets/InIcon.svg'

const Footer = () => {

    return(
        <footer className={styles.block}>
            <div className={styles.links}>
                <img className={styles.footerLogo} src={TitleIcon} alt='Логотип'/>
                <p className={styles.links_text}>
                    Мы в соц. сетях
                </p>
                <nav className={styles.social}>
                    <img className={styles.social_icon} src={FacebookIcon} alt='Логотип'/>
                    <img className={styles.socia_icon}  src={XIcon} alt='Логотип'/>
                    <img className={styles.socia_icon}  src={InIcon} alt='Логотип'/>
                    <img className={styles.socia_icon}  src={InstagramIcon} alt='Логотип'/>
                </nav>
            </div>
        </footer>
    )
}

export default Footer