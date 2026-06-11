import type { CSSProperties } from "react";

/* =====================================================================
   Single source of truth per le sei colorway World Cup.
   Aggiungere/modificare una nazionale = una sola voce in COLORWAYS.

   I valori vengono iniettati come custom property CSS direttamente sul
   nodo (card / modal), così il modulo CSS non duplica i colori.
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
        navTheme: "light",
    },
    england: {
        fg: "#243c9c",
        fgSoft: "rgba(36, 60, 156, 0.72)",
        fgMute: "rgba(36, 60, 156, 0.48)",
        line: "rgba(36, 60, 156, 0.18)",
        accent: "#c8102e",
        bgBase: "#f4eeea",
        navTheme: "light",
    },
    france: {
        fg: "#dcdadb",
        fgSoft: "rgba(220, 218, 219, 0.75)",
        fgMute: "rgba(220, 218, 219, 0.50)",
        line: "rgba(220, 218, 219, 0.22)",
        accent: "#ed2939",
        bgBase: "#002395",
        navTheme: "dark",
    },
    germany: {
        fg: "#1a1a1a",
        fgSoft: "rgba(26, 26, 26, 0.66)",
        fgMute: "rgba(26, 26, 26, 0.36)",
        line: "rgba(26, 26, 26, 0.14)",
        accent: "#dd0000",
        bgBase: "#f5f5f5",
        navTheme: "light",
    },
    italy: {
        fg: "#f0f0f0",
        fgSoft: "rgba(240, 240, 240, 0.72)",
        fgMute: "rgba(240, 240, 240, 0.44)",
        line: "rgba(240, 240, 240, 0.16)",
        accent: "#f5e60b",
        bgBase: "#0066cc",
        navTheme: "dark",
    },
    portugal: {
        fg: "#f2c640",
        fgSoft: "rgba(242, 198, 64, 0.82)",
        fgMute: "rgba(242, 198, 64, 0.58)",
        line: "rgba(242, 198, 64, 0.24)",
        accent: "#f0f0f0",
        bgBase: "#006600",
        navTheme: "dark",
    },
};

/** Custom property da iniettare sul nodo per la colorway data. */
export function colorwayCssVars(name: Colorway): CSSProperties {
    const c = COLORWAYS[name];
    return {
        "--cw-fg": c.fg,
        "--cw-fg-soft": c.fgSoft,
        "--cw-fg-mute": c.fgMute,
        "--cw-line": c.line,
        "--cw-accent": c.accent,
        "--cw-bg-base": c.bgBase,
    } as CSSProperties;
}
