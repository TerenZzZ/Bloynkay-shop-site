import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./IconButton.module.css";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    badge?: number;
    children: ReactNode;
};

export function IconButton({
                               label,
                               badge,
                               className,
                               children,
                               ...rest
                           }: Props) {
    return (
        <button
            type="button"
            aria-label={label}
            className={[styles.icon, className].filter(Boolean).join(" ")}
            {...rest}
        >
            {children}
            {typeof badge === "number" && badge > 0 && (
                <span className={styles.badge}>{badge}</span>
            )}
        </button>
    );
}