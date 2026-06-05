import { Reveal } from "../../ui/Reveal";
import styles from "./Manifesto.module.css";

const PILLARS = [
    {
        index: "01",
        title: "Materia",
        body: "Cotone piqué selezionato, tinto con i colori ufficiali delle federazioni nazionali. Ogni polo è un atto di precisione cromatica prima ancora di essere un capo.",
    },
    {
        index: "02",
        title: "Territorio",
        body: "Sei nazioni, sei identità calcistiche, sei modi di vivere il gioco. Dal Maracanã a Wembley, dall'Olimpico all'Allianz Arena: ogni polo porta un campo sul petto.",
    },
    {
        index: "03",
        title: "Dettaglio",
        body: "Il ricamo sul petto, la patch Bloynkay sul colletto, i bordi cromatici. Tre segnali che raccontano chi sei prima ancora di toccare palla.",
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
                    <span className={styles.kicker}>Manifesto · Drop 02</span>
                    <h2 className={styles.headline}>
                        Sei nazioni. Un solo <em className={styles.accent}>gesto</em>.
                    </h2>
                    <p className={styles.lead}>
                        Drop 02 è una capsule di sei polo: ogni capo porta i colori di una
                        nazione del Mondiale, costruita con la stessa cura artigianale che
                        definisce Bloynkay. Stessa costruzione, sei identità.
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
