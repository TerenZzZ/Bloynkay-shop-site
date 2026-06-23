import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./FilterBar.module.css";

type FilterType = "colore" | "prezzo" | "taglia";

type FilterBarProps = {
    productCount: number;
};

export function FilterBar({ productCount }: FilterBarProps) {
    const [activeFilter, setActiveFilter] = useState<FilterType | null>(null);

    const toggleFilter = (type: FilterType) => {
        setActiveFilter(activeFilter === type ? null : type);
    };

    const productText = productCount === 1 ? "PRODOTTO" : "PRODOTTI";

    return (
        <motion.div
            className={styles.filterBar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className={styles.left}>
                <span className={styles.count}>
                    {productCount} {productText}
                </span>
            </div>

            <div className={styles.right}>
                <button
                    className={`${styles.filterButton} ${
                        activeFilter === "colore" ? styles.active : ""
                    }`}
                    onClick={() => toggleFilter("colore")}
                >
                    <span>COLORE</span>
                    <ChevronDown
                        size={13}
                        className={`${styles.icon} ${
                            activeFilter === "colore" ? styles.iconActive : ""
                        }`}
                    />
                </button>

                <button
                    className={`${styles.filterButton} ${
                        activeFilter === "prezzo" ? styles.active : ""
                    }`}
                    onClick={() => toggleFilter("prezzo")}
                >
                    <span>PREZZO</span>
                    <ChevronDown
                        size={13}
                        className={`${styles.icon} ${
                            activeFilter === "prezzo" ? styles.iconActive : ""
                        }`}
                    />
                </button>

                <button
                    className={`${styles.filterButton} ${
                        activeFilter === "taglia" ? styles.active : ""
                    }`}
                    onClick={() => toggleFilter("taglia")}
                >
                    <span>TAGLIA</span>
                    <ChevronDown
                        size={13}
                        className={`${styles.icon} ${
                            activeFilter === "taglia" ? styles.iconActive : ""
                        }`}
                    />
                </button>
            </div>
        </motion.div>
    );
}
