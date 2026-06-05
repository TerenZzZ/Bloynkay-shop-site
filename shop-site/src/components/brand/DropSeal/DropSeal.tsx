import type { HTMLAttributes } from "react";
import styles from "./DropSeal.module.css";

type Tone = "light" | "dark";

type DropSealProps = HTMLAttributes<HTMLDivElement> & {
    tone?: Tone;
    variant?: "circle" | "oval";
    size?: "sm" | "md" | "lg";
};

const toneClass: Record<Tone, string> = {
    light: styles.light,
    dark: styles.dark,
};

export function DropSeal({
    tone = "dark",
    variant = "circle",
    size = "md",
    className,
    ...rest
}: DropSealProps) {
    return (
        <div
            className={[
                styles.seal,
                toneClass[tone],
                styles[variant],
                styles[size],
                className,
            ]
                .filter(Boolean)
                .join(" ")}
            aria-hidden="true"
            {...rest}
        >
            <div className={styles.ring}>
                <div className={styles.content}>
                    <span className={styles.brand}>BLOYNKAY</span>
                    <span className={styles.divider}>/</span>
                    <span className={styles.drop}>DROP 01</span>
                </div>
            </div>
        </div>
    );
}
