import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./RunningLightButton.module.css";

export type RunningLightColorway =
    | "brazil"
    | "england"
    | "france"
    | "germany"
    | "italy"
    | "portugal";

type RunningLightButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    colorway: RunningLightColorway;
    children: ReactNode;
};

const colorwayClass: Record<RunningLightColorway, string> = {
    brazil: styles.brazil,
    england: styles.england,
    france: styles.france,
    germany: styles.germany,
    italy: styles.italy,
    portugal: styles.portugal,
};

export function RunningLightButton({
    colorway,
    className,
    children,
    type = "button",
    ...rest
}: RunningLightButtonProps) {
    return (
        <button
            type={type}
            className={[styles.button, colorwayClass[colorway], className]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        >
            <span className={styles.label}>{children}</span>
            <span aria-hidden="true" className={styles.arrow}>
                →
            </span>
        </button>
    );
}
