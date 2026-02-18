export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

export interface MenuSection {
  title: string;
  subtitle?: string;
  items: MenuItem[];
}