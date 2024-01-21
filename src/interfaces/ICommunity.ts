import ITag from "./ITag";

export default interface ICommunity {
    community_id?: number,
    description?: string,
    name?: string,
    organizer_id?: number,
    tags: ITag[]
}