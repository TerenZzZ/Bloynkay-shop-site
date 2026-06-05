import type { HTMLAttributes } from "react";
import styles from "./SerialStrip.module.css";

type SerialStripProps = HTMLAttributes<HTMLDivElement> & {
    items?: string[];
    align?: "left" | "center" | "right";
};

const defaultItems = [
    "BLY-D01-CDG",
    "2026",
    "003 COLORWAYS",
    "LIMITED ACCESS",
];

export function SerialStrip({
    items = defaultItems,
    align = "center",
    className,
    ...rest
}: SerialStripProps) {
    return (
        <div
            className={[styles.strip, styles[align], className]
                .filter(Boolean)
                .join(" ")}
            role="presentation"
            {...rest}
        >
            <div className={styles.inner}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <span className={styles.text}>{item}</span>
                        {index < items.length - 1 && (
                            <span className={styles.separator} aria-hidden="true">
                                /
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
