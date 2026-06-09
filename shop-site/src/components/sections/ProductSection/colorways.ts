import type { CSSProperties } from "react";

/* =====================================================================
   Single source of truth per le sei colorway World Cup.
   Aggiungere/modificare una nazionale = una sola voce in COLORWAYS.

   I valori vengono iniettati come custom property CSS direttamente sul
   <section>, così il modulo CSS non duplica più i colori e l'eventuale
   transizione fra due sezioni può leggere il colore della PROSSIMA
   colorway tramite --next-cw-bg-deep / --next-cw-bg-base.
   ===================================================================== */

export type Colorway =
    | "brazil"
    | "england"
    | "france"
    | "germany"
    | "italy"
    | "portugal";

export type NavTheme = "light" | "dark" | "medium";

export type ColorwayTokens = {
    fg: string;
    fgSoft: string;
    fgMute: string;
    line: string;
    accent: string;
    bgBase: string;
    bgDeep: string;
    bgGlow: string;
    /** Tema usato dalla navbar e dal filtro del watermark. */
    navTheme: NavTheme;
};

export const COLORWAYS: Record<Colorway, ColorwayTokens> = {
    brazil: {
        fg: "#028122",
        fgSoft: "rgba(2, 129, 34, 0.72)",
        fgMute: "rgba(2, 129, 34, 0.50)",
        line: "rgba(2, 129, 34, 0.20)",
        accent: "#015c18",
        bgBase: "#f5e400",
        bgDeep: "#d4c600",
        bgGlow: "rgba(3, 141, 56, 0.10)",
        navTheme: "light",
    },
    england: {
        fg: "#243c9c",
        fgSoft: "rgba(36, 60, 156, 0.72)",
        fgMute: "rgba(36, 60, 156, 0.48)",
        line: "rgba(36, 60, 156, 0.18)",
        accent: "#c8102e",
        bgBase: "#f4eeea",
        bgDeep: "#e0d5ce",
        bgGlow: "rgba(42, 82, 160, 0.05)",
        navTheme: "light",
    },
    france: {
        fg: "#dcdadb",
        fgSoft: "rgba(220, 218, 219, 0.75)",
        fgMute: "rgba(220, 218, 219, 0.50)",
        line: "rgba(220, 218, 219, 0.22)",
        accent: "#ed2939",
        bgBase: "#002395",
        bgDeep: "#001260",
        bgGlow: "rgba(255, 246, 222, 0.06)",
        navTheme: "dark",
    },
    germany: {
        fg: "#1a1a1a",
        fgSoft: "rgba(26, 26, 26, 0.66)",
        fgMute: "rgba(26, 26, 26, 0.36)",
        line: "rgba(26, 26, 26, 0.14)",
        accent: "#dd0000",
        bgBase: "#f5f5f5",
        bgDeep: "#dcdcdc",
        bgGlow: "rgba(221, 0, 0, 0.04)",
        navTheme: "light",
    },
    italy: {
        fg: "#f0f0f0",
        fgSoft: "rgba(240, 240, 240, 0.72)",
        fgMute: "rgba(240, 240, 240, 0.44)",
        line: "rgba(240, 240, 240, 0.16)",
        accent: "#f5e60b",
        bgBase: "#0066cc",
        bgDeep: "#004499",
        bgGlow: "rgba(245, 230, 11, 0.06)",
        navTheme: "dark",
    },
    portugal: {
        fg: "#f2c640",
        fgSoft: "rgba(242, 198, 64, 0.82)",
        fgMute: "rgba(242, 198, 64, 0.58)",
        line: "rgba(242, 198, 64, 0.24)",
        accent: "#f0f0f0",
        bgBase: "#006600",
        bgDeep: "#004400",
        bgGlow: "rgba(247, 184, 1, 0.10)",
        navTheme: "dark",
    },
};

/**
 * Costruisce l'insieme di custom property da iniettare sul <section>.
 * Se `next` è valorizzato espone anche le bg della prossima colorway:
 * il backdrop le usa per fondere il proprio fondo nel colore della
 * sezione successiva, evitando lo stacco netto fra una polo e l'altra.
 */
export function colorwayCssVars(
    name: Colorway,
    next?: Colorway,
): CSSProperties {
    const c = COLORWAYS[name];
    const n = next ? COLORWAYS[next] : undefined;
    return {
        "--cw-fg": c.fg,
        "--cw-fg-soft": c.fgSoft,
        "--cw-fg-mute": c.fgMute,
        "--cw-line": c.line,
        "--cw-accent": c.accent,
        "--cw-bg-base": c.bgBase,
        "--cw-bg-deep": c.bgDeep,
        "--cw-bg-glow": c.bgGlow,
        ...(n && {
            "--next-cw-bg-base": n.bgBase,
            "--next-cw-bg-deep": n.bgDeep,
        }),
    } as CSSProperties;
}
