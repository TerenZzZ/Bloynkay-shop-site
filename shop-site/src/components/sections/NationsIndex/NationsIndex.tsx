import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../ui/Reveal";
import { COLORWAYS } from "../ProductSection/colorways";
import type { Colorway } from "../ProductSection";
import stadiumBg from "../../../assets/images/backgrounds/stadio_finale_01.png";
import styles from "./NationsIndex.module.css";

type Nation = { code: string; name: string; colorway: Colorway };

/* L'ordine segue ProductsBlock. */
const NATIONS: Nation[] = [
    { code: "BRA", name: "Brasile", colorway: "brazil" },
    { code: "ENG", name: "Inghilterra", colorway: "england" },
    { code: "FRA", name: "Francia", colorway: "france" },
    { code: "GER", name: "Germania", colorway: "germany" },
    { code: "ITA", name: "Italia", colorway: "italy" },
    { code: "POR", name: "Portogallo", colorway: "portugal" },
];

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* Tile nazione a dimensione fissa: codice e nome sempre visibili. Il
   colore della nazionale è iniettato come --n-color e usato dall'effetto
   hover (bordo tracciato + scia di luce), gestito interamente in CSS. */
function NationTile({ nation }: { nation: Nation }) {
    const c = COLORWAYS[nation.colorway];
    return (
        <button
            type="button"
            className={styles.tile}
            style={{ "--n-color": c.bgBase } as CSSProperties}
            onClick={() => scrollToId(`drop-02-${nation.colorway}`)}
            aria-label={`Vai alla polo ${nation.name}`}
        >
            <span className={styles.shine} aria-hidden="true" />
            <span className={styles.tileBody}>
                <span className={styles.code}>{nation.code}</span>
                <span className={styles.name}>{nation.name}</span>
            </span>
            <span className={styles.go} aria-hidden="true">
                →
            </span>
        </button>
    );
}

export function NationsIndex() {
    return (
        <section id="nazioni" data-nav-theme="light" className={styles.section}>
            <div className={styles.bg} aria-hidden="true">
                <img className={styles.bgImg} src={stadiumBg} alt="" loading="lazy" />
                <div className={styles.bgOverlay} />
            </div>

            <div className={styles.inner}>
                <Reveal className={styles.head}>
                    <span className={styles.kicker}>
                        <span className={styles.kickerRule} aria-hidden="true" />
                        Drop 02 · World Cup Edition
                    </span>
                    <h2 className={styles.headline}>Scegli la tua Nazionale</h2>
                    <p className={styles.sub}>
                        Sei nazioni, una sola edizione limitata. Trova i tuoi colori.
                    </p>
                </Reveal>

                <nav
                    className={styles.grid}
                    aria-label="Naviga le sei nazioni del Drop 02"
                >
                    {NATIONS.map((n) => (
                        <NationTile key={n.colorway} nation={n} />
                    ))}
                </nav>

                <Reveal className={styles.cta}>
                    <Link to="/shop" className={styles.ctaButton}>
                        <span className={styles.ctaLabel}>Acquista ora</span>
                        <span className={styles.ctaArrow} aria-hidden="true">
                            →
                        </span>
                    </Link>
                    <span className={styles.ctaNote}>
                        Spedizione gratuita · Edizione limitata Drop 02
                    </span>
                </Reveal>
            </div>
        </section>
    );
}
