import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <img src="/logo-oval.svg" alt="bloynkay" className={styles.logo} />
                        <p className={styles.tagline}>Take part or stay out.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.col}>
                            <h4>Esplora</h4>
                            <Link to="/shop">Shop</Link>
                            <Link to="/drops">Drops</Link>
                            <Link to="/kays">Kays</Link>
                            <Link to="/about">About</Link>
                        </div>
                        <div className={styles.col}>
                            <h4>Supporto</h4>
                            <a href="#">Spedizioni</a>
                            <a href="#">Resi</a>
                            <a href="#">FAQ</a>
                            <a href="#">Contatti</a>
                        </div>
                        <div className={styles.col}>
                            <h4>Seguici</h4>
                            <a href="https://www.tiktok.com/@bloynkay7" target="_blank" rel="noreferrer">TikTok</a>
                            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <span>© 2026 Bloynkay. Tutti i diritti riservati.</span>
                    <div className={styles.legal}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Termini di servizio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
