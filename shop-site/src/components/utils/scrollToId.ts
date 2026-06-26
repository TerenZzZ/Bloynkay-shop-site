/** Scroll fluido verso l'elemento con l'id indicato, posizionandolo esattamente a y=0.
 *  Usa window.scrollTo per ignorare scroll-padding-top del root (riservato alla navbar). */
export function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
}
