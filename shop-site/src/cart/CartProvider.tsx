import {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    type ReactNode,
} from "react";
import { CartContext } from "./cartContext";
import { cartReducer, initialCartState } from "./cartReducer";
import type { CartContextValue, CartLine, CartLineOptions, CartProduct, CartState } from "./types";

const STORAGE_KEY = "bloynkay.cart.v1";

/** Carica le righe persistite; lo stato `isOpen` non viene mai ripristinato. */
function loadInitialState(): CartState {
    if (typeof window === "undefined") return initialCartState;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return initialCartState;
        const lines = JSON.parse(raw) as CartLine[];
        if (!Array.isArray(lines)) return initialCartState;
        return { ...initialCartState, lines };
    } catch {
        return initialCartState;
    }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

    // Persiste solo le righe quando cambiano.
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.lines));
        } catch {
            /* storage non disponibile: il carrello resta solo in memoria */
        }
    }, [state.lines]);

    const addItem = useCallback(
        (product: CartProduct, options?: CartLineOptions) =>
            dispatch({ type: "ADD", product, options }),
        []
    );
    const removeItem = useCallback((lineId: string) => dispatch({ type: "REMOVE", lineId }), []);
    const setQuantity = useCallback(
        (lineId: string, quantity: number) => dispatch({ type: "SET_QUANTITY", lineId, quantity }),
        []
    );
    const increment = useCallback((lineId: string) => dispatch({ type: "INCREMENT", lineId }), []);
    const decrement = useCallback((lineId: string) => dispatch({ type: "DECREMENT", lineId }), []);
    const clear = useCallback(() => dispatch({ type: "CLEAR" }), []);
    const openCart = useCallback(() => dispatch({ type: "OPEN" }), []);
    const closeCart = useCallback(() => dispatch({ type: "CLOSE" }), []);
    const toggleCart = useCallback(() => dispatch({ type: "TOGGLE" }), []);

    const { totalQuantity, subtotal } = useMemo(() => {
        return state.lines.reduce(
            (acc, line) => ({
                totalQuantity: acc.totalQuantity + line.quantity,
                subtotal: acc.subtotal + line.product.price * line.quantity,
            }),
            { totalQuantity: 0, subtotal: 0 }
        );
    }, [state.lines]);

    const value = useMemo<CartContextValue>(
        () => ({
            isOpen: state.isOpen,
            lines: state.lines,
            totalQuantity,
            subtotal,
            addItem,
            removeItem,
            setQuantity,
            increment,
            decrement,
            clear,
            openCart,
            closeCart,
            toggleCart,
        }),
        [
            state.isOpen,
            state.lines,
            totalQuantity,
            subtotal,
            addItem,
            removeItem,
            setQuantity,
            increment,
            decrement,
            clear,
            openCart,
            closeCart,
            toggleCart,
        ]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
