import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../../../../../cart/useCart";
import { formatPrice } from "../../../../../lib/money";
import { QuantityStepper } from "../../../../cart/QuantityStepper";
import type { Colorway, GalleryImage } from "../../data";
import styles from "./ProductGalleryModal.module.css";

export type GalleryPurchase = {
    id: string;
    price: number;
    image: string;
    sizes: string[];
    colors?: { name: string; hex: string }[];
};

export type GalleryModel = {
    colorway: Colorway;
    name: string;
    swatch: string;
    images: GalleryImage[];
    purchase: GalleryPurchase;
};

type ProductGalleryModalProps = {
    name: string;
    colorway: Colorway;
    images: GalleryImage[];
    onClose: () => void;
    purchase?: GalleryPurchase;
    models?: GalleryModel[];
};

export function ProductGalleryModal({
    name,
    colorway,
    images,
    onClose,
    purchase,
    models,
}: ProductGalleryModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);
    const [index, setIndex] = useState(0);
    const [activeColorway, setActiveColorway] = useState<Colorway>(colorway);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [quantity, setQuantity] = useState(1);
    const { addItem, openCart } = useCart();

    const activeModel =
        models?.find((m) => m.colorway === activeColorway) ?? models?.[0] ?? null;
    const activeName = activeModel?.name ?? name;
    const activeImages = activeModel?.images ?? images;
    const activePurchase = activeModel?.purchase ?? purchase;
    const count = activeImages.length;

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

    const selectModel = (cw: Colorway) => {
        setActiveColorway(cw);
        setIndex(0);
    };

    const handleAddToCart = () => {
        if (!activePurchase) return;
        addItem(
            {
                id: activePurchase.id,
                name: activeName,
                price: activePurchase.price,
                image: activePurchase.image,
                colorway: activeColorway,
            },
            {
                size: selectedSize ?? undefined,
                quantity,
            },
        );
        openCart();
        onClose();
    };

    const current = activeImages[index];
    const prevImg = activeImages[(index - 1 + count) % count];
    const nextImg = activeImages[(index + 1) % count];

    return createPortal(
        <div
            className={styles.overlay}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeName} — gallery prodotto`}
            onClick={onClose}
        >
            <div className={styles.bar} onClick={(e) => e.stopPropagation()}>
                <div className={styles.barInfo}>
                    <span className={styles.kicker}>Drop 02 · World Cup</span>
                    <h2 className={styles.title}>{activeName}</h2>
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

            <div className={styles.body} onClick={(e) => e.stopPropagation()}>
                <div className={styles.stage}>
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
                            alt={`${activeName} — ${current.label}`}
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

                {activePurchase && (
                    <aside
                        className={styles.panel}
                        aria-label={`Acquista ${activeName}`}
                    >
                        <h3 className={styles.panelName}>{activeName}</h3>
                        <span className={styles.panelPrice}>
                            {formatPrice(activePurchase.price)}
                        </span>

                        {models && models.length > 1 && (
                            <div className={styles.field}>
                                <span className={styles.fieldLabel}>Modello</span>
                                <div className={styles.models}>
                                    {models.map((m) => (
                                        <button
                                            key={m.colorway}
                                            type="button"
                                            className={`${styles.modelBtn} ${
                                                m.colorway === activeColorway
                                                    ? styles.modelActive
                                                    : ""
                                            }`}
                                            onClick={() => selectModel(m.colorway)}
                                            aria-label={m.name}
                                            aria-pressed={m.colorway === activeColorway}
                                        >
                                            <img
                                                src={m.swatch}
                                                alt=""
                                                className={styles.modelImg}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className={styles.field}>
                            <span className={styles.fieldLabel}>Taglia</span>
                            <div className={styles.sizes}>
                                {activePurchase.sizes.map((s) => (
                                    <button
                                        key={s}
                                        type="button"
                                        className={`${styles.sizeBtn} ${
                                            selectedSize === s ? styles.sizeActive : ""
                                        }`}
                                        onClick={() => setSelectedSize(s)}
                                        aria-pressed={selectedSize === s}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.field}>
                            <span className={styles.fieldLabel}>Quantità</span>
                            <QuantityStepper
                                quantity={quantity}
                                onDecrement={() =>
                                    setQuantity((q) => Math.max(1, q - 1))
                                }
                                onIncrement={() => setQuantity((q) => q + 1)}
                                label={activeName}
                            />
                        </div>

                        <button
                            type="button"
                            className={styles.addBtn}
                            onClick={handleAddToCart}
                            disabled={
                                activePurchase.sizes.length > 0 && !selectedSize
                            }
                        >
                            {activePurchase.sizes.length > 0 && !selectedSize
                                ? "Seleziona una taglia"
                                : "Aggiungi al carrello"}
                        </button>
                    </aside>
                )}
            </div>
        </div>,
        document.body,
    );
}
