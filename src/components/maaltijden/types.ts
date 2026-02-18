export interface MenuItem {
    title: string;
    description: string;
    price: string;
}

export interface MenuSectionData {
    id: string;
    title: string;
    items: MenuItem[];
    imageSrc: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
    extraClass?: string;
}
