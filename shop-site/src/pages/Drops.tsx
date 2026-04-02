import { Link } from 'react-router-dom';
import { drops } from '../data/drops';
import { getProductsByDrop } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import styles from './Drops.module.css';

const STATUS_LABEL: Record<string, string> = {
    live: 'Live ora',
    upcoming: 'In arrivo',
    'sold-out': 'Esaurito',
};

export default function Drops() {
    return (
        <main className={styles.page}>
            <section className={styles.intro}>
                <div className={styles.introInner}>
                    <span className={styles.eyebrow}>Drops</span>
                    <h1 className={styles.title}>
                        Edizioni limitate. <br />
                        <span>Nessuna replica.</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Ogni drop Bloynkay è un evento. Quantità limitata, disponibilità temporanea.
                    </p>
                </div>
            </section>

            <div className={styles.dropsList}>
                {drops.map((drop, i) => {
                    const dropProducts = getProductsByDrop(drop.id);
                    const isUpcoming = drop.status === 'upcoming';

                    return (
                        <section key={drop.id} className={`${styles.dropSection} ${isUpcoming ? styles.upcoming : ''}`}>
                            <div className={styles.dropInner}>
                                <div className={styles.dropHeader}>
                                    <div className={styles.dropMeta}>
                                        <span className={`${styles.statusDot} ${styles[drop.status]}`} />
                                        <span className={styles.statusLabel}>{STATUS_LABEL[drop.status]}</span>
                                        <span className={styles.dropNumber}>#{String(i + 1).padStart(2, '0')}</span>
                                    </div>
                                    <div className={styles.dropTitles}>
                                        <span className={styles.dropSubtitle}>{drop.subtitle}</span>
                                        <h2 className={styles.dropName}>{drop.name}</h2>
                                    </div>
                                    <div className={styles.dropDate}>
                                        <span className={styles.dateLabel}>Data rilascio</span>
                                        <span className={styles.dateValue}>
                      {new Date(drop.date).toLocaleDateString('it-IT', {
                          day: '2-digit', month: 'long', year: 'numeric',
                      })}
                    </span>
                                    </div>
                                </div>

                                <div className={styles.dropBody}>
                                    <p className={styles.dropDesc}>{drop.description}</p>
                                    {isUpcoming ? (
                                        <div className={styles.notifyWrap}>
                                            <button className={styles.notifyBtn}>Avvisami al lancio →</button>
                                        </div>
                                    ) : (
                                        <>
                                            {dropProducts.length > 0 && (
                                                <div className={styles.productsGrid}>
                                                    {dropProducts.map((p) => (
                                                        <ProductCard key={p.id} product={p} />
                                                    ))}
                                                </div>
                                            )}
                                            <Link to="/shop" className={styles.shopLink}>Vedi tutti i prodotti →</Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>
        </main>
    );
}
