import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Componente che resetta la posizione dello scroll ogni volta che cambia route.
 * Risolve il problema di React Router che non gestisce automaticamente lo scroll.
 */
export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scrolla in cima immediatamente quando cambia il pathname
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
