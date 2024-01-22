import IEvent from "../../../../interfaces/IEvent";

interface EventScheduleSectionInterface extends IEvent{
    place?: string,
    dateCount: string,
    day: string,
    month: string,
    time: string,
    price?: number,
    url?: string
}

export default EventScheduleSectionInterface