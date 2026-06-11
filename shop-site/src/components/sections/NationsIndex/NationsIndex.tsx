import type { CSSProperties } from "react";
import { Reveal } from "../../ui/Reveal";
import { COLORWAYS } from "../ProductSection/colorways";
import type { Colorway } from "../ProductSection";
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

export function NationsIndex() {
    return (
        <section id="nazioni" data-nav-theme="light" className={styles.section}>
            <div className={styles.inner}>
                <Reveal className={styles.head}>
                    <span className={styles.kicker}>Drop 02 · Sei nazioni</span>
                    <h2 className={styles.headline}>Vai alla tua nazione</h2>
                </Reveal>

                <nav
                    className={styles.nations}
                    aria-label="Naviga le sei nazioni del Drop 02"
                >
                    {NATIONS.map((n) => (
                        <button
                            key={n.colorway}
                            type="button"
                            className={styles.nation}
                            style={
                                { "--n-color": COLORWAYS[n.colorway].bgBase } as CSSProperties
                            }
                            onClick={() => scrollToId(`drop-02-${n.colorway}`)}
                            aria-label={`Vai alla polo ${n.name}`}
                        >
                            <span className={styles.nationBar} aria-hidden="true" />
                            <span className={styles.nationCode}>{n.code}</span>
                            <span className={styles.nationName}>{n.name}</span>
                        </button>
                    ))}
                </nav>
            </div>
        </section>
    );
}
