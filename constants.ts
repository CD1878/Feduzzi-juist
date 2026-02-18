import { NavItem, ServiceItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Menu',
    href: '#menu',
    subItems: [
      { label: 'Menu', href: '/menu' },
      { label: 'Broodjes', href: '#broodjes' },
      { label: 'Maaltijden', href: '/menu/maaltijden' },
      { label: 'Traiteur', href: '/menu/traiteur' },
    ]
  },
  { label: 'Sfeer', href: '/sfeer' },
  { label: 'Over ons', href: '/over-ons' },
  { label: 'Werken bij', href: '/werken-bij' },
  {
    label: 'Vestigingen',
    href: '#vestigingen',
    subItems: [
      { label: 'Amsterdam', href: '/vestigingen/amsterdam' },
      { label: 'Laren', href: '/vestigingen/laren' },
    ]
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Maaltijden',
    description: "Heerlijke maaltijden van (vega)lasagne's tot authentieke pasta's en verfijnde desserts. Bekijk ons uitgebreide menu via de button hieronder",
    image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c8d2dd66-dbfb-45a3-86cb-93f27781a6d8/366812388_18189725005287593_995257834228342735_n.jpg',
    buttonText: 'Bekijk het maaltijden menu',
    link: '/menu/maaltijden'
  },
  {
    title: 'Broodjes',
    description: 'Royaal belegde Italiaanse broodjes om van te genieten tijdens de lunchpauze. Bestel jouw favoriet via de knop hieronder',
    image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/3841bf8c-c54c-4f60-b994-6454f78f8635/379057150_18194403076287593_862347559648358630_n.jpg',
    buttonText: 'Bekijk broodjes',
    link: '#broodjes'
  },
  {
    title: 'Traiteur',
    description: 'Verse bereide maaltijden voor bijzondere (zakelijke) gelegenheden die we aan de deur komen brengen of die je gemakkelijk ophaalt bij ons. Bekijk ons uitgebreide overzicht',
    image: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/79a77524-d471-4efd-a2e7-8ff38bffe8c2/380536255_172926439119013_1414290766591190903_n.jpg',
    buttonText: 'Bekijk het catering menu',
    link: '/menu/traiteur'
  }
];

export const INTRO_IMAGES = {
  bottles: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/7700a28c-f6ee-4176-ba5c-88ac6b96f2db/DSC_7391+groot.jpeg",
  meatballs: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/ac9499e5-e988-4a94-aef8-79d2ea6335a5/359518158_833695645136305_4393960425781936335_n.jpg",
  staff: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/c0bd450e-dabd-4b98-b029-b581fcad07a7/352317600_720787993134371_1783029003667485126_n.jpg",
  foodPrep: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/639d04c2-14c0-4ec9-98cd-52ebf17614a0/381364469_897651865024507_125673568422183898_n.jpg",
  bag: "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/6b767d92-e490-442d-8fe3-3ca37f04013c/358012777_1238833280149926_2059834293244295995_n.jpg"
};

export const LOGO_URL = "https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/510e5fdb-cdbb-45a3-8dd8-671829ef47e2/feduzzi+logo+wit+transparant.png";
export const VIDEO_URL = "/videos/hero.mp4";
