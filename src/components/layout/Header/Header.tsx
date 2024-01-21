import React from 'react'
import styles from './Header.module.scss'
import HeaderLogo from '../../../assets/images/logo.svg'
import HeaderTitle from '../../../assets/images/title.svg'
import Search from './assets/search.svg'
import {Link, useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <section className={styles.block}>
            <div className={styles.mainBlock}>
                <div className={styles.logoPosition}>
                    <img
                        onClick={() => {
                            navigate('/')
                        }}
                        className={styles.logo} src={HeaderLogo} alt='Логотип Балаган'/>
                    <img
                        onClick={() => {
                            navigate('/')
                        }}
                        className={styles.title} src={HeaderTitle} alt='Заголовок Балаган'/>
                </div>
                <nav className={styles.navBlock}>
                    <Link
                        to={'/'}
                        className={`${styles.linkStyle} ${styles.hoverUnderlineAnimation}`}>
                        Главная
                    </Link>
                    <Link
                        to={'/'}
                        className={`${styles.linkStyle} ${styles.hoverUnderlineAnimation}`}>
                        О нас
                    </Link>
                    <img className={styles.search} src={Search} alt='Кнопка поиск'/>
                </nav>
            </div>
        </section>
    )
}

export default Header