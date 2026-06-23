/* =====================================================================
   Modello dati del carrello.

   Il carrello è volutamente disaccoppiato dai tipi `Product` dello store:
   conserva solo ciò che serve a mostrare e quotare una riga (CartProduct),
   così qualunque sorgente (landing, store, futura API) può aggiungere al
   carrello senza dipendenze incrociate.
   ===================================================================== */

/** Snapshot minimo di un prodotto, sufficiente per riga e totale. */
export type CartProduct = {
    id: string;
    name: string;
    /** Prezzo unitario in euro. */
    price: number;
    image: string;
    /** Colorway nazionale, opzionale — solo per etichette/temi. */
    colorway?: string;
};

/** Opzioni di configurazione scelte al momento dell'aggiunta. */
export type CartLineOptions = {
    size?: string;
    color?: string;
    quantity?: number;
};

/** Una riga del carrello: prodotto + configurazione + quantità. */
export type CartLine = {
    /** Identità stabile della riga (prodotto + taglia + colore). */
    lineId: string;
    product: CartProduct;
    size?: string;
    color?: string;
    quantity: number;
};

export type CartState = {
    isOpen: boolean;
    lines: CartLine[];
};

export type CartAction =
    | { type: "ADD"; product: CartProduct; options?: CartLineOptions }
    | { type: "REMOVE"; lineId: string }
    | { type: "SET_QUANTITY"; lineId: string; quantity: number }
    | { type: "INCREMENT"; lineId: string }
    | { type: "DECREMENT"; lineId: string }
    | { type: "CLEAR" }
    | { type: "OPEN" }
    | { type: "CLOSE" }
    | { type: "TOGGLE" };

/** API pubblica esposta dal contesto ai componenti. */
export type CartContextValue = {
    isOpen: boolean;
    lines: CartLine[];
    /** Somma delle quantità (per il badge). */
    totalQuantity: number;
    /** Totale in euro. */
    subtotal: number;
    addItem: (product: CartProduct, options?: CartLineOptions) => void;
    removeItem: (lineId: string) => void;
    setQuantity: (lineId: string, quantity: number) => void;
    increment: (lineId: string) => void;
    decrement: (lineId: string) => void;
    clear: () => void;
    openCart: () => void;
    closeCart: () => void;
    toggleCart: () => void;
};
