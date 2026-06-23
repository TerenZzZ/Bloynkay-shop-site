import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../../cart";
import { formatPrice } from "../../../lib/money";
import { CartItem } from "../CartItem";
import styles from "./CartDrawer.module.css";

const PANEL_TRANSITION = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.42 } as const;

export function CartDrawer() {
    const { isOpen, lines, subtotal, totalQuantity, closeCart, clear } = useCart();

    // Chiusura con Escape + blocco dello scroll del body mentre è aperto.
    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeCart();
        };
        document.addEventListener("keydown", onKey);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, closeCart]);

    const isEmpty = lines.length === 0;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <div className={styles.root}>
                    <motion.div
                        className={styles.backdrop}
                        onClick={closeCart}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.32 }}
                        aria-hidden="true"
                    />

                    <motion.aside
                        className={styles.panel}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Carrello"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={PANEL_TRANSITION}
                    >
                        <header className={styles.header}>
                            <div className={styles.headerText}>
                                <h2 className={styles.title}>Carrello</h2>
                                <span className={styles.count}>
                                    {totalQuantity === 0
                                        ? "Vuoto"
                                        : `${totalQuantity} ${totalQuantity === 1 ? "articolo" : "articoli"}`}
                                </span>
                            </div>
                            <button
                                type="button"
                                className={styles.close}
                                onClick={closeCart}
                                aria-label="Chiudi il carrello"
                            >
                                <span aria-hidden="true">✕</span>
                            </button>
                        </header>

                        {isEmpty ? (
                            <div className={styles.empty}>
                                <p className={styles.emptyTitle}>Il carrello è vuoto</p>
                                <p className={styles.emptyText}>
                                    Scopri il Drop 02 — World Cup Edition.
                                </p>
                                <Link to="/store" className={styles.emptyCta} onClick={closeCart}>
                                    Esplora lo store
                                </Link>
                            </div>
                        ) : (
                            <>
                                <div className={styles.list}>
                                    {lines.map((line) => (
                                        <CartItem key={line.lineId} line={line} />
                                    ))}
                                    <button
                                        type="button"
                                        className={styles.clear}
                                        onClick={clear}
                                    >
                                        Svuota il carrello
                                    </button>
                                </div>

                                <footer className={styles.footer}>
                                    <div className={styles.subtotal}>
                                        <span>Subtotale</span>
                                        <span className={styles.subtotalValue}>
                                            {formatPrice(subtotal)}
                                        </span>
                                    </div>
                                    <p className={styles.note}>
                                        Spedizione e tasse calcolate al checkout.
                                    </p>
                                    <button type="button" className={styles.checkout}>
                                        Procedi all'ordine
                                    </button>
                                </footer>
                            </>
                        )}
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
