import { type FormEvent, useState } from "react";
import { Countdown } from "../../ui/Countdown";
import { Reveal } from "../../ui/Reveal";
import styles from "./Waitlist.module.css";

const LAUNCH_AT = "2026-06-05T18:00:00+02:00";

export function Waitlist() {
    const [status, setStatus] = useState<"idle" | "success">("idle");
    const [email, setEmail] = useState("");

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) return;
        setStatus("success");
    };

    return (
        <section
            id="waitlist"
            data-nav-theme="light"
            className={styles.waitlist}
        >
            <div className={styles.inner}>
                <Reveal className={styles.head}>
                    <span className={styles.kicker}>Lista d'attesa · Drop 01</span>
                    <h2 className={styles.headline}>
                        Tre capi.<br />
                        <em className={styles.accent}>Una sola finestra.</em>
                    </h2>
                    <p className={styles.lead}>
                        Drop 01 sbarca il <strong>5 giugno 2026</strong>, alle 18:00 ora di
                        Roma. Pezzi numerati, una sola produzione. Iscriviti per ricevere il
                        link 24 ore prima del lancio e l'accesso anticipato.
                    </p>
                </Reveal>

                <Reveal delay={120}>
                    <Countdown target={LAUNCH_AT} label="Al lancio" />
                </Reveal>

                <Reveal delay={240} className={styles.formWrap}>
                    {status === "idle" ? (
                        <form className={styles.form} onSubmit={onSubmit} noValidate>
                            <label htmlFor="waitlist-email" className={styles.formLabel}>
                                Indirizzo email
                            </label>
                            <div className={styles.formRow}>
                                <input
                                    id="waitlist-email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    className={styles.input}
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className={styles.submit}>
                                    <span>Entra in lista</span>
                                    <span aria-hidden="true" className={styles.arrow}>
                                        →
                                    </span>
                                </button>
                            </div>
                            <p className={styles.hint}>
                                Nessuna newsletter di troppo. Solo l'avviso al lancio.
                            </p>
                        </form>
                    ) : (
                        <div className={styles.success} role="status">
                            <span className={styles.successMark} aria-hidden="true">
                                ✓
                            </span>
                            <div>
                                <p className={styles.successTitle}>Sei in lista.</p>
                                <p className={styles.successBody}>
                                    Ti scriviamo a <strong>{email}</strong> 24 ore prima del
                                    lancio. A presto.
                                </p>
                            </div>
                        </div>
                    )}
                </Reveal>
            </div>
        </section>
    );
}