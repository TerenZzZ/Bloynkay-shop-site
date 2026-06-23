import { motion } from "framer-motion";
import styles from "./ProductCard.module.css";

export type ProductColor = {
    name: string;
    hex: string;
};

export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    colors: ProductColor[];
    sizes: string[];
};

type ProductCardProps = {
    product: Product;
    index?: number;
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
    return (
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
        >
            <div className={styles.imageWrapper}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </div>

            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>€ {product.price.toFixed(2).replace('.', ',')}</p>

                {product.sizes.length > 0 && (
                    <div className={styles.sizes}>
                        {product.sizes.map((size) => (
                            <span key={size} className={styles.size}>
                                {size}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.article>
    );
}
