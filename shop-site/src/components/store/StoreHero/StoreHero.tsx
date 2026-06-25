import { motion } from "framer-motion";
import styles from "./StoreHero.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

export function StoreHero() {
    return (
        <section className={styles.hero}>
            <motion.div
                className={styles.text}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease }}
            >
                <h1 className={styles.title}>Drop-02</h1>

                <div className={styles.lightRow} aria-hidden="true">
                    <motion.span
                        className={styles.lineLeft}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.55, ease }}
                    />
                    <motion.span
                        className={styles.orb}
                        initial={{ opacity: 0, scale: 0.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.1, ease }}
                    />
                    <motion.span
                        className={styles.lineRight}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.55, ease }}
                    />
                </div>

                <motion.h2
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 1.2, ease }}
                >
                    World Cup Edition
                </motion.h2>
            </motion.div>
        </section>
    );
}
