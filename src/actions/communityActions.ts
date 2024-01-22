import axios from "axios";
import {AXIOS_URL} from '../components/utils/consts'

export const getCommunities = async (limit : number, offset : number, only_me: 0 | 1) => {
    return await axios.get(`${AXIOS_URL}/communities`, {
        headers: {
            'Authorization': 'Basic bWFzdGVyOm1hc3Rlcg==',
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
            only_me,
        }
    })
}

export const getSingleCommunity = async (community_id : string | undefined,) => {
    return await axios.get(`${AXIOS_URL}/community`, {
        headers: {
            'Authorization': 'Basic bWFzdGVyOm1hc3Rlcg==',
            "Content-Type": 'application/json',
        },
        params: {
            community_id,
        }
    })
}