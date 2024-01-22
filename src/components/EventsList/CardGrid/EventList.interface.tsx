import IEvent from "../../../interfaces/IEvent";
import ICommunity from "../../../interfaces/ICommunity";

interface CardGridInterface {
    type: string,
    events?: IEvent[],
    communities?: ICommunity[]
}

export default CardGridInterface