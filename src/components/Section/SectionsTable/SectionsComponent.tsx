import React, {useEffect, useState} from "react";
import styles from './SectionsComponent.module.scss'
import SectionCard from "../SectionCard/SectionCard";
import ITag from "../../../interfaces/ITag";
import {getTags} from "../../../actions/tagActions";
import LoadingComponent from "../../shared/loading/LoadingComponent";

const SectionsComponent = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [sections, setSections] = useState<ITag[]>([])

    useEffect(() => {
        getTags(16, 0)
            .then(({data} : {data : {data : ITag[]}}) => {
                setIsLoading(false)
                setSections(data.data)
            })
    }, []);

    return (
        <section className={styles.grid}>
            {isLoading
                ?
            <LoadingComponent/>
            :
            <>
                {sections.map(({tag_id, name, description, image}) => {
                    return <SectionCard key={tag_id} tag_id={tag_id} name={name} description={description} image={image}/>
                })}
            </>}
        </section>
    )
}

export default SectionsComponent