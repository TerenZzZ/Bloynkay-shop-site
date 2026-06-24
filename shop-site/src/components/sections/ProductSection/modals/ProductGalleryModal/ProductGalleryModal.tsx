import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Colorway, GalleryImage } from "../../data";
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
    images,
    onClose,
}: ProductGalleryModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);
    const [index, setIndex] = useState(0);
    const count = images.length;

    const go = useCallback(
        (dir: number) => setIndex((i) => (i + dir + count) % count),
        [count],
    );

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight") go(1);
            else if (e.key === "ArrowLeft") go(-1);
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose, go]);

    const current = images[index];
    const prevImg = images[(index - 1 + count) % count];
    const nextImg = images[(index + 1) % count];

    return createPortal(
        <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={`${name} — gallery prodotto`}
            onClick={onClose}
        >
            <div className={styles.bar} onClick={(e) => e.stopPropagation()}>
                <div className={styles.barInfo}>
                    <span className={styles.kicker}>Drop 02 · World Cup</span>
                    <h2 className={styles.title}>{name}</h2>
                </div>
                <button
                    ref={closeRef}
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Chiudi"
                >
                    ✕
                </button>
            </div>

            <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
                <button
                    type="button"
                    className={`${styles.arrow} ${styles.prev}`}
                    onClick={() => go(-1)}
                    aria-label="Immagine precedente"
                >
                    ‹
                </button>

                <button
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`${styles.side} ${styles.sidePrev}`}
                    onClick={() => go(-1)}
                >
                    <img src={prevImg.src} alt="" className={styles.sideImg} />
                </button>

                <figure className={styles.frame}>
                    <img
                        key={current.src}
                        src={current.src}
                        alt={`${name} — ${current.label}`}
                        className={styles.mainImg}
                    />
                </figure>

                <button
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    className={`${styles.side} ${styles.sideNext}`}
                    onClick={() => go(1)}
                >
                    <img src={nextImg.src} alt="" className={styles.sideImg} />
                </button>

                <button
                    type="button"
                    className={`${styles.arrow} ${styles.next}`}
                    onClick={() => go(1)}
                    aria-label="Immagine successiva"
                >
                    ›
                </button>
            </div>
        </div>,
        document.body,
    );
}
