import { useContext } from "react";
import { CartContext } from "./cartContext";
import type { CartContextValue } from "./types";

export function useCart(): CartContextValue {
    const ctx = useContext(CartContext);
    if (!ctx) {
        throw new Error("useCart deve essere usato dentro un <CartProvider>");
    }
    return ctx;
}
