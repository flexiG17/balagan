import IEvent from "../../interfaces/IEvent";
import {Dispatch, SetStateAction} from "react";
import ICommunity from "../../interfaces/ICommunity";

interface EventListInterface {
    type: string,
    events?: IEvent[],
    communities?: ICommunity[],
    isLoading: boolean,
    page?: number,
    setPage?: Dispatch<SetStateAction<number>>,
    getNewData: (value : number) => any
}

export default EventListInterface