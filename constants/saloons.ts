import { ImageSourcePropType } from "react-native";

interface Service {
    id: number;
    title: string;
    price: string;
}

export interface Saloon {
    id: number;
    title: string;
    distance: string;
    image: ImageSourcePropType;
    rating: string;
    address: string;
    workingHours: string;
    phone: string;
    description?: string;
    services?: Service[];
}

export const saloons: Saloon[] = [
    {
        id: 1,
        title: "Pet Point Ganjlik",
        distance: "3km.от вас",
        image: require('../assets/images/saloons/place1.png'),
        rating: "4.5",
        address: "78 Akim Abbasov Küçəsi",
        workingHours: "Круглосуточно",
        phone: "050 999 48 38",
        description: "Огромный выбор вкусных и красивых товаров для любимых питомцев. Груминг и уход. Делаем жизнь ваших питомцев лучше с 2015 года.",
        services: [
            {
                id: 1,
                title: "Стрижка кошек",
                price: '20 azn',
            },
            {
                id: 2,
                title: "Стрижка собак",
                price: '20 azn',
            },
            {
                id: 3,
                title: "Стрижка + купание( кошки)",
                price: '30 azn',
            },
            {
                id: 4,
                title: "Стрижка + купание( собаки)",
                price: '35 azn',
            },
            {
                id: 5,
                title: "Подстричь когти",
                price: '5 azn',
            },
        ]
    },
    {
        id: 2,
        title: "ZooMagic",
        distance: "3km.от вас",
        image: require('../assets/images/saloons/place2.png'),
        rating: "4.5",
        address: "5 Izmir St ",
        workingHours: "Закроется в 18:00",
        phone: "055 589 35 25",
    },
]