import { useState } from "react";
import { Reveal } from "../../ui/Reveal";
import { colorwayCssVars } from "./colorways";
import { PRODUCTS, serialOf } from "./products";
import { ProductModal } from "./ProductModal";
import styles from "./ProductGrid.module.css";

export function ProductGrid() {
    const [active, setActive] = useState<number | null>(null);

    return (
        <section id="drop-02" data-nav-theme="light" className={styles.section}>
            <div className={styles.head}>
                <Reveal>
                    <span className={styles.kicker}>
                        <span className={styles.dot} aria-hidden="true" />
                        Drop 02 · World Cup Edition
                    </span>
                </Reveal>
                <Reveal delay={80}>
                    <h2 className={styles.headline}>
                        Sei nazioni.<br />
                        <em className={styles.accent}>Sei capi numerati.</em>
                    </h2>
                </Reveal>
                <Reveal delay={160}>
                    <p className={styles.sub}>
                        Tiratura limitata, una sola produzione. Tocca un capo per le
                        specifiche complete.
                    </p>
                </Reveal>
            </div>

            <ul className={styles.grid}>
                {PRODUCTS.map((p, i) => (
                    <Reveal
                        as="li"
                        key={p.colorway}
                        delay={60 * (i % 3)}
                        className={styles.cell}
                    >
                        <button
                            type="button"
                            className={styles.card}
                            style={colorwayCssVars(p.colorway)}
                            onClick={() => setActive(i)}
                            aria-label={`${p.name} — apri dettagli`}
                        >
                            <span className={styles.cardTop}>
                                <span className={styles.code}>{p.code}</span>
                                <span className={styles.limited}>Limited</span>
                            </span>

                            <span className={styles.media}>
                                <img
                                    src={p.mediaSrc}
                                    alt={p.mediaAlt}
                                    className={styles.mediaEl}
                                    loading="lazy"
                                />
                            </span>

                            <span className={styles.cardBottom}>
                                <span className={styles.nameRow}>
                                    <span className={styles.name}>{p.name}</span>
                                    <span className={styles.price}>{p.price}</span>
                                </span>
                                <span className={styles.metaRow}>
                                    <span className={styles.serial}>
                                        {serialOf(i, p.edition)}
                                    </span>
                                    <span className={styles.cta}>
                                        Dettagli
                                        <span aria-hidden="true" className={styles.arrow}>
                                            →
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </button>
                    </Reveal>
                ))}
            </ul>

            {active !== null && (
                <ProductModal
                    product={PRODUCTS[active]}
                    index={active}
                    total={PRODUCTS.length}
                    onClose={() => setActive(null)}
                />
            )}
        </section>
    );
}
