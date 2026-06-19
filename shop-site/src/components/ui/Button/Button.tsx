import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "solid" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    /** CTA semitrasparente che si illumina di oro al passaggio del cursore. */
    glow?: boolean;
    children: ReactNode;
};

const variantClass: Record<Variant, string> = {
    solid: styles.solid,
    ghost: styles.ghost,
};

export function Button({
                           variant = "solid",
                           glow = false,
                           className,
                           children,
                           ...rest
                       }: ButtonProps) {
    return (
        <button
            type="button"
            className={[styles.button, variantClass[variant], glow && styles.glow, className]
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