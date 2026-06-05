import { Button } from "../../ui/Button";
import { Marquee } from "../../ui/Marquee";
import { ScrollIndicator } from "../../ui/ScrollIndicator";
import { useLazyVideoPlay } from "../../../hooks/useLazyVideoPlay";
import heroVideo from "../../../assets/media/hero-drop01.mp4";
import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./Hero.module.css";

const MARQUEE_ITEMS = [
    "Drop 01",
    "Cardigan Series",
    "Panna",
    "Celeste · Colletto Grigio",
    "Nero",
    "Coming June 2026",
    "Limited Release",
];

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    const videoRef = useLazyVideoPlay();

    return (
        <section className={styles.hero} id="top" data-nav-theme="light">
            <div className={styles.media} aria-hidden="true">
                <video
                    ref={videoRef}
                    className={styles.video}
                    src={heroVideo}
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
                <div className={styles.vignette} />
                <div className={styles.grain} />
            </div>

            <div className={styles.frame}>
                <span className={styles.frameTag}>N° 0001 / Bloynkay Atelier</span>
                <span className={styles.frameTag}>Milano · 2026</span>
            </div>

            <div className={styles.lower}>
                <div className={styles.content}>
                    <span className={styles.kicker}>
                        <span className={styles.kickerDot} aria-hidden="true" />
                        Drop 01 — Cardigan Series
                    </span>

                    <h1 className={styles.title}>
                        <span className={styles.titleLead}>Una nuova forma.</span>
                        <em className={styles.titleAccent}>Drop-01</em>
                    </h1>

                    <p className={styles.lead}>
                        Tre colorazioni, un solo gesto. Il cardigan che apre Drop 01
                        ridisegna il dettaglio: colletto a contrasto, taglio asciutto,
                        mano densa.
                    </p>

                    <div className={styles.actions}>
                        <Button onClick={() => scrollToId("drop-01-nero")}>
                            Scopri Drop 01
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={() => scrollToId("waitlist")}
                        >
                            Entra in lista
                        </Button>
                    </div>
                </div>

                <aside className={styles.watermark} aria-label="Bloynkay Atelier">
                    <img
                        src={logoBloynkay}
                        alt="Bloynkay"
                        className={styles.watermarkLogo}
                    />
                    <span className={styles.watermarkCaption}>
                        Atelier · Milano · MMXXVI
                    </span>
                </aside>
            </div>

            <div className={styles.scroll}>
                <ScrollIndicator label="Scorri" />
            </div>

            <div className={styles.marquee}>
                <Marquee items={MARQUEE_ITEMS} />
            </div>
        </section>
    );
}