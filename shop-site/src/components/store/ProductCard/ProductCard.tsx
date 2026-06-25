import { useState } from "react";
import { motion } from "framer-motion";
import { formatPrice } from "../../../lib/money";
import {
    ProductGalleryModal,
    POLO_GALLERY,
    type Colorway,
    type GalleryModel,
} from "../../sections/ProductSection";
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
    colorway: Colorway;
    colors: ProductColor[];
    sizes: string[];
};

type ProductCardProps = {
    product: Product;
    index?: number;
    /** Catalogo completo per lo switch fra modelli nel pannello acquisto. */
    catalog?: GalleryModel[];
};

export function ProductCard({ product, index = 0, catalog }: ProductCardProps) {
    const [galleryOpen, setGalleryOpen] = useState(false);
    const images = POLO_GALLERY[product.colorway];

    return (
        <motion.article
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
        >
            <button
                type="button"
                className={styles.imageWrapper}
                onClick={() => setGalleryOpen(true)}
                aria-label={`Apri la gallery di ${product.name}`}
            >
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />
            </button>

            <div className={styles.content}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.price}>{formatPrice(product.price)}</p>

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

            {galleryOpen && (
                <ProductGalleryModal
                    name={product.name}
                    colorway={product.colorway}
                    images={images}
                    onClose={() => setGalleryOpen(false)}
                    purchase={{
                        id: product.id,
                        price: product.price,
                        image: product.image,
                        sizes: product.sizes,
                        colors: product.colors,
                    }}
                    models={catalog}
                />
            )}
        </motion.article>
    );
}
