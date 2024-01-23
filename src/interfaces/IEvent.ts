import IUser from "./IUser";
import ICommunity from "./ICommunity";
import ITag from "./ITag";

export default interface IEvent {
    date?: string,
    description?: string,
    event_id?: number,
    'es.status'?: 'cancel' | 'confirm' | 'check'
    name?: string,
    organizer_id? : number | null,
    place?: string,
    price?: number,
    time?: string,
    url?: string,
    participants?: {
        data: IUser[],
        count: number
    },
    communities?: {
        data: ICommunity[],
        count: number
    },
    tags?: {
        data: ITag[],
        count: number
    },
    isFavorite?: boolean,
    isJoin?: boolean,
    image?: string
}