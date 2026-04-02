import { useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQty, totalPrice, totalItems } = useCart();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <>
            <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ''}`} onClick={closeCart} />
            <aside className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ''}`}>
                <div className={styles.header}>
                    <span className={styles.title}>Carrello {totalItems > 0 && `(${totalItems})`}</span>
                    <button className={styles.closeBtn} onClick={closeCart} aria-label="Chiudi carrello">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                </div>

                <div className={styles.items}>
                    {items.length === 0 ? (
                        <div className={styles.empty}>
                            <p>Il tuo carrello è vuoto.</p>
                            <button className={styles.continueShopping} onClick={closeCart}>Continua lo shopping →</button>
                        </div>
                    ) : (
                        items.map((item) => (
                            <div key={`${item.product.id}-${item.size}`} className={styles.item}>
                                <div className={styles.itemImage}>
                                    <div className={styles.itemImagePlaceholder}>
                                        <span>{item.product.name.charAt(0)}</span>
                                    </div>
                                </div>
                                <div className={styles.itemInfo}>
                                    <span className={styles.itemName}>{item.product.name}</span>
                                    {item.size && <span className={styles.itemSize}>Taglia: {item.size}</span>}
                                    <span className={styles.itemPrice}>€{item.product.price}</span>
                                </div>
                                <div className={styles.itemControls}>
                                    <div className={styles.qty}>
                                        <button onClick={() => updateQty(item.product.id, item.quantity - 1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQty(item.product.id, item.quantity + 1)}>+</button>
                                    </div>
                                    <button className={styles.removeBtn} onClick={() => removeItem(item.product.id)}>
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <polyline points="3 6 5 6 21 6"/>
                                            <path d="M19 6l-1 14H6L5 6"/>
                                            <path d="M10 11v6M14 11v6"/>
                                            <path d="M9 6V4h6v2"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {items.length > 0 && (
                    <div className={styles.footer}>
                        <div className={styles.subtotal}>
                            <span>Subtotale</span>
                            <span className={styles.subtotalPrice}>€{totalPrice.toFixed(2)}</span>
                        </div>
                        <p className={styles.shippingNote}>Spedizione calcolata al checkout</p>
                        <button className={styles.checkoutBtn}>Procedi al checkout →</button>
                    </div>
                )}
            </aside>
        </>
    );
}