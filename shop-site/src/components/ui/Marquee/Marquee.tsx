import styles from "./Marquee.module.css";

type MarqueeProps = {
    items: string[];
    speed?: number;
};

export function Marquee({ items, speed = 38 }: MarqueeProps) {
    const loop = [...items, ...items];

    return (
        <div
            className={styles.marquee}
            role="presentation"
            style={{ ["--marquee-duration" as string]: `${speed}s` }}
        >
            <div className={styles.track}>
                {loop.map((label, i) => (
                    <span className={styles.item} key={`${label}-${i}`}>
            <span className={styles.label}>{label}</span>
            <span aria-hidden="true" className={styles.dot} />
          </span>
                ))}
            </div>
        </div>
    );
}