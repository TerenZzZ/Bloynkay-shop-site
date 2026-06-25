import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../../../../../cart/useCart";
import { formatPrice } from "../../../../../lib/money";
import { QuantityStepper } from "../../../../cart/QuantityStepper";
import { colorwayCssVars, type Colorway, type GalleryImage } from "../../data";
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
    /** Catalogo completo: abilita lo switch fra colorway nel pannello. */
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
            else if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
            else if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
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
        setSelectedSize(null);
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

    return createPortal(
        <div
            className={styles.overlay}
            style={colorwayCssVars(activeColorway)}
            role="dialog"
            aria-modal="true"
            aria-label={`${activeName} — gallery prodotto`}
            onClick={onClose}
        >
            {/* ── close button ── */}
            <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="Chiudi"
            >
                ✕
            </button>

            {/* ── body: thumbnails · immagine principale · pannello ── */}
            <div className={styles.body} onClick={(e) => e.stopPropagation()} >

                {/* Colonna thumbnail a sinistra */}
                <div className={styles.thumbCol}>
                    {activeImages.map((img, i) => (
                        <button
                            key={img.src}
                            type="button"
                            className={`${styles.thumbBtn} ${i === index ? styles.thumbActive : ""}`}
                            onClick={() => setIndex(i)}
                            aria-label={img.label}
                            aria-pressed={i === index}
                        >
                            <img src={img.src} alt="" className={styles.thumbImg} />
                        </button>
                    ))}
                </div>

                {/* Immagine principale */}
                <div className={styles.mainStage}>
                    {count > 1 && (
                        <>
                            <button
                                type="button"
                                className={`${styles.navBtn} ${styles.navPrev}`}
                                onClick={() => go(-1)}
                                aria-label="Foto precedente"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
                            </button>
                            <button
                                type="button"
                                className={`${styles.navBtn} ${styles.navNext}`}
                                onClick={() => go(1)}
                                aria-label="Foto successiva"
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
                            </button>
                        </>
                    )}
                    <figure className={styles.frame}>
                        <img
                            key={current.src}
                            src={current.src}
                            alt={`${activeName} — ${current.label}`}
                            className={styles.mainImg}
                        />
                    </figure>
                </div>

                {/* Pannello dettagli e acquisto */}
                {activePurchase && (
                    <aside
                        className={styles.panel}
                        aria-label={`Acquista ${activeName}`}
                    >
                        <div className={styles.panelHeader}>
                            <span className={styles.panelKicker}>Drop 02 · World Cup</span>
                            <h3 className={styles.panelName}>{activeName}</h3>
                            <span className={styles.panelPrice}>
                                {formatPrice(activePurchase.price)}
                            </span>
                        </div>

                        {/* Selezione modello */}
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

                        {/* Selezione taglia */}
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

                        {/* Quantità */}
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
