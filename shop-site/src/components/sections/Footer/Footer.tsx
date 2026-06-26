import { type FormEvent, type MouseEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scrollToId } from "../../utils";
import { SizeChartModal } from "../ProductSection/modals/SizeChartModal";
import logoBloynkay from "../../../assets/images/brand/bloynkay_logo_2.png";
import styles from "./Footer.module.css";

const SOCIALS = [
    {
        label: "Instagram",
        href: "https://www.instagram.com/bloynkay/",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
        ),
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/@bloynkay7?_r=1&_t=ZN-97Wt6hpnY9O",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.9v2.6c-1.3.1-2.5-.3-3.7-1v5.9c0 3.4-2.6 5.8-5.9 5.6-3-.2-5.2-2.7-5-5.7.2-2.6 2.3-4.7 5-4.8.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1.2-2.4 2.6.1 1.3 1.2 2.3 2.5 2.3 1.4 0 2.5-1.1 2.5-2.6V3h3.3z" />
            </svg>
        ),
    },
];

export function Footer() {
    const location = useLocation();
    const navigate = useNavigate();
    const [sizeChartOpen, setSizeChartOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (email.trim()) setSubmitted(true);
    }

    const onTutteLePolo = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToId("drop-02-portugal");
        } else {
            navigate("/");
            setTimeout(() => scrollToId("drop-02-portugal"), 100);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>

                {/* Brand */}
                <div className={styles.brand}>
                    <img src={logoBloynkay} alt="Bloynkay" className={styles.logo} />
                    <p className={styles.tagline}>Six nations. One drop.</p>
                    <ul className={styles.socials}>
                        {SOCIALS.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    className={styles.socialBtn}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {s.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Store */}
                <nav className={styles.col} aria-label="Store">
                    <span className={styles.colTitle}>Store</span>
                    <ul className={styles.list}>
                        <li>
                            <a href="/#drop-02-portugal" className={styles.link} onClick={onTutteLePolo}>
                                Tutte le polo
                            </a>
                        </li>
                        <li>
                            <Link to="/store" className={styles.link}>Drop 02</Link>
                        </li>
                        <li>
                            <button
                                type="button"
                                className={styles.link}
                                onClick={() => setSizeChartOpen(true)}
                            >
                                Size chart
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Contatti */}
                <div className={styles.col}>
                    <span className={styles.colTitle}>Contatti</span>
                    <ul className={styles.list}>
                        <li>
                            <a href="mailto:bloynkay@gmail.com" className={styles.link}>
                                bloynkay@gmail.com
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/bloynkay/" className={styles.link} target="_blank" rel="noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@bloynkay7?_r=1&_t=ZN-97Wt6hpnY9O" className={styles.link} target="_blank" rel="noreferrer">
                                TikTok
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Informazioni */}
                <div className={styles.col}>
                    <span className={styles.colTitle}>Informazioni</span>
                    <ul className={styles.list}>
                        <li><a href="#" className={styles.link}>Spedizioni</a></li>
                        <li><a href="#" className={styles.link}>Resi e cambi</a></li>
                        <li><a href="#" className={styles.link}>Privacy Policy</a></li>
                        <li><a href="#" className={styles.link}>Termini e Condizioni</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className={styles.newsletterCol}>
                    <span className={styles.colTitle}>Newsletter</span>
                    <p className={styles.newsletterSub}>
                        Resta aggiornato sui drop e le novità Bloynkay.
                    </p>
                    {submitted ? (
                        <p className={styles.newsletterConfirm}>Grazie — ti scriveremo presto.</p>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit} noValidate>
                            <input
                                type="email"
                                className={styles.input}
                                placeholder="La tua email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Indirizzo email"
                            />
                            <button type="submit" className={styles.btn}>Iscriviti</button>
                        </form>
                    )}
                </div>

            </div>

            <div className={styles.bar}>
                <span>© 2026 Bloynkay. All rights reserved.</span>
            </div>

            {sizeChartOpen && (
                <SizeChartModal
                    name="Polo"
                    colorway="portugal"
                    onClose={() => setSizeChartOpen(false)}
                />
            )}
        </footer>
    );
}
