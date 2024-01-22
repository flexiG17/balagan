import React, {useState} from "react";
import styles from './CommunityTitle.module.scss'
import LoadingComponent from "../../shared/loading/LoadingComponent";
import ICommunity from "../../../interfaces/ICommunity";
import axios from "axios";
import {AXIOS_URL} from "../../utils/consts";

interface IProps extends ICommunity {
    isLoading?: boolean
}

const CommunityTitle = ({isLoading = false, name}: IProps) => {
    /*const [file, setFile] = useState('')
    const formData = new FormData();


    formData.append("image", file);
    const handleClick = async () => {
        await axios.put(`https://storage.yandexcloud.net/balaganimg/event/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }*/


    return (
        <section className={styles.block}>
            {/*<input type={'file'}
                   onChange={event => setFile(event.target.value)}
            />*/}
            <div className={styles.block_data}>
                {isLoading
                    ?
                    <LoadingComponent color={'#fff'}/>
                    :
                    <>
                        <h1
                            /*onClick={handleClick}*/
                            className={styles.block_data_title}>
                            {name}
                        </h1>
                        <p className={styles.block_data_text}>
                            Чтобы присоединиться к коммьюнити,
                            <br/>
                            скачайте <u>мобильную версию приложения</u>
                        </p>
                    </>
                }
            </div>
        </section>
    )
}

export default CommunityTitle