import type { Colorway } from "./colorways";

import frontBra from "../../../assets/images/products/landing/gallery/polo/bra/front_bra.png";
import backBra from "../../../assets/images/products/landing/gallery/polo/bra/back_bra.png";
import frontEng from "../../../assets/images/products/landing/gallery/polo/eng/front_eng.png";
import backEng from "../../../assets/images/products/landing/gallery/polo/eng/back_eng.png";
import frontFra from "../../../assets/images/products/landing/gallery/polo/fra/front_fra.png";
import backFra from "../../../assets/images/products/landing/gallery/polo/fra/back_fra.png";
import frontGer from "../../../assets/images/products/landing/gallery/polo/ger/front_ger.png";
import backGer from "../../../assets/images/products/landing/gallery/polo/ger/back_ger.png";
import frontIta from "../../../assets/images/products/landing/gallery/polo/ita/front_ita.png";
import backIta from "../../../assets/images/products/landing/gallery/polo/ita/back_ita.png";
import frontPort from "../../../assets/images/products/landing/gallery/polo/port/front_port.png";
import backPort from "../../../assets/images/products/landing/gallery/polo/port/back_port.png";
import sizeChart from "../../../assets/images/products/landing/gallery/polo/size_chart_polo.png";

export type GalleryImage = { src: string; label: string };

/* Per ogni nazione: fronte, retro e la guida taglie (condivisa). */
export const POLO_GALLERY: Record<Colorway, GalleryImage[]> = {
    brazil: [
        { src: frontBra, label: "Fronte" },
        { src: backBra, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
    england: [
        { src: frontEng, label: "Fronte" },
        { src: backEng, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
    france: [
        { src: frontFra, label: "Fronte" },
        { src: backFra, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
    germany: [
        { src: frontGer, label: "Fronte" },
        { src: backGer, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
    italy: [
        { src: frontIta, label: "Fronte" },
        { src: backIta, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
    portugal: [
        { src: frontPort, label: "Fronte" },
        { src: backPort, label: "Retro" },
        { src: sizeChart, label: "Guida taglie" },
    ],
};
