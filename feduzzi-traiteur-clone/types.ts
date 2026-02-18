export interface MenuItem {
  title: string;
  description: string;
  price: number;
}

export interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
}