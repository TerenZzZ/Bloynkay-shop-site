import type { Drop } from '../types';

export const drops: Drop[] = [
    {
        id: 'drop-01',
        name: 'KAYS',
        subtitle: 'DROP 01',
        date: '2026-01-12',
        status: 'live',
        image: '/images/drop01-cover.png',
        products: ['kay-argento-001', 'kay-oro-001'],
        description:
            'Il primo drop Bloynkay introduce i Kays — metal coin bipartiti in edizione Genesis Limited. Ogni coin rappresenta un vantaggio attivo. Take part or stay out.',
    },
    {
        id: 'drop-02',
        name: 'ISSUE 6',
        subtitle: 'DROP 02',
        date: '2026-06-01',
        status: 'upcoming',
        image: '/images/drop02-cover.png',
        products: ['tee-issue6-001'],
        description:
            'La sesta uscita del magazine Bloynkay si trasforma in una capsule esclusiva. Grafica tono su tono, tiratura limitata.',
    },
];
