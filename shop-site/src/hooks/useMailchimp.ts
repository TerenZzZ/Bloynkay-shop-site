import { useCallback, useState } from "react";
import jsonp from "jsonp";

type Status = "idle" | "loading" | "success" | "error";

type MailchimpResponse = {
    result: "success" | "error";
    msg: string;
};

const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL as string;

function buildUrl(email: string): string {
    // Mailchimp JSONP richiede EMAIL come parametro
    const encoded = encodeURIComponent(email);
    const separator = MAILCHIMP_URL.includes("?") ? "&" : "?";
    return `${MAILCHIMP_URL}${separator}EMAIL=${encoded}`;
}

function parseError(msg: string): string {
    // Mailchimp restituisce spesso messaggi con tag HTML o in inglese
    const clean = msg.replace(/<[^>]*>/g, "").trim();
    if (/already subscribed/i.test(clean))
        return "Questa email è già iscritta alla newsletter.";
    if (/invalid/i.test(clean) || /valid email/i.test(clean))
        return "Inserisci un indirizzo email valido.";
    if (/too many/i.test(clean))
        return "Troppi tentativi. Riprova tra qualche minuto.";
    return "Si è verificato un errore. Riprova più tardi.";
}

export function useMailchimp() {
    const [status, setStatus] = useState<Status>("idle");
    const [message, setMessage] = useState("");

    const subscribe = useCallback((email: string) => {
        if (!email.trim()) return;
        setStatus("loading");
        setMessage("");

        jsonp(
            buildUrl(email),
            { param: "c", timeout: 8000 },
            (err: Error | null, data: MailchimpResponse) => {
                if (err || !data) {
                    setStatus("error");
                    setMessage("Connessione non riuscita. Riprova più tardi.");
                    return;
                }
                if (data.result === "success") {
                    setStatus("success");
                    setMessage("Grazie! Sarai tra i primi a sapere della data di lancio.");
                } else {
                    setStatus("error");
                    setMessage(parseError(data.msg));
                }
            },
        );
    }, []);

    const reset = useCallback(() => {
        setStatus("idle");
        setMessage("");
    }, []);

    return { status, message, subscribe, reset };
}
