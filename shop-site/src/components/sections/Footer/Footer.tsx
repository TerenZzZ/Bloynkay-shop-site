import { type FormEvent, useState } from "react";
import styles from "./Footer.module.css";

export function Footer() {
    const [status, setStatus] = useState<"idle" | "success">("idle");
    const [email, setEmail] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;
        setStatus("success");
    };

    return (
        <footer className={styles.footer} data-nav-theme="light">
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <span className={styles.logo}>BLOYNKAY</span>
                    <p className={styles.tagline}>
                        Una nuova forma del dettaglio. Drop 01 — 5 Giugno 2026.
                    </p>
                    <span className={styles.location}>Milano · Atelier</span>
                </div>

                <div className={styles.newsletterCol}>
                    <span className={styles.colLabel}>Newsletter</span>
                    {status === "idle" ? (
                        <form className={styles.newsletter} onSubmit={onSubmit} noValidate>
                            <div className={styles.newsletterRow}>
                                <input
                                    id="footer-email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className={styles.input}
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className={styles.submit}>
                                    Iscriviti
                                </button>
                            </div>
                            <p className={styles.hint}>
                                Drop, dietro le quinte, niente di più.
                            </p>
                        </form>
                    ) : (
                        <p className={styles.success} role="status">
                            <span className={styles.successMark} aria-hidden="true">
                                ✓
                            </span>
                            Iscrizione confermata. Ci sentiamo presto.
                        </p>
                    )}
                </div>

                <div className={styles.social}>
                    <span className={styles.colLabel}>Seguici</span>
                    <ul className={styles.socialList}>
                        <li>
                            <a href="#" className={styles.socialLink}>
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.socialLink}>
                                TikTok
                            </a>
                        </li>
                        <li>
                            <a href="mailto:hello@bloynkay.com" className={styles.socialLink}>
                                hello@bloynkay.com
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>
                <span>© 2026 Bloynkay®. Tutti i diritti riservati.</span>
                <ul className={styles.legal}>
                    <li>
                        <a href="#" className={styles.legalLink}>
                            Termini
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.legalLink}>
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.legalLink}>
                            Spedizioni & Resi
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}