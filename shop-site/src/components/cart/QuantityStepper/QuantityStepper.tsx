import styles from "./QuantityStepper.module.css";

type QuantityStepperProps = {
    quantity: number;
    onDecrement: () => void;
    onIncrement: () => void;
    /** Etichetta del prodotto, per gli aria-label. */
    label: string;
    min?: number;
};

export function QuantityStepper({
    quantity,
    onDecrement,
    onIncrement,
    label,
    min = 1,
}: QuantityStepperProps) {
    return (
        <div className={styles.stepper}>
            <button
                type="button"
                className={styles.button}
                onClick={onDecrement}
                disabled={quantity <= min}
                aria-label={`Diminuisci la quantità di ${label}`}
            >
                <span aria-hidden="true">−</span>
            </button>
            <span className={styles.value} aria-live="polite">
                {quantity}
            </span>
            <button
                type="button"
                className={styles.button}
                onClick={onIncrement}
                aria-label={`Aumenta la quantità di ${label}`}
            >
                <span aria-hidden="true">+</span>
            </button>
        </div>
    );
}
