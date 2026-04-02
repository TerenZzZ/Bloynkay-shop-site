import { Link } from 'react-router-dom';
import { drops } from '../data/drops';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import styles from './Home.module.css';

export default function Home() {
    const liveDrop = drops.find((d) => d.status === 'live') ?? drops[0];
    const featuredProducts = products.filter((p) => p.badge).slice(0, 3);
    const tickerText = ['Take part or stay out', 'Drop 01', 'Kays', 'EST 2026', 'Limited', 'Bloynkay'];

    return (
        <main className={styles.page}>

            {/* ── HERO ─────────────────────────────────────── */}
            <section className={styles.hero}>
                <div className={styles.heroBg} aria-hidden="true">
                    <span className={styles.heroBgText}>BLOYNKAY</span>
                </div>
                <div className={styles.heroContent}>
                    <img src="/logo-oval.svg" alt="bloynkay" className={styles.heroLogo} />
                    <p className={styles.heroTagline}>Take part or stay out.</p>
                    <div className={styles.heroCta}>
                        <Link to="/shop" className={styles.ctaPrimary}>Shop Now</Link>
                        <Link to="/drops" className={styles.ctaSecondary}>Drops →</Link>
                    </div>
                </div>
                <div className={styles.heroScroll} aria-hidden="true">
                    <span>Scroll</span>
                    <div className={styles.scrollLine} />
                </div>
                {liveDrop && (
                    <div className={styles.heroDropHint}>
                        <span className={styles.liveDotSmall} />
                        <span>{liveDrop.name} — Live ora</span>
                    </div>
                )}
            </section>

            {/* ── TICKER ───────────────────────────────────── */}
            <div className={styles.ticker} aria-hidden="true">
                <div className={styles.tickerTrack}>
                    {[...tickerText, ...tickerText, ...tickerText].map((t, i) => (
                        <span key={i} className={styles.tickerItem}>
              {t} <span className={styles.tickerDot}>·</span>
            </span>
                    ))}
                </div>
            </div>

            {/* ── DROP BANNER ──────────────────────────────── */}
            {liveDrop && (
                <section className={styles.dropBanner}>
                    <div className={styles.dropBannerInner}>
                        <div className={styles.dropBannerLeft}>
              <span className={styles.dropBannerEyebrow}>
                <span className={styles.liveDot} />
                  {liveDrop.subtitle} · Live ora
              </span>
                            <h2 className={styles.dropBannerTitle}>{liveDrop.name}</h2>
                            <p className={styles.dropBannerDesc}>{liveDrop.description}</p>
                        </div>
                        <Link to="/drops" className={styles.dropBannerLink}>
                            Vedi il drop →
                        </Link>
                    </div>
                </section>
            )}

            {/* ── FEATURED PRODUCTS ────────────────────────── */}
            <section className={styles.featured}>
                <div className={styles.featuredInner}>
                    <div className={styles.featuredHeader}>
                        <h2 className={styles.featuredTitle}>Selezionati</h2>
                        <Link to="/shop" className={styles.viewAll}>Vedi tutto →</Link>
                    </div>
                    <div className={styles.featuredGrid}>
                        {featuredProducts.map((p) => (
                            <ProductCard key={p.id} product={p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── KAYS PROMO ───────────────────────────────── */}
            <section className={styles.kaysPromo}>
                <div className={styles.kaysPromoInner}>
                    <div className={styles.kaysPromoText}>
                        <span className={styles.eyebrow}>Genesis · Limited Edition</span>
                        <h2 className={styles.kaysPromoTitle}>
                            I Kays<br />sono qui.
                        </h2>
                        <p className={styles.kaysPromoDesc}>
                            Metal coin bipartiti. Argento e Oro.<br />
                            Ogni pezzo è numerato. EST 2026.
                        </p>
                        <div className={styles.kaysPromoActions}>
                            <Link to="/kays" className={styles.kaysPromoLink}>Scopri i Kays →</Link>
                            <Link to="/shop" className={styles.kaysBuyLink}>Acquista</Link>
                        </div>
                    </div>
                    <div className={styles.kaysPromoCoins} aria-hidden="true">
                        <div className={styles.coinWrapper} style={{ transform: 'rotate(12deg) translateY(-24px) translateX(20px)', zIndex: 2 }}>
                            <div className={styles.coinOro}>
                                <div className={styles.coinInner}><span className={styles.coinLabel}>ORO</span></div>
                            </div>
                            <div className={styles.coinEdge} />
                        </div>
                        <div className={styles.coinWrapper} style={{ transform: 'rotate(-8deg) translateY(20px) translateX(-16px)', zIndex: 1 }}>
                            <div className={styles.coinArgento}>
                                <div className={styles.coinInner}><span className={styles.coinLabel}>ARG</span></div>
                            </div>
                            <div className={styles.coinEdgeArgento} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TAGLINE STRIP ────────────────────────────── */}
            <section className={styles.taglineStrip}>
                <div className={styles.taglineStripInner}>
                    <p className={styles.taglineText}>Take part or stay out.</p>
                    <Link to="/about" className={styles.taglineLink}>Chi siamo →</Link>
                </div>
            </section>

        </main>
    );
}
