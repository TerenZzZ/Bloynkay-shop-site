import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { colorwayCssVars } from "./colorways";
import { serialOf, type Product } from "./products";
import styles from "./ProductModal.module.css";

type ProductModalProps = {
    product: Product;
    index: number;
    total: number;
    onClose: () => void;
};

export function ProductModal({ product, index, total, onClose }: ProductModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return (
        <div
            className={styles.overlay}
            style={colorwayCssVars(product.colorway)}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} — Drop 02`}
            onClick={onClose}
        >
            <div className={styles.backdrop} aria-hidden="true" />

            <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
                <button
                    ref={closeRef}
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Chiudi"
                >
                    ✕
                </button>

                <header className={styles.topMeta}>
                    <span className={styles.code}>{product.code}</span>
                    <span className={styles.counter}>
                        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                    </span>
                </header>

                <div className={styles.grid}>
                    <figure className={styles.media}>
                        <span className={styles.limited}>Limited</span>
                        <img
                            src={product.mediaSrc}
                            alt={product.mediaAlt}
                            className={styles.mediaEl}
                        />
                        <figcaption className={styles.serial}>
                            {serialOf(index, product.edition)}
                        </figcaption>
                    </figure>

                    <div className={styles.info}>
                        <span className={styles.kicker}>Drop 02 · World Cup</span>
                        <h2 className={styles.title}>{product.name}</h2>
                        <p className={styles.tagline}>{product.tagline}</p>
                        <p className={styles.lead}>{product.description}</p>

                        <ul className={styles.details}>
                            {product.details.map((d, i) => (
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
                                <span className={styles.price}>{product.price}</span>
                            </div>
                            <div className={styles.buttons}>
                                <button type="button" className={styles.ctaPrimary}>
                                    Aggiungi alla lista
                                    <span aria-hidden="true" className={styles.arrow}>
                                        →
                                    </span>
                                </button>
                                <Link to="/shop" className={styles.ctaGhost}>
                                    Vedi nello shop
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
