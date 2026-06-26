import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../../cart";
import styles from "./CartDrawer.module.css";

const PANEL_TRANSITION = { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.42 } as const;

export function CartDrawer() {
    const { isOpen, totalQuantity, closeCart } = useCart();

    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") closeCart(); };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [isOpen, closeCart]);

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

                        <div className={styles.empty}>
                            <span className={styles.preorderBadge}>Preorder</span>
                            <p className={styles.emptyTitle}>Servizio in preorder</p>
                            <p className={styles.emptyText}>
                                Gli ordini saranno disponibili al lancio ufficiale del Drop 02. Resta aggiornato sui nostri canali.
                            </p>
                            <Link to="/store" className={styles.emptyCta} onClick={closeCart}>
                                Esplora lo store
                            </Link>
                        </div>
                    </motion.aside>
                </div>
            )}
        </AnimatePresence>,
        document.body
    );
}
