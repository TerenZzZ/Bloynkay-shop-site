import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProductById, products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ui/ProductCard';
import styles from './ProductDetail.module.css';

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const product = getProductById(id ?? '');
    const { addItem } = useCart();
    const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
    const [added, setAdded] = useState(false);

    if (!product) return <Navigate to="/shop" replace />;

    const related = products
        .filter((p) => p.id !== product.id && p.category === product.category)
        .slice(0, 3);
    const needsSize = product.category === 'apparel';

    const handleAdd = () => {
        if (needsSize && !selectedSize) return;
        addItem(product, selectedSize);
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
        <main className={styles.page}>
            <div className={styles.breadcrumb}>
                <Link to="/shop">Shop</Link>
                <span>/</span>
                <span>{product.name}</span>
            </div>

            <div className={styles.layout}>
                {/* Image panel */}
                <div className={styles.imageSection}>
                    <div className={styles.imageWrap}>
                        {product.variant === 'oro' ? (
                            <div className={styles.coinVisualOro}>
                                <img src="/logo-oval.svg" alt={product.name} />
                            </div>
                        ) : product.variant === 'argento' ? (
                            <div className={styles.coinVisualArgento}>
                                <img src="/logo-oval.svg" alt={product.name} />
                            </div>
                        ) : (
                            <div className={styles.productPlaceholder}>
                                <span>{product.name.charAt(0)}</span>
                            </div>
                        )}
                    </div>
                    {product.drop && (
                        <div className={styles.dropTag}>
                            <span>Parte del {product.drop === 'drop-01' ? 'KAYS DROP 01' : product.drop.toUpperCase()}</span>
                            <Link to="/drops">Vai al drop →</Link>
                        </div>
                    )}
                </div>

                {/* Info panel */}
                <div className={styles.infoSection}>
                    <div className={styles.infoTop}>
                        {product.badge && <span className={styles.badge}>{product.badge}</span>}
                        <div className={styles.meta}>
                            <span className={styles.category}>{product.category}</span>
                            {product.variant && (
                                <span className={`${styles.variant} ${product.variant === 'oro' ? styles.oro : styles.argento}`}>
                  {product.variant}
                </span>
                            )}
                        </div>
                    </div>

                    <h1 className={styles.name}>{product.name}</h1>
                    <p className={styles.price}>€{product.price}</p>
                    <p className={styles.description}>{product.description}</p>

                    {needsSize && (
                        <div className={styles.sizeSection}>
                            <div className={styles.sizeLabelRow}>
                                <span className={styles.sizeLabel}>Taglia</span>
                                {!selectedSize && <span className={styles.sizeHint}>Seleziona una taglia</span>}
                            </div>
                            <div className={styles.sizeGrid}>
                                {SIZES.map((s) => (
                                    <button
                                        key={s}
                                        className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeBtnActive : ''}`}
                                        onClick={() => setSelectedSize(s)}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <button
                        className={`${styles.addBtn} ${added ? styles.addBtnAdded : ''} ${needsSize && !selectedSize ? styles.addBtnDisabled : ''}`}
                        onClick={handleAdd}
                    >
                        {added ? 'Aggiunto ✓' : 'Aggiungi al carrello'}
                    </button>

                    {product.details && (
                        <div className={styles.details}>
                            <h3 className={styles.detailsTitle}>Dettagli prodotto</h3>
                            <ul className={styles.detailsList}>
                                {product.details.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {related.length > 0 && (
                <section className={styles.related}>
                    <div className={styles.relatedInner}>
                        <h2 className={styles.relatedTitle}>Potrebbe interessarti</h2>
                        <div className={styles.relatedGrid}>
                            {related.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}
