import styles from './About.module.css';

export default function About() {
    return (
        <main className={styles.page}>
            {/* Statement hero */}
            <section className={styles.statement}>
                <div className={styles.statementInner}>
                    <img src="/logo-b.svg" alt="B" className={styles.logoB} />
                    <div className={styles.statementText}>
                        <span className={styles.eyebrow}>About · Bloynkay</span>
                        <h1 className={styles.statementTitle}>
                            Take part <br />or stay out.
                        </h1>
                    </div>
                </div>
            </section>

            {/* Brand story */}
            <section className={styles.story}>
                <div className={styles.storyInner}>
                    <div className={styles.storyLeft}>
                        <span className={styles.sectionLabel}>Il brand</span>
                    </div>
                    <div className={styles.storyRight}>
                        <p className={styles.storyLead}>
                            Bloynkay nasce da un'idea semplice: creare qualcosa che si senta, che lasci il segno,
                            che faccia parte di qualcosa di più grande.
                        </p>
                        <p className={styles.storyBody}>
                            Non è solo un brand di abbigliamento. È un sistema, un linguaggio condiviso tra chi sceglie
                            di partecipare attivamente — non da spettatore.
                        </p>
                        <p className={styles.storyBody}>
                            Ogni pezzo Bloynkay è pensato per chi prende parte. Per chi non si accontenta di guardare.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className={styles.values}>
                <div className={styles.valuesInner}>
                    <span className={styles.sectionLabel}>Principi</span>
                    <div className={styles.valuesGrid}>
                        {[
                            { number: '01', title: 'Partecipazione', body: 'Il vantaggio appartiene a chi prende parte. Ogni prodotto è un accesso, non solo un acquisto.' },
                            { number: '02', title: 'Limitato per scelta', body: 'Nessuna replica infinita. Quantità controllate perché il valore si preserva.' },
                            { number: '03', title: 'Qualità reale', body: 'Materiali scelti, dettagli curati. Niente di superfluo, niente di trascurato.' },
                            { number: '04', title: 'Community', body: 'Bloynkay è fatto di persone. Il brand cresce con chi lo porta, non nonostante.' },
                        ].map((v) => (
                            <div key={v.number} className={styles.valueItem}>
                                <span className={styles.valueNumber}>{v.number}</span>
                                <h3 className={styles.valueTitle}>{v.title}</h3>
                                <p className={styles.valueBody}>{v.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kays info */}
            <section className={styles.kaysInfo}>
                <div className={styles.kaysInfoInner}>
                    <div className={styles.kaysInfoGrid}>
                        <div>
                            <span className={styles.sectionLabel}>I Kays</span>
                            <h2 className={styles.kaysInfoTitle}>
                                Un coin. <br />Un vantaggio attivo.
                            </h2>
                        </div>
                        <div className={styles.kaysInfoText}>
                            <p>
                                I Kays sono il primo oggetto fisico del sistema Bloynkay.
                                Metal coin bipartiti — fronte e retro — in edizione Genesis Limited EST 2026.
                            </p>
                            <p>
                                Ogni Kay è più di un oggetto collezionabile: è un accesso,
                                una dichiarazione di appartenenza alla prima wave del brand.
                            </p>
                            <a href="/kays" className={styles.kaysInfoLink}>Scopri i Kays →</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo showcase */}
            <section className={styles.logoShowcase}>
                <div className={styles.logoShowcaseInner}>
                    <span className={styles.sectionLabel}>Identità visiva</span>
                    <div className={styles.logoGrid}>
                        <div className={styles.logoItem}>
                            <img src="/logo-oval.svg" alt="Logo Bloynkay ovale" />
                            <span>Logo principale</span>
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/logo-bubble.svg" alt="Logo Bloynkay bubble" />
                            <span>Logo alternativo</span>
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/logo-b.svg" alt="Monogramma B" />
                            <span>Monogramma</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
