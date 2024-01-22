import ITag from "./ITag";
import IUser from "./IUser";
import IEvent from "./IEvent";

export default interface ICommunity {
    community_id?: number,
    description?: string,
    name?: string,
    organizer_id?: number | string,
    users?: {
        data: IUser[],
        count: number
    },
    events?: {
        data: IEvent[],
        count: number
    },
    tags?: {
        data: ITag[]
    },
    i_join?: boolean
}