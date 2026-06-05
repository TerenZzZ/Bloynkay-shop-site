import type { ElementType, ReactNode, CSSProperties } from "react";
import { useInView } from "../../../hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
    children: ReactNode;
    as?: ElementType;
    delay?: number;
    className?: string;
    style?: CSSProperties;
};

export function Reveal({
                           children,
                           as: Tag = "div",
                           delay = 0,
                           className,
                           style,
                       }: RevealProps) {
    const { ref, inView } = useInView<HTMLDivElement>({ once: true });

    return (
        <Tag
            ref={ref}
            className={[styles.reveal, inView ? styles.visible : "", className]
                .filter(Boolean)
                .join(" ")}
            style={{ ...style, transitionDelay: `${delay}ms` }}
        >
            {children}
        </Tag>
    );
}