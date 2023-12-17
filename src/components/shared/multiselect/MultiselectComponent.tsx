import React from 'react'
import styles from './MultiselectComponent.module.scss'
import CheckboxComponent from "../checkbox/CheckboxComponent";
import MultiselectInterface from "./Multiselect.interface";

const MultiselectComponent = ({title, type} : MultiselectInterface) => {
    const distanceValues = [
        {
            id: '1',
            label: 'Не дальше 1 км'
        },
        {
            id: '3',
            label: 'Не дальше 3 км'
        },
        {
            id: '5',
            label: 'Не дальше 7 км'
        },
        {
            id: '7',
            label: 'Не дальше 7 км'
        },
        {
            id: '10',
            label: 'Не дальше 10 км'
        },
        {
            id: '15',
            label: 'Не дальше 15 км'
        }
    ]
    const sectionValues = [
        {
            id: '1',
            label: 'Выставки'
        },
        {
            id: '2',
            label: 'Концерты'
        },
        {
            id: '3',
            label: 'Дегустации'
        },
        {
            id: '4',
            label: 'Свидания'
        },
        {
            id: '5',
            label: 'Кино'
        },
        {
            id: '6',
            label: 'Театр'
        },
        {
            id: '7',
            label: 'Блокинг'
        },
        {
            id: '8',
            label: 'Бизнес'
        },
        {
            id: '9',
            label: '18+'
        },
        {
            id: '10',
            label: 'Рукоделие'
        },
        {
            id: '11',
            label: 'Готовка'
        },
        {
            id: '12',
            label: 'Стендап'
        },
        {
            id: '13',
            label: 'Музыка'
        }
    ]

    const data =
        type === 'section'
            ? [...sectionValues]
            : [...distanceValues]

    return (
        <section className={styles.block}>
            <h3 className={styles.block_title}>
                {title}
            </h3>
            {data.map(({id, label}) => {
                return <CheckboxComponent text={label} id={id}/>
            })}
        </section>
    )
}

export default MultiselectComponent