import { Reveal } from "../../ui/Reveal";
import styles from "./Manifesto.module.css";

const PILLARS = [
    {
        index: "01",
        title: "Materia",
        body: "Cotone organico certificato, filato pettinato gauge 7. Tinto in fiocco con pigmenti reattivi a basso impatto.",
    },
    {
        index: "02",
        title: "Costruzione",
        body: "Lavorato in un piccolo maglificio sull'Appennino bolognese. Raglan morbido, polsini in costa stretta, fondo senza ricciatura.",
    },
    {
        index: "03",
        title: "Dettaglio",
        body: "Un solo bottone al centro, un colore a contrasto, una patch ovale ricamata. Tre segnali ripetuti su tre capi.",
    },
];

export function Manifesto() {
    return (
        <section
            id="manifesto"
            data-nav-theme="light"
            className={styles.manifesto}
        >
            <div className={styles.inner}>
                <Reveal className={styles.head}>
                    <span className={styles.kicker}>Manifesto · Drop 01</span>
                    <h2 className={styles.headline}>
                        Una nuova forma del <em className={styles.accent}>dettaglio</em>.
                    </h2>
                    <p className={styles.lead}>
                        Drop 01 è una capsule di tre cardigan: stessa costruzione, stessa
                        geometria, tre materie. Tre versioni di un solo gesto — un capo che
                        si chiude con un bottone, e si distingue da quel bottone.
                    </p>
                </Reveal>

                <ul className={styles.pillars}>
                    {PILLARS.map((p, i) => (
                        <Reveal as="li" key={p.index} delay={120 * i} className={styles.pillar}>
                            <span className={styles.pillarIndex}>{p.index}</span>
                            <h3 className={styles.pillarTitle}>{p.title}</h3>
                            <p className={styles.pillarBody}>{p.body}</p>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}