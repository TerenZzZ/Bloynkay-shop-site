import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../ui/Reveal";
import { RunningLightButton } from "../../ui/RunningLightButton";
import logoBloynkay from "../../../assets/images/brand/bloynkay_logo_2.png";
import { COLORWAYS, colorwayCssVars, type Colorway } from "./colorways";
import { POLO_GALLERY } from "./galleryImages";
import { ProductGalleryModal } from "./ProductGalleryModal";
import styles from "./ProductSection.module.css";

export type { Colorway };

export type ProductSectionProps = {
    colorway: Colorway;
    position: number;
    total: number;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
    isFlipped?: boolean;
};

export function ProductSection({
    colorway,
    position,
    total,
    name,
    description,
    details,
    price,
    mediaSrc,
    mediaAlt,
    isFlipped = false,
}: ProductSectionProps) {
    const [galleryOpen, setGalleryOpen] = useState(false);

    return (
        <section
            id={`drop-02-${colorway}`}
            data-nav-theme={COLORWAYS[colorway].navTheme}
            className={`${styles.section} ${isFlipped ? styles.flipped : ""}`}
            style={colorwayCssVars(colorway)}
        >
            <div className={styles.backdrop} aria-hidden="true" />
            <img
                src={logoBloynkay}
                alt=""
                aria-hidden="true"
                className={styles.watermark}
            />

            <div className={styles.grid}>
                <aside className={styles.mediaCol} aria-label={mediaAlt}>
                    <div className={styles.mediaInner}>
                        <header className={styles.mediaMeta}>
                            <span className={styles.kicker}>Drop 02 / World Cup</span>
                            <span className={styles.counter}>
                                {String(position).padStart(2, "0")} —{" "}
                                {String(total).padStart(2, "0")}
                            </span>
                        </header>

                        <button
                            type="button"
                            className={styles.mediaButton}
                            onClick={() => setGalleryOpen(true)}
                            aria-label={`Apri la gallery di ${name}`}
                        >
                            <figure className={styles.media}>
                                <img
                                    src={mediaSrc}
                                    alt={mediaAlt}
                                    className={styles.mediaEl}
                                />
                            </figure>
                        </button>

                        <span className={styles.mediaName}>{name}</span>
                    </div>
                </aside>

                <div className={styles.infoCol}>
                    <Reveal as="article" className={`${styles.step} ${styles.stepIntro}`}>
                        <span className={styles.stepLabel}>
                            <span className={styles.stepRule} aria-hidden="true" />
                            Polo {String(position).padStart(2, "0")}
                        </span>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.lead}>{description}</p>
                    </Reveal>

                    <Reveal as="article" className={`${styles.step} ${styles.stepBuy}`}>
                        <span className={styles.stepLabel}>
                            <span className={styles.stepRule} aria-hidden="true" />
                            Specifiche
                        </span>

                        <ul className={styles.details}>
                            {details.map((d, i) => (
                                <li key={d} className={styles.detail}>
                                    <span className={styles.detailLabel}>
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className={styles.detailText}>{d}</span>
                                </li>
                            ))}
                        </ul>

                        <div className={styles.buyRow}>
                            <span className={styles.priceLabel}>Prezzo di lancio</span>
                            <span className={styles.price}>{price}</span>
                            <button
                                type="button"
                                className={`${styles.ctaGhost} ${styles.sizeChart}`}
                            >
                                Size chart
                            </button>
                            <Link
                                to="/shop"
                                className={`${styles.ctaGhost} ${styles.ctaShop}`}
                            >
                                Vai allo shop
                            </Link>
                            <RunningLightButton
                                colorway={colorway}
                                className={styles.cta}
                            >
                                Aggiungi al carrello
                            </RunningLightButton>
                        </div>
                    </Reveal>
                </div>
            </div>

            {galleryOpen && (
                <ProductGalleryModal
                    name={name}
                    position={position}
                    total={total}
                    colorway={colorway}
                    images={POLO_GALLERY[colorway]}
                    onClose={() => setGalleryOpen(false)}
                />
            )}
        </section>
    );
}
