import { Product } from '../types';
import { PANINI_ITEMS, HOT_PANINI_ITEMS } from '../constants/broodjes';

// Helper to convert price string "€6.50" to number 6.50
const parsePrice = (priceStr: string): number => {
    return parseFloat(priceStr.replace('€', ''));
};

const broodjesProducts: Product[] = [
    ...PANINI_ITEMS.items.map((item, index) => ({
        id: `b-${index}`,
        name: `Broodje ${item.name}`,
        description: item.description,
        price: parsePrice(item.price),
        category: 'broodjes' as const,
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg?format=1000w'
    })),
    ...HOT_PANINI_ITEMS.items.map((item, index) => ({
        id: `bh-${index}`,
        name: `Panini Caldi ${item.name}`,
        description: item.description,
        price: parsePrice(item.price),
        category: 'broodjes' as const,
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-4173-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg?format=1000w'
    }))
];

const maaltijdenProducts: Product[] = [
    {
        id: 'm-1',
        name: 'Lasagne Bolognese',
        description: 'Klassieke lasagne met rundergehakt, bechamelsaus en Parmezaanse kaas. (Klaar om op te warmen)',
        price: 14.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg?format=1000w'
    },
    {
        id: 'm-2',
        name: 'Melanzane alla Parmigiana',
        description: 'Vegetarische ovenschotel met aubergine, tomaat, mozzarella en basilicum.',
        price: 13.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9f3fc96b-9522-4501-a757-b7c79f3de5ff/366290406_18189014512287593_3589940910848586939_n.jpg?format=1500w'
    },
    {
        id: 'm-3',
        name: 'Spaghetti Carbonara',
        description: 'Authentieke spaghetti met guanciale, pecorino eieren en zwarte peper.',
        price: 12.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-4173-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg'
    },
    {
        id: 'm-4',
        name: 'Cannelloni Ricotta e Spinaci',
        description: 'Gevulde pastarollen met ricotta en spinazie in een zachte tomatensaus.',
        price: 13.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b6060c89-2ea4-4c8a-8479-1c651f53d3b4/374747649_620261653307023_8620719050344451705_n.jpg'
    },
    {
        id: 'm-5',
        name: 'Tiramisu Classico',
        description: 'Huisgemaakte tiramisu volgens traditioneel recept.',
        price: 6.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/f7c63f91-3b54-4ed7-ac76-2c88f378e342/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam3.jpeg'
    },
    {
        id: 'm-6',
        name: 'Panna Cotta met Rood Fruit',
        description: 'Zijdezachte roompudding met een coulis van rood fruit.',
        price: 6.50,
        category: 'maaltijden',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/ba76b61d-6d42-4492-a035-85bb9954fe04/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam16.jpeg'
    }
];

const traiteurProducts: Product[] = [
    {
        id: 't-1',
        name: 'Antipasti Misto',
        description: 'Luxe schaal met diverse Italiaanse vleeswaren, kazen, olijven en gegrilde groenten. (Prijs per persoon)',
        price: 18.50,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/66b2ecf9-bc45-4fa7-a4e2-c531c743b8db/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam32.jpeg?format=1000w'
    },
    {
        id: 't-2',
        name: 'Vitello Tonnato Schaal',
        description: 'Grote schaal met fijngesneden kalfsfricandeau en tonijnmayonaise (voor 4-6 personen).',
        price: 45.00,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/96968067-0474-4cca-85c8-31de4a0650e9/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam6.jpeg'
    },
    {
        id: 't-3',
        name: 'Carpaccio Schaal',
        description: 'Schaal met ossenhaas carpaccio, pijnboompitten, parmezaan en truffelmayo (voor 4-6 personen).',
        price: 45.00,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/b493b45d-de27-424d-847d-aad25edc4462/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam33.jpeg'
    },
    {
        id: 't-4',
        name: 'Kaasplankje Deluxe',
        description: 'Selectie van 5 bijzondere Italiaanse kazen met vijgenbrood en stroop.',
        price: 22.50,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/477a6416-aa18-462b-9867-c081c390ae7b/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam18.jpg'
    },
    {
        id: 't-5',
        name: 'Olijven & Tapenade Mix',
        description: 'Bakje met gemarineerde olijven en verse tapenades.',
        price: 6.50,
        category: 'traiteur',
        image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg'
    }
];

export const products: Product[] = [
    ...broodjesProducts,
    ...maaltijdenProducts,
    ...traiteurProducts
];
