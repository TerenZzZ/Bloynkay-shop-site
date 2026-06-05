import { Link } from "react-router-dom";
import { Reveal } from "../../ui/Reveal";
import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./ProductSection.module.css";

export type Colorway = "brazil" | "england" | "france" | "germany" | "italy" | "portugal";

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

const colorwayClass: Record<Colorway, string> = {
    brazil: styles.brazil,
    england: styles.england,
    france: styles.france,
    germany: styles.germany,
    italy: styles.italy,
    portugal: styles.portugal,
};

const navTheme: Record<Colorway, "light" | "dark" | "medium"> = {
    brazil: "light",
    england: "light",
    france: "dark",
    germany: "light",
    italy: "dark",
    portugal: "dark",
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
    return (
        <section
            id={`drop-02-${colorway}`}
            data-nav-theme={navTheme[colorway]}
            className={`${styles.section} ${colorwayClass[colorway]} ${isFlipped ? styles.flipped : ""}`}
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

                        <Link to="/shop" className={styles.mediaLink}>
                            <figure className={styles.media}>
                                <img
                                    src={mediaSrc}
                                    alt={mediaAlt}
                                    className={styles.mediaEl}
                                />
                            </figure>
                        </Link>

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
                            <div className={styles.priceBlock}>
                                <span className={styles.priceLabel}>Prezzo di lancio</span>
                                <span className={styles.price}>{price}</span>
                            </div>
                            <div className={styles.buttons}>
                                <button type="button" className={styles.ctaGhost}>
                                    Dettagli
                                </button>
                                <button type="button" className={styles.cta}>
                                    <span>Aggiungi alla lista</span>
                                    <span aria-hidden="true" className={styles.arrow}>
                                        →
                                    </span>
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
