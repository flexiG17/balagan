import React from 'react'
import styles from './WebApplicationSection.module.scss'
import HandWithPhoneBackground from "./assets/handWithPhone.png";
import {Link} from "react-router-dom";

const WebApplicationSection = () => {
    return (
        <section className={styles.block}>
            <div className={styles.leftContent}>
                <h1 className={styles.leftContent_title}>
                    Полная версия<br/> в приложении
                </h1>
                <Link to="/files/android.apk" target="_blank" download className={styles.leftContent_button}>
                    <p className={styles.leftContent_button_text}>
                        Загрузить
                    </p>
                </Link>
            </div>
            <div className={styles.rightContent}>
                <img className={styles.rightContent_image} src={HandWithPhoneBackground} alt='Картинка на фон'/>
            </div>
        </section>
    )
}

export default WebApplicationSection