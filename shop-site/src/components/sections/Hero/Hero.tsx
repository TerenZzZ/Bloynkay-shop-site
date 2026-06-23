import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/Button";
import { scrollToId } from "../../utils";
import {
    Marquee,
    BRAND_MARQUEE_ITEMS,
    BRAND_MARQUEE_DOT_COLORS,
} from "../../ui/Marquee";
import heroVideo from "../../../assets/videos/hero/hero-drop02.mp4";
import logoBloynkay from "../../../assets/images/brand/bloykay_logo_1.svg";
import styles from "./Hero.module.css";

/* TODO: data di lancio da confermare con l'utente. */
const LAUNCH_LABEL = "Prossimamente";

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
                        <Button glow onClick={() => scrollToId("drop-02-brazil")}>
                            Scopri Drop 02
                        </Button>
                        <Button glow variant="ghost" onClick={() => navigate("/store")}>
                            Vedi lo store
                        </Button>
                    </div>

                    <span className={styles.launch}>
                        <span className={styles.launchDot} aria-hidden="true" />
                        Lancio · {LAUNCH_LABEL}
                    </span>
                </div>
            </div>

            <div className={styles.marquee}>
                <Marquee
                    items={BRAND_MARQUEE_ITEMS}
                    dotColors={BRAND_MARQUEE_DOT_COLORS}
                />
            </div>
        </section>
    );
}
