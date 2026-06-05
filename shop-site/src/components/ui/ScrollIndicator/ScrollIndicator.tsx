import styles from "./ScrollIndicator.module.css";

type ScrollIndicatorProps = {
    label?: string;
};

export function ScrollIndicator({ label = "Scroll" }: ScrollIndicatorProps) {
    return (
        <div className={styles.indicator} aria-hidden="true">
            <span className={styles.label}>{label}</span>
            <span className={styles.line} />
        </div>
    );
}