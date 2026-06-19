import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { colorwayCssVars, type Colorway } from "./colorways";
import type { GalleryImage } from "./galleryImages";
import styles from "./ProductGalleryModal.module.css";

type ProductGalleryModalProps = {
    name: string;
    position: number;
    total: number;
    colorway: Colorway;
    images: GalleryImage[];
    onClose: () => void;
};

export function ProductGalleryModal({
    name,
    position,
    total,
    colorway,
    images,
    onClose,
}: ProductGalleryModalProps) {
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

    return createPortal(
        <div
            className={styles.overlay}
            style={colorwayCssVars(colorway)}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} — gallery prodotto`}
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

                <header className={styles.head}>
                    <span className={styles.kicker}>Drop 02 · World Cup</span>
                    <div className={styles.headRow}>
                        <h2 className={styles.title}>{name}</h2>
                        <span className={styles.counter}>
                            {String(position).padStart(2, "0")} /{" "}
                            {String(total).padStart(2, "0")}
                        </span>
                    </div>
                </header>

                <div className={styles.gallery}>
                    {images.map((img) => (
                        <figure key={img.src} className={styles.shot}>
                            <div className={styles.shotMedia}>
                                <img
                                    src={img.src}
                                    alt={`${name} — ${img.label}`}
                                    className={styles.shotImg}
                                />
                            </div>
                            <figcaption className={styles.shotLabel}>
                                {img.label}
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </div>,
        document.body,
    );
}
