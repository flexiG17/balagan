import axios from "axios";
import {URL} from '../components/utils/consts'

export const getCommunities = async (limit : number, offset : number, only_me: 0 | 1) => {
    return await axios.get(`${URL}/communities`, {
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