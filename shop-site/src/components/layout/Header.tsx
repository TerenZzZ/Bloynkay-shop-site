import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Header.module.css';

export default function Header() {
    const { totalItems, openCart } = useCart();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <nav className={styles.nav}>
                    <ul className={styles.navLeft}>
                        <li><NavLink to="/shop" className={({ isActive }) => isActive ? styles.active : ''}>Shop</NavLink></li>
                        <li><NavLink to="/drops" className={({ isActive }) => isActive ? styles.active : ''}>Drops</NavLink></li>
                        <li><NavLink to="/kays" className={({ isActive }) => isActive ? styles.active : ''}>Kays</NavLink></li>
                    </ul>

                    <Link to="/" className={styles.logoLink} aria-label="Bloynkay Home">
                        <img
                            src="/logo-oval.svg"
                            alt="bloynkay"
                            className={`${styles.logo} ${isHome && !scrolled ? styles.logoHidden : ''}`}
                        />
                    </Link>

                    <ul className={styles.navRight}>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ''}>About</NavLink></li>
                        <li>
                            <button className={styles.cartBtn} onClick={openCart} aria-label="Carrello">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                                    <line x1="3" y1="6" x2="21" y2="6"/>
                                    <path d="M16 10a4 4 0 01-8 0"/>
                                </svg>
                                {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
                            </button>
                        </li>
                    </ul>

                    <button
                        className={styles.burger}
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Menu"
                        aria-expanded={menuOpen}
                    >
                        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine} />
                        <span className={menuOpen ? styles.burgerLineMid : styles.burgerLine} />
                        <span className={menuOpen ? styles.burgerLineOpen : styles.burgerLine} />
                    </button>
                </nav>
            </header>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
                <nav>
                    <NavLink to="/shop">Shop</NavLink>
                    <NavLink to="/drops">Drops</NavLink>
                    <NavLink to="/kays">Kays</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <button onClick={() => { openCart(); setMenuOpen(false); }}>
                        Carrello {totalItems > 0 && `(${totalItems})`}
                    </button>
                </nav>
            </div>
        </>
    );
}
