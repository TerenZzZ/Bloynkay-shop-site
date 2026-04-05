import { Link } from 'react-router-dom';
import { drops } from '../data/drops';
import styles from './Home.module.css';

const tickerText = [
    'Take part or stay out', 'Drop 01', 'Kays', 'EST 2026',
    'Spring Summer', 'Bloynkay', 'Limited', 'Genesis',
];

export default function Home() {

    return (
        <main className={styles.page}>

            {/* ── HERO ─────────────────────────────────────── */}
            <section className={styles.hero}>
                <img
                    src="/images/image0.png"
                    alt=""
                    className={styles.heroImg}
                    aria-hidden="true"
                />
                <div className={styles.heroOverlay} aria-hidden="true" />

                {/* Contenuto centrato — logo + motto + CTA */}
                <div className={styles.heroCenter}>
                    <img src="/logo-oval.svg" alt="Bloynkay" className={styles.heroCenterLogo} />
                    <p className={styles.heroMotto}>Take part or stay out.</p>
                    <div className={styles.heroCta}>
                        <Link to="/drops" className={styles.ctaPrimary}>Drops →</Link>
                        <Link to="/kays" className={styles.ctaSecondary}>Kays</Link>
                    </div>
                </div>

                {/* Monogramma BC in basso a destra */}
                <div className={styles.heroBc} aria-hidden="true">
                    <img src="/logo-b.svg" alt="" className={styles.heroBcImg} />
                </div>

                {/* Scroll hint */}
                <div className={styles.heroScroll} aria-hidden="true">
                    <span>Scroll</span>
                    <div className={styles.scrollLine} />
                </div>
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

            {/* ── DROPS PREVIEW ────────────────────────────── */}
            <section className={styles.dropsPreview}>
                <div className={styles.sectionInner}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.eyebrow}>· Spring Drop ·</span>
                        <h2 className={styles.sectionTitle}>Drops</h2>
                    </div>
                    <div className={styles.dropsGrid}>
                        {drops.map((drop) => (
                            <Link to="/drops" key={drop.id} className={styles.dropCard}>
                                <div className={styles.dropCardTop}>
                                    <span className={`${styles.dropStatus} ${
                                        drop.status === 'live'     ? styles.statusLive :
                                            drop.status === 'upcoming' ? styles.statusUpcoming :
                                                styles.statusSoldOut
                                    }`}>
                                        {drop.status === 'live' && <span className={styles.liveDot} />}
                                        {drop.status === 'live'     ? 'Live ora' :
                                            drop.status === 'upcoming' ? 'In arrivo' : 'Sold out'}
                                    </span>
                                    <span className={styles.dropNumber}>
                                        #{String(drop.id).padStart(2, '0')}
                                    </span>
                                </div>
                                <h3 className={styles.dropCardName}>{drop.name}</h3>
                                <p className={styles.dropCardSub}>{drop.subtitle}</p>
                                <p className={styles.dropCardDesc}>{drop.description}</p>
                                <span className={styles.dropCardArrow}>Scopri il drop →</span>
                            </Link>
                        ))}
                    </div>
                    <div className={styles.sectionLinkWrap}>
                        <Link to="/drops" className={styles.sectionLink}>
                            Vedi tutti i drops →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── KAYS PREVIEW ─────────────────────────────── */}
            <section className={styles.kaysPreview}>
                <div className={styles.sectionInner}>
                    <div className={styles.kaysPreviewInner}>

                        <div className={styles.kaysPreviewText}>
                            <span className={styles.eyebrowDark}>Genesis · Limited Edition</span>
                            <h2 className={styles.kaysTitle}>
                                I Kays<br />sono qui.
                            </h2>
                            <p className={styles.kaysDesc}>
                                Metal coin bipartiti. Argento e Oro.<br />
                                Ogni pezzo è numerato. EST 2026.
                            </p>
                            <div className={styles.kaysActions}>
                                <Link to="/kays" className={styles.ctaPrimaryDark}>
                                    Scopri i Kays →
                                </Link>
                                <Link to="/shop" className={styles.kaysShopLink}>
                                    Acquista
                                </Link>
                            </div>
                        </div>

                        <div className={styles.kaysCoins}>
                            <img
                                src="/images/kay-oro-3d.svg"
                                alt="Kay Oro"
                                className={`${styles.kaySvg} ${styles.kaySvgOro}`}
                            />
                            <img
                                src="/images/kay-argento-3d.svg"
                                alt="Kay Argento"
                                className={`${styles.kaySvg} ${styles.kaySvgArgento}`}
                            />
                        </div>

                    </div>

                    <div className={styles.kaysFaceShowcase}>
                        <div className={styles.kaysFaceCard}>
                            <img src="/images/kay-argento-front.svg" alt="Kay Argento — fronte" className={styles.kaysFaceImg}/>
                            <span className={styles.kaysFaceLabel}>Argento · Fronte</span>
                        </div>
                        <div className={styles.kaysFaceCard}>
                            <img src="/images/kay-argento-back.svg" alt="Kay Argento — retro" className={styles.kaysFaceImg}/>
                            <span className={styles.kaysFaceLabel}>Argento · Retro</span>
                        </div>
                        <div className={styles.kaysFaceCard}>
                            <img src="/images/kay-oro-front.svg" alt="Kay Oro — fronte" className={styles.kaysFaceImg}/>
                            <span className={styles.kaysFaceLabel}>Oro · Fronte</span>
                        </div>
                        <div className={styles.kaysFaceCard}>
                            <img src="/images/kay-oro-back.svg" alt="Kay Oro — retro" className={styles.kaysFaceImg}/>
                            <span className={styles.kaysFaceLabel}>Oro · Retro</span>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}