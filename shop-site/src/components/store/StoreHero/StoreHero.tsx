import { motion } from "framer-motion";
import styles from "./StoreHero.module.css";

type StoreHeroProps = {
    title?: string;
    subtitle?: string;
};

export function StoreHero({
    title = "STORE",
    subtitle = "Esplora la collezione completa di Bloynkay Atelier. Ogni capo è pensato per durare, realizzato con materiali selezionati.",
}: StoreHeroProps) {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </motion.div>
        </section>
    );
}
