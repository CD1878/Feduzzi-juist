export interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  link: string;
}
