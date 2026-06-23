import { createContext } from "react";
import type { CartContextValue } from "./types";

/* Oggetto Context isolato in un file non-componente: tiene il provider
   compatibile con il Fast Refresh (un file = solo componenti). */
export const CartContext = createContext<CartContextValue | null>(null);
