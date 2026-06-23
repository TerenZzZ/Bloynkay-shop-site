import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { colorwayCssVars, type Colorway } from "./colorways";
import sizeChartImg from "../../../assets/images/products/landing/gallery/polo/size_chart_polo.png";
import styles from "./SizeChartModal.module.css";

type SizeChartModalProps = {
    name: string;
    colorway: Colorway;
    onClose: () => void;
};

export function SizeChartModal({ name, colorway, onClose }: SizeChartModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.body.classList.add("is-blurred");
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            document.body.classList.remove("is-blurred");
        };
    }, [onClose]);

    return createPortal(
        <div
            className={styles.overlay}
            style={colorwayCssVars(colorway)}
            role="dialog"
            aria-modal="true"
            aria-label={`Guida taglie — ${name}`}
            onClick={onClose}
        >
            <div className={styles.backdrop} aria-hidden="true" />

            <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="Chiudi"
            >
                ✕
            </button>

            <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
                <img
                    src={sizeChartImg}
                    alt={`Guida taglie polo ${name}`}
                    className={styles.image}
                />
            </figure>
        </div>,
        document.body,
    );
}
