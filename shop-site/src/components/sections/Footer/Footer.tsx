import { type ReactNode } from "react";
import { Link } from "react-router-dom";
import logoBloynkay from "../../../assets/images/brand/bloynkay_logo_2.png";
import styles from "./Footer.module.css";

type FooterLink = {
    label: string;
    href: string;
    isRoute?: boolean;
};

type LinkColumn = {
    title: string;
    links: FooterLink[];
};

const LINK_COLUMNS: LinkColumn[] = [
    {
        title: "Store",
        links: [
            { label: "Tutte le polo", href: "/store", isRoute: true },
            { label: "Collezioni", href: "#" },
            { label: "Size chart", href: "#" },
            { label: "FAQ", href: "#" },
        ],
    },
    {
        title: "Info",
        links: [
            { label: "Spedizioni", href: "#" },
            { label: "Resi e cambi", href: "#" },
            { label: "Pagamenti", href: "#" },
            { label: "Contatti", href: "#" },
        ],
    },
    {
        title: "Account",
        links: [
            { label: "Il mio account", href: "#" },
            { label: "Ordini", href: "#" },
            { label: "Wishlist", href: "#" },
        ],
    },
];

type Social = {
    label: string;
    href: string;
    icon: ReactNode;
};

const SOCIALS: Social[] = [
    {
        label: "Instagram",
        href: "https://instagram.com",
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
        href: "https://tiktok.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.5 3c.3 2.1 1.6 3.6 3.7 3.9v2.6c-1.3.1-2.5-.3-3.7-1v5.9c0 3.4-2.6 5.8-5.9 5.6-3-.2-5.2-2.7-5-5.7.2-2.6 2.3-4.7 5-4.8.4 0 .8 0 1.2.1v2.7c-.4-.1-.8-.2-1.2-.2-1.4 0-2.5 1.2-2.4 2.6.1 1.3 1.2 2.3 2.5 2.3 1.4 0 2.5-1.1 2.5-2.6V3h3.3z" />
            </svg>
        ),
    },
    {
        label: "X",
        href: "https://x.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.7 3h3.2l-7 8 8.2 10h-6.4l-5-6.5L4.8 21H1.6l7.5-8.6L1.2 3h6.6l4.5 6 5.4-6zm-1.1 16h1.8L7.5 4.8H5.6L16.6 19z" />
            </svg>
        ),
    },
    {
        label: "YouTube",
        href: "https://youtube.com",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
                <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
                <path d="M10 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
            </svg>
        ),
    },
];

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.brand}>
                    <img src={logoBloynkay} alt="Bloynkay" className={styles.logo} />
                    <p className={styles.tagline}>
                        More than a polo.
                        <br />A way of living.
                    </p>
                    <ul className={styles.socialList}>
                        {SOCIALS.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {LINK_COLUMNS.map((column) => (
                    <nav key={column.title} className={styles.linkCol} aria-label={column.title}>
                        <span className={styles.colLabel}>{column.title}</span>
                        <ul className={styles.linkList}>
                            {column.links.map((link) => (
                                <li key={link.label}>
                                    {link.isRoute ? (
                                        <Link to={link.href} className={styles.link}>
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} className={styles.link}>
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}

                <div className={styles.newsletterCol}>
                    <span className={styles.colLabel}>Iscriviti alla newsletter</span>
                    <p className={styles.newsletterDesc}>
                        Ricevi anteprime, drop esclusivi
                        <br />e contenuti riservati.
                    </p>
                </div>
            </div>

            <div className={styles.bottom}>
                <span className={styles.copy}>
                    © 2026 Bloynkay. All rights reserved.
                </span>
                <ul className={styles.legal}>
                    <li>
                        <a href="#" className={styles.legalLink}>
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.legalLink}>
                            Termini e Condizioni
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
