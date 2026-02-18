import { GalleryItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Menu', href: '#' },
  { label: 'Sfeer', href: '#', active: true },
  { label: 'Over ons', href: '#' },
  { label: 'Werken bij', href: '#' },
  { label: 'Vestigingen', href: '#' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    type: 'video',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1733228963104-1DIJEGN0PMLU8BK19C8E/image-asset.jpeg', // Using poster as src for simplicity in this demo, real video would be mapped
    alt: 'Meet the team part 3',
    overlaySrc: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1733228963104-1DIJEGN0PMLU8BK19C8E/image-asset.jpeg'
  },
  {
    id: '2',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1733138749634-UVRHSOGMPRVMXY58HVG9/image-asset.jpeg',
    alt: 'Lunch catering traiteur'
  },
  {
    id: '3',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732794678113-X8W9Q8FM6J9MW19MC9JZ/image-asset.jpeg',
    alt: 'Verse Pasta'
  },
  {
    id: '4',
    type: 'video',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732642625209-BO4PMV09FEJ8Y95WUD3H/image-asset.jpeg',
    alt: 'Olive oil taster',
    overlaySrc: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732642625209-BO4PMV09FEJ8Y95WUD3H/image-asset.jpeg'
  },
  {
    id: '5',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732534149827-5YVHXEWM1G0DX9PC47MD/image-asset.jpeg',
    alt: 'Openingstijden'
  },
  {
    id: '6',
    type: 'video',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732017556495-NW1AOG2IUZ0C5NTFE2KE/image-asset.jpeg',
    alt: 'Gebroeders Feduzzi',
    overlaySrc: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732017556495-NW1AOG2IUZ0C5NTFE2KE/image-asset.jpeg'
  },
  {
    id: '7',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1732190708336-4MFKZY95GD3GQZTM8SXH/image-asset.jpeg',
    alt: 'Sandwich plate'
  },
  {
    id: '8',
    type: 'video',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1731432794029-SWWEH703AH0L5GT2BDX8/image-asset.jpeg',
    alt: 'Delivery van',
    overlaySrc: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1731432794029-SWWEH703AH0L5GT2BDX8/image-asset.jpeg'
  },
  {
    id: '9',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1731358756707-0V9W7AGSW94XFDR39E0T/image-asset.jpeg',
    alt: 'Signage'
  },
  {
    id: '10',
    type: 'image',
    src: 'https://images.squarespace-cdn.com/content/v1/65d0ba3a3921ea6aa4f09569/1730981155588-N7JMF2RIX7C6EKWY6UC2/image-asset.jpeg',
    alt: 'Bresaola'
  }
];

export const FOOTER_LINKS = {
  vestigingen: [
    { label: 'Amsterdam', href: '#' },
    { label: 'Laren', href: '#' },
  ],
  menu: [
    { label: 'Maaltijden', href: '#' },
    { label: 'Broodjes', href: '#' },
    { label: 'Traiteur', href: '#' },
    { label: 'Catering', href: '#' },
  ],
  bestellen: [
    { label: 'Online broodjes', href: '#' },
    { label: 'Catering Amsterdam', href: '#' },
    { label: 'Catering Laren', href: '#' },
  ]
};