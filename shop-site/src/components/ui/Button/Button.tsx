import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "solid" | "ghost";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    children: ReactNode;
};

const variantClass: Record<Variant, string> = {
    solid: styles.solid,
    ghost: styles.ghost,
};

export function Button({
                           variant = "solid",
                           className,
                           children,
                           ...rest
                       }: ButtonProps) {
    return (
        <button
            type="button"
            className={[styles.button, variantClass[variant], className]
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