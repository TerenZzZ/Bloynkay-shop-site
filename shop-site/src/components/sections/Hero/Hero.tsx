import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { Marquee } from "../../ui/Marquee";
import heroVideo from "../../../assets/videos/hero/hero-drop02.mp4";
import logoBloynkay from "../../../assets/images/brand/bloykay_logo.svg";
import styles from "./Hero.module.css";

/* TODO: data di lancio da confermare con l'utente. */
const LAUNCH_LABEL = "Prossimamente";

const MARQUEE_ITEMS = [
    "Drop 02",
    "Sei nazioni · Sei polo",
    "Brasile · Inghilterra",
    "Francia · Germania",
    "Italia · Portogallo",
    "Limited Release",
];

function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Hero() {
    const navigate = useNavigate();

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

            <div className={styles.content}>
                <img src={logoBloynkay} alt="Bloynkay" className={styles.logo} />

                <div className={styles.cta}>
                    <span className={styles.divider} aria-hidden="true" />

                    <div className={styles.actions}>
                        <Button onClick={() => scrollToId("drop-02-brazil")}>
                            Scopri Drop 02
                        </Button>
                        <Button variant="ghost" onClick={() => navigate("/shop")}>
                            Vedi lo shop
                        </Button>
                    </div>

                    <span className={styles.launch}>
                        <span className={styles.launchDot} aria-hidden="true" />
                        Lancio · {LAUNCH_LABEL}
                    </span>
                </div>
            </div>

            <div className={styles.marquee}>
                <Marquee items={MARQUEE_ITEMS} />
            </div>
        </section>
    );
}
