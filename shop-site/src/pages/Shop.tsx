import { useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import type { Product } from '../types';
import styles from './Shop.module.css';

type FilterCategory = 'all' | Product['category'];

const FILTERS: { label: string; value: FilterCategory }[] = [
    { label: 'Tutto', value: 'all' },
    { label: 'Kays', value: 'kays' },
    { label: 'Abbigliamento', value: 'apparel' },
    { label: 'Accessori', value: 'accessories' },
];

export default function Shop() {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
    const filtered = activeFilter === 'all' ? products : products.filter((p) => p.category === activeFilter);

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <span className={styles.eyebrow}>Shop</span>
                    <h1 className={styles.heroTitle}>
                        Ogni pezzo <br />
                        <em>è una dichiarazione.</em>
                    </h1>
                </div>
                <div className={styles.heroLine} />
            </section>

            <section className={styles.catalog}>
                <div className={styles.catalogHeader}>
                    <div className={styles.filters}>
                        {FILTERS.map((f) => (
                            <button
                                key={f.value}
                                className={`${styles.filterBtn} ${activeFilter === f.value ? styles.filterActive : ''}`}
                                onClick={() => setActiveFilter(f.value)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <span className={styles.count}>{filtered.length} prodotti</span>
                </div>
                <div className={styles.grid}>
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </main>
    );
}
