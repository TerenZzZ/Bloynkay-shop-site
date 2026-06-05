import type { ReactNode, HTMLAttributes } from "react";
import styles from "./SectionHeader.module.css";

type SectionHeaderProps = HTMLAttributes<HTMLDivElement> & {
    kicker?: string;
    title: ReactNode;
    description?: string;
    align?: "left" | "center";
};

export function SectionHeader({
    kicker,
    title,
    description,
    align = "center",
    className,
    ...rest
}: SectionHeaderProps) {
    return (
        <header
            className={[styles.header, styles[align], className]
                .filter(Boolean)
                .join(" ")}
            {...rest}
        >
            {kicker && (
                <div className={styles.kicker} aria-label="Section category">
                    {kicker}
                </div>
            )}
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
        </header>
    );
}
