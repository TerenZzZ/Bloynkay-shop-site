import { motion } from "framer-motion";
import styles from "./FilterBar.module.css";

const SIZES = ["XS", "S", "M", "L", "XL"] as const;

type FilterBarProps = {
    productCount: number;
    selectedSize: string | null;
    onSizeChange: (size: string | null) => void;
};

export function FilterBar({ productCount, selectedSize, onSizeChange }: FilterBarProps) {
    const productText = productCount === 1 ? "prodotto" : "prodotti";

    return (
        <motion.div
            className={styles.filterBar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <span className={styles.count}>
                {productCount} {productText}
            </span>

            <div className={styles.sizeGroup}>
                <span className={styles.sizeLabel}>Taglia</span>
                <div className={styles.sizes}>
                    {SIZES.map((s) => (
                        <button
                            key={s}
                            type="button"
                            className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeActive : ""}`}
                            onClick={() => onSizeChange(selectedSize === s ? null : s)}
                            aria-pressed={selectedSize === s}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
