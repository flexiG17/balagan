import IEvent from "../../../interfaces/IEvent";
import ICommunity from "../../../interfaces/ICommunity";

export const InitialStateEvent: IEvent = {
    date: new Date().toLocaleDateString('ru'),
    description: "",
    event_id: 1260109,
    name: " Интерактивное занятие &quot;Открывая Древний Египет&quot; ",
    organizer_id: 0,
    place: "Место проведения мероприятия",
    price: 120,
    time: "",
    url: "https://ekb.kassir.ru/drugie/interaktivnoe-zanyatie-otkryivaya-drevniy-egipet#1260109",
    participants: {
        data: [
            {
                user_id: 2,
                name: "Maximus"
            }
        ],
        count: 1
    },
    communities: {
        data: [
            {
                community_id: 1,
                name: "Main"
            }
        ],
        count: 1
    },
    isFavorite: true,
    isJoin: true,
    image: ''
}

export const InitialStateCommunity: ICommunity = {
    community_id: 1,
    "description": "first community",
    "name": "Main",
    "users": {
        "data": [
            {
                "city": "Екатеринбург",
                "name": "Maximus",
                user_id: 2,
                "verify": true
            }
        ],
        "count": 1
    },
    "events": {
        "data": [
            {
                "date": "10 — 24 дек.",
                "description": "",
                event_id: 1260109,
                "name": " Интерактивное занятие &quot;Открывая Древний Египет&quot; ",
                organizer_id: null,
                "place": " Музей истории и археологии Урала ",
                "price": 120,
                "time": "",
                "url": "https://ekb.kassir.ru/drugie/interaktivnoe-zanyatie-otkryivaya-drevniy-egipet#1260109",
                image: ''
            },
            {
                "date": "21 апр. 2023 — 14 янв. 2024",
                "description": "",
                event_id: 1456177,
                "name": " На крыльях художественной росписи ",
                "organizer_id": null,
                "place": " МАУК «Краеведческий музей» имени И. Я. Стяжкина ",
                "price": 80,
                "time": "",
                "url": "https://ekb.kassir.ru/muzey/na-kryilyah-hudojestvennoy-rospisi#1456177",
                image: ''
            }
        ],
        "count": 2
    },
    tags: {
        "data": [
            {
                "name": "Концерт",
                tag_id: 3000
            },
            {
                "name": "Рок",
                tag_id: 3002
            }
        ]
    },
    organizer: {
        name: '',
        city: '',
        user_id: 0,
        verify: true
    },
    i_join: true,
}