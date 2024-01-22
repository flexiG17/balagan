import axios from "axios";
import {AXIOS_URL} from '../components/utils/consts'

export const getEvents = async (limit : number, offset : number, is_me: 0 | 1, is_favorite: 0 | 1) => {
    return await axios.get(`${AXIOS_URL}/events`, {
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

export const getSingleEvent = async (event_id : string | undefined) => {
    return await axios.get(`${AXIOS_URL}/event`, {
        headers: {
            'Authorization': 'Basic bWFzdGVyOm1hc3Rlcg==',
            "Content-Type": 'application/json',
        },
        params: {
            event_id
        }
    })
}