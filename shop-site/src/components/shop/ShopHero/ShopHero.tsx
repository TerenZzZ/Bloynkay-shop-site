import { motion } from "framer-motion";
import styles from "./ShopHero.module.css";

type ShopHeroProps = {
    backgroundImage: string;
    title?: string;
    subtitle?: string;
};

export function ShopHero({
    backgroundImage,
    title = "SHOP",
    subtitle = "Esplora la collezione completa di Bloynkay Atelier. Ogni capo è pensato per durare, realizzato con materiali selezionati.",
}: ShopHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src={backgroundImage}
                    alt=""
                    className={styles.backgroundImage}
                />
            </div>

            <div className={styles.content}>
                <motion.div
                    className={styles.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>
                </motion.div>
            </div>
        </section>
    );
}
