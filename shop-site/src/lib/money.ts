/* Formattazione e parsing dei prezzi in euro, unica fonte di verità per la
   valuta: cambiando qui formato o locale si aggiorna tutto il sito. */

/** Converte un numero in una stringa "€ 59,90" (formato del sito). */
export function formatPrice(amount: number): string {
    return `€ ${amount.toFixed(2).replace(".", ",")}`;
}

/** Estrae il valore numerico da un'etichetta tipo "€59,90" o "€ 59,90". */
export function parsePrice(label: string): number {
    const normalized = label.replace(/[^\d,.-]/g, "").replace(",", ".");
    const value = Number.parseFloat(normalized);
    return Number.isFinite(value) ? value : 0;
}
