import { useEffect, useRef } from "react";

export function useLazyVideoPlay() {
    const ref = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        const video = ref.current;
        if (!video) return;

        if (typeof IntersectionObserver === "undefined") {
            void video.play().catch(() => {});
            return;
        }

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    void video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.15 }
        );

        obs.observe(video);
        return () => obs.disconnect();
    }, []);

    return ref;
}