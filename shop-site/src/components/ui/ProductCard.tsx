import { Link } from 'react-router-dom';
import type { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import styles from './ProductCard.module.css';

interface Props {
    product: Product;
    featured?: boolean;
}

export default function ProductCard({ product, featured = false }: Props) {
    const { addItem } = useCart();

    const variantClass =
        product.variant === 'oro' ? styles.variantOro
            : product.variant === 'argento' ? styles.variantArgento
                : '';

    return (
        <article className={`${styles.card} ${featured ? styles.featured : ''} ${variantClass}`}>
            {product.badge && <span className={styles.badge}>{product.badge}</span>}
            {product.soldOut && <span className={styles.soldOutBadge}>Esaurito</span>}

            <Link to={`/shop/${product.id}`} className={styles.imageWrap}>
                <div className={styles.imagePlaceholder}>
                    {product.variant === 'oro' ? (
                        <div className={styles.coinOro}>
                            <img src="/logo-oval.svg" alt={product.name} />
                        </div>
                    ) : product.variant === 'argento' ? (
                        <div className={styles.coinArgento}>
                            <img src="/logo-oval.svg" alt={product.name} />
                        </div>
                    ) : (
                        <div className={styles.productInitial}>
                            <span>{product.name.charAt(0)}</span>
                        </div>
                    )}
                </div>
                <div className={styles.hoverOverlay}>
                    <span>Scopri →</span>
                </div>
            </Link>

            <div className={styles.info}>
                <div className={styles.meta}>
                    <span className={styles.category}>{product.category}</span>
                    {product.variant && (
                        <span className={`${styles.variant} ${variantClass}`}>{product.variant}</span>
                    )}
                </div>
                <Link to={`/shop/${product.id}`} className={styles.name}>{product.name}</Link>
                <div className={styles.footer}>
                    <span className={styles.price}>€{product.price}</span>
                    {!product.soldOut && (
                        <button
                            className={styles.addBtn}
                            onClick={() => addItem(product)}
                            aria-label={`Aggiungi ${product.name} al carrello`}
                        >
                            +
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
}
