import React, {useEffect, useState} from "react";
import styles from './SimilarCommunity.module.scss'
import CommunityCard from "../SmallCard/CommunityCard";
import ICommunity from "../../../interfaces/ICommunity";
import {InitialStateCommunity} from "../../utils/initialStates/initialState";
import {getCommunities} from "../../../actions/communityActions";
import LoadingComponent from "../../shared/loading/LoadingComponent";

const SimilarCommunity = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [communities, setCommunities] = useState<ICommunity[]>([InitialStateCommunity])

    useEffect(() => {
        getCommunities(6, 0, 0)
            .then(({data}) => {
                console.log(data);
                setIsLoading(false)
                setCommunities(data.data)
            })
    }, []);

    return (
        <section className={styles.block}>
            <h2 className={styles.block_title}>
                Похожие коммьюнити
            </h2>
            <div className={styles.block_card}>
                {isLoading
                    ?
                    <LoadingComponent/>
                    :
                    <>
                        {communities.map(({community_id, name}) => {
                            return <CommunityCard community_id={community_id} name={name}/>
                        })}
                    </>
                }
            </div>
        </section>
    )
}

export default SimilarCommunity