import { useEffect, useRef, useState } from "react";

type Options = {
    rootMargin?: string;
    threshold?: number | number[];
    once?: boolean;
};

export function useInView<T extends HTMLElement>({
                                                     rootMargin = "0px 0px -10% 0px",
                                                     threshold = 0.15,
                                                     once = true,
                                                 }: Options = {}) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(
        () => typeof IntersectionObserver === "undefined"
    );

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (once) obs.disconnect();
                } else if (!once) {
                    setInView(false);
                }
            },
            { rootMargin, threshold }
        );

        obs.observe(el);
        return () => obs.disconnect();
    }, [rootMargin, threshold, once]);

    return { ref, inView } as const;
}