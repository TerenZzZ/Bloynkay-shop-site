import type { Product } from '../types';

export const products: Product[] = [
    {
        id: 'kay-argento-001',
        name: 'Kay Argento',
        price: 35,
        category: 'kays',
        variant: 'argento',
        description: 'Metal coin bipartita 40×25mm. Rilievo lucido, finitura satinata look vintage. Genesis Limited Edition EST 2026.',
        image: '/images/kay-argento.png',
        badge: 'DROP 01',
        drop: 'drop-01',
        details: [
            'Dimensione: 40×25 mm',
            'Spessore: 2 mm',
            'Metallo rifinito / Rilievo lucido',
            'Bipartite (front & back)',
            'Texture "sabbiata"',
            'Genesis Limited Edition EST 2026',
        ],
    },
    {
        id: 'kay-oro-001',
        name: 'Kay Oro',
        price: 45,
        category: 'kays',
        variant: 'oro',
        description: 'Metal coin bipartita 40×25mm. Metallo rifinito premium, oro classico elegante. Genesis Limited Edition EST 2026.',
        image: '/images/kay-oro.png',
        badge: 'DROP 01',
        drop: 'drop-01',
        details: [
            'Dimensione: 40×25 mm',
            'Spessore: 2 mm',
            'Metallo rifinito premium',
            'Texture "sabbiata"',
            'Oro classico, elegante',
            'Genesis Limited Edition EST 2026',
        ],
    },
    {
        id: 'tee-bk-black-001',
        name: 'Bloynkay OG Tee',
        price: 55,
        category: 'apparel',
        description: 'T-shirt essenziale con logo Bloynkay sul petto. Taglio oversize, cotone 100% premium.',
        image: '/images/tee-black.png',
        badge: 'NEW',
        details: ['100% cotone premium', 'Taglio oversize', 'Logo ricamato', 'Made in Italy'],
    },
    {
        id: 'hoodie-bk-black-001',
        name: 'Bloynkay Classic Hood',
        price: 110,
        category: 'apparel',
        description: 'Felpa con cappuccio signature, logo Bloynkay in rilievo. Drop pesante, vestibilità relaxed.',
        image: '/images/hoodie-black.png',
        details: ['Fleece 380gsm', 'Taglio relaxed', 'Logo ricamato', 'Drop pesante', 'Made in Italy'],
    },
    {
        id: 'tee-issue6-001',
        name: 'Issue 6 Tee',
        price: 60,
        category: 'apparel',
        description: 'T-shirt della serie Issue 6, grafica watermark del logo bubbly in tono su tono.',
        image: '/images/tee-issue6.png',
        badge: 'ISSUE 6',
        details: ['100% cotone premium', 'Grafica tono su tono', 'Taglio regular', 'Serie limitata'],
    },
    {
        id: 'cap-bk-001',
        name: 'BK Cap',
        price: 40,
        category: 'accessories',
        description: 'Cappello 6 pannelli con logo Bloynkay ricamato. Regolazione posteriore.',
        image: '/images/cap-bk.png',
        details: ['6 pannelli', 'Logo ricamato', 'Regolazione posteriore', 'Taglia unica'],
    },
];

export const getProductById = (id: string) => products.find((p) => p.id === id);
export const getProductsByCategory = (category: Product['category']) =>
    products.filter((p) => p.category === category);
export const getProductsByDrop = (dropId: string) => products.filter((p) => p.drop === dropId);
