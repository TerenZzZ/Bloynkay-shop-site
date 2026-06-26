import { type MouseEvent, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../ui/IconButton";
import { useCart } from "../../../cart";
import { scrollToId } from "../../utils";
import logoBloynkay from "../../../assets/images/brand/bloynkay_logo_2.png";
import styles from "./Navbar.module.css";

type NavLink = {
    label: string;
    href: string;
    isRoute?: boolean;
};

const NAV_LINKS: NavLink[] = [
    { label: "Drop", href: "#drop-02-portugal", isRoute: false },
    { label: "Store", href: "/store", isRoute: true },
];

// Nasconde la navbar scrollando verso il basso, la rivela scrollando in su.
function useHideOnScroll(): boolean {
    const [hidden, setHidden] = useState(false);
    const lastY = useRef(0);

    useEffect(() => {
        lastY.current = window.scrollY;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            const delta = y - lastY.current;

            if (Math.abs(delta) > 6) {
                // Resta visibile vicino alla cima; nasconde solo scendendo.
                setHidden(delta > 0 && y > 80);
                lastY.current = y;
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return hidden;
}

function useScrollPast(threshold: number, enabled = true): boolean {
    const [past, setPast] = useState(false);

    useEffect(() => {
        if (!enabled) return;
        const onScroll = () => setPast(window.scrollY > threshold);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [threshold, enabled]);

    return enabled ? past : false;
}

export function Navbar() {
    const hidden = useHideOnScroll();
    const { openCart, totalQuantity } = useCart();
    const location = useLocation();
    const navigate = useNavigate();
    const isStorePage = location.pathname === "/store";
    const storeScrolled = useScrollPast(120, isStorePage);

    const themeClass = isStorePage
        ? [styles.store, storeScrolled ? styles.storeScrolled : ""].filter(Boolean).join(" ")
        : styles.light;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToTop();
        } else {
            navigate("/");
            setTimeout(scrollToTop, 100);
        }
    };

    const onDropClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToId("drop-02-portugal");
        } else {
            navigate("/");
            setTimeout(() => scrollToId("drop-02-portugal"), 100);
        }
    };

    return (
        <header
            className={[styles.navbar, themeClass, hidden ? styles.hidden : ""]
                .filter(Boolean)
                .join(" ")}
        >
            <div className={styles.inner}>
                <nav aria-label="Primary" className={styles.left}>
                    <ul className={styles.list}>
                        {NAV_LINKS.map((link) => {
                            const isActive =
                                link.isRoute && location.pathname === link.href;

                            // Link "Drop" con navigazione intelligente
                            if (link.label === "Drop") {
                                return (
                                    <li key={link.href}>
                                        <a
                                            className={[
                                                styles.link,
                                                isActive ? styles.linkActive : "",
                                            ]
                                                .filter(Boolean)
                                                .join(" ")}
                                            href="/#drop-02-portugal"
                                            onClick={onDropClick}
                                            aria-current={isActive ? "true" : undefined}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            }

                            // Altri link (Store, ecc.)
                            return (
                                <li key={link.href}>
                                    {link.isRoute ? (
                                        <Link
                                            to={link.href}
                                            className={[
                                                styles.link,
                                                isActive ? styles.linkActive : "",
                                            ]
                                                .filter(Boolean)
                                                .join(" ")}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a
                                            className={[
                                                styles.link,
                                                isActive ? styles.linkActive : "",
                                            ]
                                                .filter(Boolean)
                                                .join(" ")}
                                            href={link.href}
                                            aria-current={isActive ? "true" : undefined}
                                        >
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <a
                    href="/"
                    className={styles.logo}
                    aria-label="Bloynkay — home"
                    onClick={onLogoClick}
                >
                    <img
                        src={logoBloynkay}
                        alt="Bloynkay"
                        className={styles.logoImg}
                    />
                </a>

                <div className={styles.right}>
                    <IconButton
                        label="Carrello"
                        className={styles.iconBtn}
                        onClick={openCart}
                        badge={totalQuantity}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 5h3l2 12h11l2-9H7" />
                            <circle cx="9" cy="20" r="1.6" />
                            <circle cx="18" cy="20" r="1.6" />
                        </svg>
                    </IconButton>

                </div>
            </div>
        </header>
    );
}