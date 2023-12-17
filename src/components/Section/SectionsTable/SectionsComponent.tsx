import React from "react";
import styles from './SectionsComponent.module.scss'
import SectionCard from "../SectionCard/SectionCard";

const SectionsComponent = () => {
    return (
        <section className={styles.grid}>
            <SectionCard title={'ВЫСТАВКИ'} text={'Все современное искусство города в одном месте'}/>
            <SectionCard title={'КОНЦЕРТЫ'} text={'Все выступления твоих любимых исполнителей'}/>
            <SectionCard title={'ДЕГУСТАЦИИ'} text={'Сыр, вино, чайные церемонии что еще надо для счастья?'}/>
            <SectionCard title={'СВИДАНИЯ'} text={'Красивые и романтичные места для времяпрепровождения'}/>
            <SectionCard title={'ВЫСТАВКИ'} text={'Все современное искусство города в одном месте'}/>
            <SectionCard title={'КОНЦЕРТЫ'} text={'Все выступления твоих любимых исполнителей'}/>
            <SectionCard title={'ДЕГУСТАЦИИ'} text={'Сыр, вино, чайные церемонии что еще надо для счастья?'}/>
            <SectionCard title={'СВИДАНИЯ'} text={'Красивые и романтичные места для времяпрепровождения'}/>
            <SectionCard title={'ВЫСТАВКИ'} text={'Все современное искусство города в одном месте'}/>
            <SectionCard title={'КОНЦЕРТЫ'} text={'Все выступления твоих любимых исполнителей'}/>
            <SectionCard title={'ДЕГУСТАЦИИ'} text={'Сыр, вино, чайные церемонии что еще надо для счастья?'}/>
            <SectionCard title={'СВИДАНИЯ'} text={'Красивые и романтичные места для времяпрепровождения'}/>
            <SectionCard title={'ВЫСТАВКИ'} text={'Все современное искусство города в одном месте'}/>
            <SectionCard title={'КОНЦЕРТЫ'} text={'Все выступления твоих любимых исполнителей'}/>
            <SectionCard title={'ДЕГУСТАЦИИ'} text={'Сыр, вино, чайные церемонии что еще надо для счастья?'}/>
            <SectionCard title={'СВИДАНИЯ'} text={'Красивые и романтичные места для времяпрепровождения'}/>
        </section>
    )
}

export default SectionsComponent