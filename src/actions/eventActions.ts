import axios from "axios";
import {URL} from '../components/utils/consts'

export const getEvents = async (limit : number, offset : number, is_me: 0 | 1, is_favorite: 0 | 1) => {
    return await axios.get(`${URL}/events`, {
        headers: {
            'Authorization': 'Basic bWFzdGVyOm1hc3Rlcg==',
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
            is_me,
            is_favorite
        }
    })
}