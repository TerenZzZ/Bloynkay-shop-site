import { Button } from "../../ui/Button";
import { Marquee } from "../../ui/Marquee";
import heroVideo from "../../../assets/videos/hero/hero-drop02.mp4";
import logoBloynkay from "../../../assets/images/brand/bloynkay-logo.png";
import styles from "./Hero.module.css";

const MARQUEE_ITEMS = [
    "Drop 02",
    "World Cup Edition",
    "Brasile · Inghilterra",
    "Francia · Germania",
    "Italia · Portogallo",
    "Giugno 2026",
    "Limited Release",
];

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    return (
        <section className={styles.hero} id="top" data-nav-theme="light">
            <div className={styles.media} aria-hidden="true">
                <video
                    className={styles.heroVideo}
                    src={heroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    disablePictureInPicture
                />
                <div className={styles.vignette} />
                <div className={styles.grain} />
            </div>

            <div className={styles.frame}>
                <span className={styles.frameTag}>N° 0002 / Bloynkay Atelier</span>
                <span className={styles.frameTag}>Milano · 2026</span>
            </div>

            <div className={styles.lower}>
                <div className={styles.content}>
                    <span className={styles.kicker}>
                        <span className={styles.kickerDot} aria-hidden="true" />
                        Drop 02 — World Cup Edition
                    </span>

                    <h1 className={styles.title}>
                        <span className={styles.titleLead}>Il calcio che ami.</span>
                        <em className={styles.titleAccent}>Drop-02</em>
                    </h1>

                    <p className={styles.lead}>
                        Sei nazionali, sei polo. I colori che hai tifo sul petto,
                        costruiti con la cura artigianale di Bloynkay. Un drop per
                        chi vive il calcio come una questione di stile.
                    </p>

                    <div className={styles.actions}>
                        <Button onClick={() => scrollToId("drop-02-brazil")}>
                            Scopri Drop 02
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

            <div className={styles.marquee}>
                <Marquee items={MARQUEE_ITEMS} />
            </div>
        </section>
    );
}