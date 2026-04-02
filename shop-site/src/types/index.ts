export type ProductVariant = 'argento' | 'oro';

export interface Product {
    id: string;
    name: string;
    price: number;
    category: 'kays' | 'apparel' | 'accessories';
    variant?: ProductVariant;
    description: string;
    image: string;
    badge?: string;
    soldOut?: boolean;
    drop?: string;
    details?: string[];
}

export interface Drop {
    id: string;
    name: string;
    subtitle: string;
    date: string;
    status: 'live' | 'upcoming' | 'sold-out';
    image: string;
    products: string[];
    description: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
    size?: string;
}
