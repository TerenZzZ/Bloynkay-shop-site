import type { HTMLAttributes } from "react";
import styles from "./SpecPill.module.css";

type SpecPillProps = HTMLAttributes<HTMLDivElement> & {
    label?: string;
    value: string;
    variant?: "default" | "highlight";
};

export function SpecPill({
    label,
    value,
    variant = "default",
    className,
    ...rest
}: SpecPillProps) {
    return (
        <div
            className={[styles.pill, styles[variant], className]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        >
            {label && <span className={styles.label}>{label}</span>}
            <span className={styles.value}>{value}</span>
        </div>
    );
}

// Container per lista di pill
type SpecListProps = HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

export function SpecList({ children, className, ...rest }: SpecListProps) {
    return (
        <div
            className={[styles.list, className].filter(Boolean).join(" ")}
            {...rest}
        >
            {children}
        </div>
    );
}
