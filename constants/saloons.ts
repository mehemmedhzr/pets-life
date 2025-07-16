import { ImageSourcePropType } from "react-native";

const catImage = require('../assets/images/promotion_cat.png')
const dogImage = require('../assets/images/services/grooming.png')

export interface Service {
    id: number;
    title: string;
    price: string;
    image?: ImageSourcePropType;
}

export interface Saloon {
    id: number;
    title: string;
    distance: string;
    image: ImageSourcePropType;
    imageInner?: ImageSourcePropType;
    rating: string;
    address: string;
    workingHours: string;
    phone: string;
    instagram?: string;
    description?: string;
    services?: Service[];
}

export const saloons: Saloon[] = [
    {
        id: 1,
        title: "Pet Point Ganjlik",
        distance: "3km.от вас",
        image: require('../assets/images/saloons/place1.png'),
        imageInner: require('../assets/images/saloons/place_inner.png'),
        rating: "4.5",
        address: "78 Akim Abbasov Küçəsi",
        workingHours: "Круглосуточно",
        phone: "050 999 48 38",
        instagram: "@petpoint.az",
        description: "Огромный выбор вкусных и красивых товаров для любимых питомцев. Груминг и уход. Делаем жизнь ваших питомцев лучше с 2015 года.",
        services: [
            {
                id: 1,
                title: "Стрижка кошек",
                price: '20 azn',
                image: catImage,
            },
            {
                id: 2,
                title: "Стрижка собак",
                price: '20 azn',
                image: dogImage,
            },
            {
                id: 3,
                title: "Стрижка + купание( кошки)",
                price: '30 azn',
                image: catImage,
            },
            {
                id: 4,
                title: "Стрижка + купание( собаки)",
                price: '35 azn',
                image: dogImage,
            },
            {
                id: 5,
                title: "Подстричь когти",
                price: '5 azn',
                image: catImage,
            },
        ]
    },
    {
        id: 2,
        title: "ZooMagic",
        distance: "3km.от вас",
        image: require('../assets/images/saloons/place2.png'),
        imageInner: require('../assets/images/saloons/place_inner.png'),
        rating: "4.5",
        address: "5 Izmir St ",
        workingHours: "Закроется в 18:00",
        phone: "055 589 35 25",
    },
]