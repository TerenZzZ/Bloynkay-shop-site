import { useEffect, useRef, useState, type FormEvent } from "react";
import { createPortal } from "react-dom";
import { useMailchimp } from "../../../../../hooks/useMailchimp";
import { colorwayCssVars, type Colorway } from "../../data";
import styles from "./DropSignupModal.module.css";

type DropSignupModalProps = {
    colorway: Colorway;
    onClose: () => void;
};

export function DropSignupModal({ colorway, onClose }: DropSignupModalProps) {
    const closeRef = useRef<HTMLButtonElement>(null);
    const [email, setEmail] = useState("");
    const { status, message, subscribe } = useMailchimp();

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        document.body.classList.add("is-blurred");
        closeRef.current?.focus();
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prevOverflow;
            document.body.classList.remove("is-blurred");
        };
    }, [onClose]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        subscribe(email);
    };

    return createPortal(
        <div
            className={styles.overlay}
            style={colorwayCssVars(colorway)}
            role="dialog"
            aria-modal="true"
            aria-label="Join Drop 02"
            onClick={onClose}
        >
            <div className={styles.backdrop} aria-hidden="true" />

            <button
                ref={closeRef}
                type="button"
                className={styles.close}
                onClick={onClose}
                aria-label="Chiudi"
            >
                ✕
            </button>

            <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
                <h2 className={styles.title}>Join Drop 02</h2>

                {status === "success" ? (
                    <p className={styles.text}>{message}</p>
                ) : (
                    <>
                        <p className={styles.text}>
                            Inserisci la tua email per ricevere aggiornamenti
                            esclusivi sul Drop 02 di Bloynkay e ottenere accesso
                            anticipato alle novità. Gli iscritti saranno tra i
                            primi a conoscere la data di lancio.
                        </p>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="La tua email"
                                className={styles.input}
                                aria-label="Email"
                                disabled={status === "loading"}
                            />
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={status === "loading"}
                            >
                                {status === "loading" ? "Invio…" : "Conferma"}
                            </button>
                        </form>

                        {status === "error" && (
                            <p className={styles.errorMsg}>{message}</p>
                        )}
                    </>
                )}
            </div>
        </div>,
        document.body,
    );
}
