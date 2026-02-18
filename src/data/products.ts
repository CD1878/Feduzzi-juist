import { Product } from '../types';

export const products: Product[] = [
    {
        id: '1',
        name: 'Broodje Carpaccio',
        description: 'Vers afgebakken broodje met dungesneden ossenhaas, Parmezaanse kaas, pijnboompitten en truffelmayonaise.',
        price: 9.50,
        category: 'broodjes',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg?format=1000w'
    },
    {
        id: '2',
        name: 'Broodje Vitello Tonnato',
        description: 'Kalfsfricandeau met onze huisgemaakte tonijnmayonaise en kappertjes.',
        price: 9.00,
        category: 'broodjes',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b6060c89-2ea4-4c8a-8479-1c651f53d3b4/374747649_620261653307023_8620719050344451705_n.jpg?format=1000w'
    },
    {
        id: '3',
        name: 'Broodje Caprese',
        description: 'Buffelmozzarella, tomaat, verse basilicum en pesto genovese.',
        price: 8.50,
        category: 'broodjes',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-4173-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg?format=1000w' // Reusing distinct image for now
    },
    {
        id: '4',
        name: 'Lasagne Bolognese',
        description: 'Klassieke lasagne met rundergehakt, bechamelsaus en Parmezaanse kaas. (Klaar om op te warmen)',
        price: 14.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg?format=1000w'
    },
    {
        id: '5',
        name: 'Melanzane alla Parmigiana',
        description: 'Ovenschotel met aubergine, tomaat, mozzarella en basilicum.',
        price: 13.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9f3fc96b-9522-4501-a757-b7c79f3de5ff/366290406_18189014512287593_3589940910848586939_n.jpg?format=1500w'
    },
    {
        id: '6',
        name: 'Antipasti Misto',
        description: 'Luxe schaal met diverse Italiaanse vleeswaren, kazen, olijven en gegrilde groenten. (Per persoon)',
        price: 18.50,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/66b2ecf9-bc45-4fa7-a4e2-c531c743b8db/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam32.jpeg?format=1000w'
    }
];
