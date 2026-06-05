import { type MouseEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IconButton } from "../../ui/IconButton";
import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./Navbar.module.css";

type Theme = "light" | "dark" | "medium";

type NavLink = {
    label: string;
    href: string;
    target?: string;
    isRoute?: boolean;
};

const NAV_LINKS: NavLink[] = [
    { label: "Drop", href: "#drop-01-nero", target: "drop-01-nero", isRoute: false },
    { label: "Shop", href: "/shop", isRoute: true },
];

function useNavbarBehavior() {
    const location = useLocation();
    const isShopPage = location.pathname === "/shop";

    // Inizializza il tema corretto fin da subito per la shop page
    const [theme, setTheme] = useState<Theme>(
        isShopPage && window.scrollY <= 200 ? "dark" : "light"
    );
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string>(isShopPage ? "shop" : "top");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 140);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Se siamo sulla pagina shop, gestiamo il tema in base allo scroll
        if (isShopPage) {
            queueMicrotask(() => {
                setActiveId("shop");
            });

            const updateShopTheme = () => {
                const scrollY = window.scrollY;
                // Cambia tema da dark a light in base allo scroll
                if (scrollY > 200) {
                    setTheme("light");
                } else {
                    setTheme("dark");
                }
            };

            updateShopTheme();
            window.addEventListener("scroll", updateShopTheme, { passive: true });
            return () => window.removeEventListener("scroll", updateShopTheme);
        }

        // Altrimenti siamo sulla home: resettiamo e configuriamo l'IntersectionObserver
        queueMicrotask(() => {
            setTheme("light");
            setActiveId("top");
        });

        const sections =
            document.querySelectorAll<HTMLElement>("[data-nav-theme]");
        if (sections.length === 0) return;

        let currentTheme: Theme = "light";
        let themeChangeTimeout: ReturnType<typeof setTimeout> | null = null;

        const obs = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((e) => e.isIntersecting && e.intersectionRatio >= 0.25)
                    .sort(
                        (a, b) =>
                            Math.abs(a.boundingClientRect.top) -
                            Math.abs(b.boundingClientRect.top)
                    );

                const mostVisible = visibleSections[0];

                if (mostVisible) {
                    const t = mostVisible.target.getAttribute("data-nav-theme");
                    if (t === "light" || t === "dark" || t === "medium") {
                        if (t !== currentTheme) {
                            if (themeChangeTimeout) clearTimeout(themeChangeTimeout);

                            themeChangeTimeout = setTimeout(() => {
                                currentTheme = t;
                                requestAnimationFrame(() => setTheme(t));
                            }, 150);
                        }
                    }

                    const id = mostVisible.target.id;
                    if (id) {
                        if (id.startsWith("drop-01")) {
                            setActiveId("drop-01-nero");
                        } else {
                            setActiveId(id);
                        }
                    }
                }
            },
            {
                rootMargin: "-140px 0px -35% 0px",
                threshold: [0, 0.25, 0.5, 0.75]
            }
        );

        sections.forEach((s) => obs.observe(s));
        return () => {
            obs.disconnect();
            if (themeChangeTimeout) clearTimeout(themeChangeTimeout);
        };
    }, [isShopPage]);

    return { theme, scrolled, activeId };
}

export function Navbar() {
    const { theme, scrolled, activeId } = useNavbarBehavior();
    const location = useLocation();
    const navigate = useNavigate();
    const isShopPage = location.pathname === "/shop";
    const themeClass =
        theme === "dark" ? styles.dark :
        theme === "medium" ? styles.medium :
        styles.light;

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToElement = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    const onLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToTop();
        } else {
            navigate("/");
            // Scroll dopo la navigazione
            setTimeout(scrollToTop, 100);
        }
    };

    const onDropClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname === "/") {
            scrollToElement("drop-01-nero");
        } else {
            navigate("/");
            // Scroll dopo la navigazione
            setTimeout(() => scrollToElement("drop-01-nero"), 100);
        }
    };

    return (
        <header
            className={[
                styles.navbar,
                themeClass,
                scrolled ? styles.scrolled : "",
                isShopPage ? styles.shopPage : "",
            ]
                .filter(Boolean)
                .join(" ")}
        >
            <div className={styles.inner}>
                <nav aria-label="Primary" className={styles.left}>
                    <ul className={styles.list}>
                        {NAV_LINKS.map((link) => {
                            const isActive = link.isRoute
                                ? location.pathname === link.href
                                : activeId === link.target;

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
                                            href="/#drop-01-nero"
                                            onClick={onDropClick}
                                            aria-current={isActive ? "true" : undefined}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                );
                            }

                            // Altri link (Shop, ecc.)
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
                        data-action="cart"
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

                    <IconButton
                        label="Account"
                        className={styles.iconBtn}
                        data-action="account"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                        </svg>
                    </IconButton>
                </div>
            </div>
        </header>
    );
}