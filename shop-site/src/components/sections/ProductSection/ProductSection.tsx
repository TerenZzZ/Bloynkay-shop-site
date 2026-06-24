import { useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../ui/Reveal";
import { RunningLightButton } from "../../ui/RunningLightButton";
import logoBloynkay from "../../../assets/images/brand/bloynkay_logo_2.png";
import { COLORWAYS, colorwayCssVars, type Colorway } from "./colorways";
import { POLO_GALLERY } from "./galleryImages";
import { ProductGalleryModal } from "./ProductGalleryModal";
import { SizeChartModal } from "./SizeChartModal";
import { DropSignupModal } from "./DropSignupModal";
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
    /** Base color della sezione precedente: scende dall'alto e sfuma nella
        base di questa sezione, così il blocco sopra invade dolcemente questo.
        Assente sulla prima sezione. */
    prevBgBase?: string;
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
    prevBgBase,
}: ProductSectionProps) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [sizeChartOpen, setSizeChartOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const sectionStyle = {
        ...colorwayCssVars(colorway),
        ...(prevBgBase ? { "--cw-bg-prev": prevBgBase } : {}),
    } as CSSProperties;

    return (
        <section
            id={`drop-02-${colorway}`}
            data-nav-theme={COLORWAYS[colorway].navTheme}
            className={`${styles.section} ${isFlipped ? styles.flipped : ""}`}
            style={sectionStyle}
        >
            <div className={styles.backdrop} aria-hidden="true" />
            <div className={styles.texture} aria-hidden="true" />
            <div className={styles.confetti} aria-hidden="true" />
            <img
                src={logoBloynkay}
                alt=""
                aria-hidden="true"
                className={styles.watermark}
            />
            {prevBgBase && <div className={styles.seam} aria-hidden="true" />}

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
                        {description.split("\n\n").map((paragraph) => (
                            <p key={paragraph} className={styles.lead}>
                                {paragraph}
                            </p>
                        ))}
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
                            <div className={styles.priceBlock}>
                                <span className={styles.priceLabel}>
                                    Prezzo di lancio
                                </span>
                                <span className={styles.price}>{price}</span>
                            </div>
                            <div className={styles.ghostGroup}>
                                <Link to="/store" className={styles.ctaGhost}>
                                    Visita lo store
                                </Link>
                                <button
                                    type="button"
                                    className={styles.ctaGhost}
                                    onClick={() => setSizeChartOpen(true)}
                                >
                                    Size chart
                                </button>
                            </div>
                            <RunningLightButton
                                colorway={colorway}
                                className={styles.cta}
                                onClick={() => setSignupOpen(true)}
                            >
                                Join Drop 02
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

            {sizeChartOpen && (
                <SizeChartModal
                    name={name}
                    colorway={colorway}
                    onClose={() => setSizeChartOpen(false)}
                />
            )}

            {signupOpen && (
                <DropSignupModal
                    colorway={colorway}
                    onClose={() => setSignupOpen(false)}
                />
            )}
        </section>
    );
}
