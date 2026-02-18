import { MenuSectionData } from '../components/maaltijden/types';

export const SOCIAL_LINKS = {
    facebook: "https://www.facebook.com/feduzzi.amsterdam",
    instagram: "https://www.instagram.com/feduzzi.amsterdam/"
};

export const MENU_SECTIONS: MenuSectionData[] = [
    {
        id: 'schalen',
        title: 'Schalen',
        imagePosition: 'left',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/66b2ecf9-bc45-4fa7-a4e2-c531c743b8db/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam32.jpeg?format=1000w",
        imageAlt: "Plank met verschillende soorten kaas, olijven en vleeswaren",
        items: [
            { title: "ANTIPASTI SCHAAL", description: "mix van vlees, kaas en andere delicatesse", price: "€7,95" },
            { title: "BRESAOLA CARPACCIO", description: "gedroogde ossenhaas, rucola, Parmezaanse kaas en pijnboompitten", price: "€6,95" },
            { title: "VITELLO TONNATO", description: "gebakken kalfsmuis, tonnato, rucola en kappertjes", price: "€5,95" },
        ]
    },
    {
        id: 'pastas-1',
        title: "Pasta's 350 gr per portie",
        imagePosition: 'right',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/8e884699-2a3f-4446-a5af-83361034ee1e/360146671_18185506990287593_8295250444765476929_n.jpg?format=1000w",
        imageAlt: "Risotto bord",
        items: [
            { title: "LASAGNE BOLOGNESE", description: "bolognese saus en mortadella", price: "€9,95" },
            { title: "LASAGNE VEGA", description: "tomatensaus, truffel champignons, ricotta, mozzarella en gegrilde groenten", price: "€10,95" },
            { title: "MELANZANE ALLA PARMIGIANA", description: "aubergine, tomatensaus en parmezaanse kaas", price: "€9,95" },
        ]
    },
    {
        id: 'pastas-2',
        title: "Pasta's 350 gr per portie",
        imagePosition: 'left',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0487a6c1-d561-4705-9c50-95dd758c13b9/366812388_18189725005287593_995257834228342735_n.jpg?format=1000w",
        imageAlt: "Verzameling van Italiaanse gerechten",
        items: [
            { title: "PENNE SALSICCIA", description: "witte wijn roomsaus met funghi porcini en Italiaanse worst", price: "€9,95" },
            { title: "A'MATRICIANA", description: "tomatensaus met parmaham en pancetta", price: "€9,95" },
            { title: "SPAGHETTI AGLIO OLIO E PEPERONCINO", description: "knoflook, ui, tomaat en olie", price: "€9,95" },
            { title: "CASARECCIA PISTACCHIO", description: "pistache roomsaus", price: "€9,95" },
            { title: "BOLOGNESE", description: "bolognese saus met bechamel", price: "€9,95" },
        ]
    },
    {
        id: 'pastas-3',
        title: "Pasta's 350 gr per portie",
        imagePosition: 'right',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/a571bc2c-a658-4f6e-86b3-283768d46ed1/366710342_18189725020287593_8987252699585713853_n.jpg?format=1000w",
        imageAlt: "Groene bonen en groenten",
        items: [
            { title: "RAVIOLI RICOTTA SPINAZIE", description: "basilicum pesto", price: "€10,95" },
            { title: "RAVIOLI POMPOEN", description: "pesto rosso", price: "€10,95" },
            { title: "RAVIOLI TRUFFEL RICOTTA", description: "funghi porcini/truffel saus", price: "€13,95" },
            { title: "BURRATA RAVIOLI", description: "pomodoro saus", price: "€11,95" },
        ]
    },
    {
        id: 'salades',
        title: "Salades 250g per portie",
        imagePosition: 'left',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg?format=1000w",
        imageAlt: "Borden met pasta en pizza",
        items: [
            { title: "VENKEL SALADE", description: "balsamico azijn, Parmezaanse kaas en rucola", price: "€9,95" },
            { title: "CAPRESE SALADE", description: "cherry tomaat, zongedroogde tomaat, Buffel mozzarella en salsa verde dressing", price: "€9,95" },
            { title: "ESTIVA SALADE", description: "haricovert, asperges, zongedroogde tomaat, artisjok, cherry tomaat, ui, bleekselderij en salsa verde dressing", price: "€9,95" },
        ]
    },
    {
        id: 'vlees',
        title: "Vlees 250g per portie",
        imagePosition: 'right',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/76efda26-6bac-4124-9953-f107ab10ded8/Authentiek+Italiaans+restaurant%2C+Italiaans+restaurant+Amsterdam%2C+Italiaans+restaurant+omgeving+Amsterdam14.jpeg?format=1000w",
        imageAlt: "Vrouw snijdt vlees",
        items: [
            { title: "POLLO", description: "kippendijen, pesto rosso, witte wijn en salie", price: "€7,50" },
            { title: "POLPETTE", description: "half of half gehakt, venkelzaad met tomatensaus", price: "€7,50" },
            { title: "PLATTE POLPETTE", description: "half om half gehakt, spinazie en taleggio kaas", price: "€7,95" },
        ]
    },
    {
        id: 'desserts',
        title: "Desserts",
        imagePosition: 'left',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/9f3fc96b-9522-4501-a757-b7c79f3de5ff/366290406_18189014512287593_3589940910848586939_n.jpg?format=1000w",
        imageAlt: "Tiramisu",
        items: [
            { title: "TORTA DELLA NONNA", description: "citroentaart", price: "€3,95" },
            { title: "CANNOLO", description: "gefrituurd pannenkoekje met zoete ricotta", price: "€4,50" },
            { title: "TIRAMISU", description: "zoete marsala, lange vingers met cacao", price: "€4,50" },
            { title: "TIRAMISU LIMONCELLO", description: "limoncello, lange vingers en nougat", price: "€4,50" },
        ]
    },
    {
        id: 'sides',
        title: "Sides 250g per portie",
        imagePosition: 'right',
        imageSrc: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/0aeab164-daa9-4a6c-be82-410f32c0a2b6/382771735_18195881530287593_8328699007573794873_n.jpg?format=1000w",
        imageAlt: "Schaaltjes met sauzen",
        items: [
            { title: "ARTISJOK ALLA ROMANA (100gr)", description: "citroen, peterselie en salsa verde", price: "€3,95" },
            { title: "BROCCOLI GRATIN", description: "bechamelsaus, knoflook en Parmezaanse kaas", price: "€6,95" },
            { title: "ROSEVAL AARDAPPELS", description: "Parmezaanse kaas en peterselie", price: "€6,95" },
            { title: "WILDE SPINAZIE", description: "knoflook en rode peper", price: "€6,95" },
        ]
    },
];
