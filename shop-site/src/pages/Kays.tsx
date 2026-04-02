import { useCart } from '../context/CartContext';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import styles from './Kays.module.css';

export default function Kays() {
    const { addItem } = useCart();
    const kays = getProductsByCategory('kays');
    const kayArgento = kays.find((k) => k.variant === 'argento');
    const kayOro = kays.find((k) => k.variant === 'oro');

    return (
        <main className={styles.page}>
            {/* Hero */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroText}>
                        <span className={styles.eyebrow}>Kays · Drop 01</span>
                        <h1 className={styles.heroTitle}>KAYS</h1>
                        <p className={styles.heroQuote}>"Ogni coin rappresenta un vantaggio attivo."</p>
                        <p className={styles.heroDesc}>
                            Metal coin bipartiti in edizione Genesis Limited. 40×25mm, spessore 2mm.
                            Fronte con logo Bloynkay in rilievo, retro con scritta GENESIS LIMITED EDITION EST 2026.
                            Finitura sabbiata, disponibili in argento e oro.
                        </p>
                        <div className={styles.heroCta}>
                            {kayArgento && (
                                <button className={styles.ctaBtnSecondary} onClick={() => addItem(kayArgento)}>
                                    Argento — €{kayArgento.price}
                                </button>
                            )}
                            {kayOro && (
                                <button className={styles.ctaBtnPrimary} onClick={() => addItem(kayOro)}>
                                    Oro — €{kayOro.price}
                                </button>
                            )}
                        </div>
                    </div>

                    <div className={styles.heroCoins}>
                        <div className={styles.coinStack}>
                            <div className={`${styles.coin} ${styles.coinOro}`}>
                                <img src="/logo-oval.svg" alt="Kay Oro" />
                                <span className={styles.coinLabel}>ORO</span>
                            </div>
                            <div className={`${styles.coin} ${styles.coinArgento}`}>
                                <img src="/logo-oval.svg" alt="Kay Argento" />
                                <span className={styles.coinLabel}>ARGENTO</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Specs */}
            <section className={styles.specs}>
                <div className={styles.specsInner}>
                    <h2 className={styles.specsTitle}>Specifiche tecniche</h2>
                    <div className={styles.specsGrid}>
                        {[
                            { label: 'Dimensione', value: '40 × 25 mm' },
                            { label: 'Spessore', value: '2 mm' },
                            { label: 'Materiale', value: 'Metallo rifinito premium' },
                            { label: 'Design', value: 'Bipartite (fronte & retro)' },
                            { label: 'Texture', value: 'Sabbiata' },
                            { label: 'Edizione', value: 'Genesis Limited — EST 2026' },
                        ].map((s) => (
                            <div key={s.label} className={styles.specItem}>
                                <span className={styles.specLabel}>{s.label}</span>
                                <span className={styles.specValue}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison */}
            <section className={styles.comparison}>
                <div className={styles.comparisonInner}>
                    <h2 className={styles.sectionTitle}>Scegli la tua variante</h2>
                    <div className={styles.variantsGrid}>
                        <div className={styles.variantCard}>
                            <div className={styles.variantVisual}>
                                <div className={`${styles.bigCoin} ${styles.bigCoinArgento}`}>
                                    <img src="/logo-oval.svg" alt="Kay Argento" />
                                </div>
                            </div>
                            <div className={styles.variantInfo}>
                                <h3 className={styles.variantName}>Kay Argento</h3>
                                <ul className={styles.variantDetails}>
                                    <li>Rifinitura satinata, look vintage</li>
                                    <li>Design dual split / lavorazione fronte e retro</li>
                                    <li>Texture sabbiata argento</li>
                                </ul>
                                {kayArgento && (
                                    <>
                                        <span className={styles.variantPrice}>€{kayArgento.price}</span>
                                        <button className={styles.variantBtn} onClick={() => addItem(kayArgento)}>
                                            Aggiungi al carrello →
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className={`${styles.variantCard} ${styles.variantCardOro}`}>
                            <div className={styles.variantVisual}>
                                <div className={`${styles.bigCoin} ${styles.bigCoinOro}`}>
                                    <img src="/logo-oval.svg" alt="Kay Oro" />
                                </div>
                            </div>
                            <div className={styles.variantInfo}>
                                <h3 className={styles.variantName}>Kay Oro</h3>
                                <ul className={styles.variantDetails}>
                                    <li>Oro classico, elegante</li>
                                    <li>Metallo rifinito premium</li>
                                    <li>Texture sabbiata oro</li>
                                </ul>
                                {kayOro && (
                                    <>
                    <span className={`${styles.variantPrice} ${styles.variantPriceOro}`}>
                      €{kayOro.price}
                    </span>
                                        <button className={`${styles.variantBtn} ${styles.variantBtnOro}`} onClick={() => addItem(kayOro)}>
                                            Aggiungi al carrello →
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products grid */}
            <section className={styles.productsSection}>
                <div className={styles.productsSectionInner}>
                    <h2 className={styles.sectionTitle}>Tutti i Kays</h2>
                    <div className={styles.productsGrid}>
                        {kays.map((k) => (
                            <ProductCard key={k.id} product={k} featured />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
