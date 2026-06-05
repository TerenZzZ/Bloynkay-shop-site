import { useEffect, useState } from "react";
import styles from "./Countdown.module.css";

type CountdownProps = {
    target: string;
    label?: string;
};

type Parts = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    done: boolean;
};

function diffParts(targetMs: number): Parts {
    const now = Date.now();
    const ms = targetMs - now;
    if (ms <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    }
    const days = Math.floor(ms / 86400000);
    const hours = Math.floor((ms % 86400000) / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return { days, hours, minutes, seconds, done: false };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ target, label = "Al lancio" }: CountdownProps) {
    const targetMs = new Date(target).getTime();
    const [parts, setParts] = useState<Parts>(() => diffParts(targetMs));

    useEffect(() => {
        const id = window.setInterval(() => {
            setParts(diffParts(targetMs));
        }, 1000);
        return () => window.clearInterval(id);
    }, [targetMs]);

    const cells: Array<{ value: string; label: string }> = [
        { value: pad(parts.days), label: "Giorni" },
        { value: pad(parts.hours), label: "Ore" },
        { value: pad(parts.minutes), label: "Minuti" },
        { value: pad(parts.seconds), label: "Secondi" },
    ];

    return (
        <div className={styles.countdown} role="timer" aria-live="polite">
            <span className={styles.kicker}>{parts.done ? "Drop 01 è live" : label}</span>
            <div className={styles.grid}>
                {cells.map((c) => (
                    <div className={styles.cell} key={c.label}>
                        <span className={styles.value}>{c.value}</span>
                        <span className={styles.cellLabel}>{c.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}