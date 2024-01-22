import axios from "axios";
import {AXIOS_URL} from '../components/utils/consts'

export const getTags = async (limit : number, offset : number) => {
    return await axios.get(`${AXIOS_URL}/tags`, {
        headers: {
            "Content-Type": 'application/json',
        },
        params: {
            limit,
            offset,
        }
    })
}