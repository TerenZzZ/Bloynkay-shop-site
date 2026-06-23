import type { CartAction, CartLine, CartProduct, CartState, CartLineOptions } from "./types";

export const initialCartState: CartState = {
    isOpen: false,
    lines: [],
};

/** Identità di una riga: stesso prodotto + stessa taglia + stesso colore
    si fondono in un'unica riga e ne sommano le quantità. */
export function makeLineId(productId: string, size?: string, color?: string): string {
    return `${productId}::${size ?? ""}::${color ?? ""}`;
}

function createLine(product: CartProduct, options: CartLineOptions = {}): CartLine {
    const quantity = Math.max(1, Math.floor(options.quantity ?? 1));
    return {
        lineId: makeLineId(product.id, options.size, options.color),
        product,
        size: options.size,
        color: options.color,
        quantity,
    };
}

/** Aggiorna la quantità di una riga; quantità <= 0 rimuove la riga. */
function withQuantity(lines: CartLine[], lineId: string, quantity: number): CartLine[] {
    if (quantity <= 0) {
        return lines.filter((line) => line.lineId !== lineId);
    }
    return lines.map((line) =>
        line.lineId === lineId ? { ...line, quantity } : line
    );
}

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case "ADD": {
            const incoming = createLine(action.product, action.options);
            const existing = state.lines.find((line) => line.lineId === incoming.lineId);
            const lines = existing
                ? state.lines.map((line) =>
                      line.lineId === incoming.lineId
                          ? { ...line, quantity: line.quantity + incoming.quantity }
                          : line
                  )
                : [...state.lines, incoming];
            return { ...state, lines, isOpen: true };
        }

        case "REMOVE":
            return { ...state, lines: state.lines.filter((l) => l.lineId !== action.lineId) };

        case "SET_QUANTITY":
            return { ...state, lines: withQuantity(state.lines, action.lineId, action.quantity) };

        case "INCREMENT": {
            const line = state.lines.find((l) => l.lineId === action.lineId);
            if (!line) return state;
            return { ...state, lines: withQuantity(state.lines, action.lineId, line.quantity + 1) };
        }

        case "DECREMENT": {
            const line = state.lines.find((l) => l.lineId === action.lineId);
            if (!line) return state;
            return { ...state, lines: withQuantity(state.lines, action.lineId, line.quantity - 1) };
        }

        case "CLEAR":
            return { ...state, lines: [] };

        case "OPEN":
            return { ...state, isOpen: true };

        case "CLOSE":
            return { ...state, isOpen: false };

        case "TOGGLE":
            return { ...state, isOpen: !state.isOpen };

        default:
            return state;
    }
}
