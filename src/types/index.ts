export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: 'broodjes' | 'maaltijden' | 'traiteur' | 'dranken';
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export type CustomerType = 'private' | 'business';

export interface Customer {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    type: CustomerType;
    companyName?: string;
    kvkNumber?: string;
    vatNumber?: string;
    address: string;
    zipCode: string;
    city: string;
}

export interface Order {
    id: string;
    date: string; // ISO string
    customer: Customer;
    items: CartItem[];
    total: number;
    status: 'pending' | 'paid' | 'completed' | 'cancelled';
    paymentMethod: 'ideal' | 'invoice';
}
