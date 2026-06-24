import type { Colorway } from "./colorways";

import frontBra from "../../../../assets/images/products/landing/gallery/polo/bra/front_bra.png";
import backBra from "../../../../assets/images/products/landing/gallery/polo/bra/back_bra.png";
import collageBra from "../../../../assets/images/products/landing/gallery/polo/bra/collage_bra.png";
import frontEng from "../../../../assets/images/products/landing/gallery/polo/eng/front_eng.png";
import backEng from "../../../../assets/images/products/landing/gallery/polo/eng/back_eng.png";
import collageEng from "../../../../assets/images/products/landing/gallery/polo/eng/collage_eng.png";
import frontFra from "../../../../assets/images/products/landing/gallery/polo/fra/front_fra.png";
import backFra from "../../../../assets/images/products/landing/gallery/polo/fra/back_fra.png";
import collageFra from "../../../../assets/images/products/landing/gallery/polo/fra/collage_fra.png";
import frontGer from "../../../../assets/images/products/landing/gallery/polo/ger/front_ger.png";
import backGer from "../../../../assets/images/products/landing/gallery/polo/ger/back_ger.png";
import collageGer from "../../../../assets/images/products/landing/gallery/polo/ger/collage_ger.png";
import frontIta from "../../../../assets/images/products/landing/gallery/polo/ita/front_ita.png";
import backIta from "../../../../assets/images/products/landing/gallery/polo/ita/back_ita.png";
import collageIta from "../../../../assets/images/products/landing/gallery/polo/ita/collage_ita.png";
import frontPort from "../../../../assets/images/products/landing/gallery/polo/port/front_port.png";
import backPort from "../../../../assets/images/products/landing/gallery/polo/port/back_port.png";
import collagePort from "../../../../assets/images/products/landing/gallery/polo/port/collage_port.png";

export type GalleryImage = { src: string; label: string };

/* Per ogni nazione: il collage dei dettagli, poi fronte e retro. */
export const POLO_GALLERY: Record<Colorway, GalleryImage[]> = {
    brazil: [
        { src: collageBra, label: "Dettagli" },
        { src: frontBra, label: "Fronte" },
        { src: backBra, label: "Retro" },
    ],
    england: [
        { src: collageEng, label: "Dettagli" },
        { src: frontEng, label: "Fronte" },
        { src: backEng, label: "Retro" },
    ],
    france: [
        { src: collageFra, label: "Dettagli" },
        { src: frontFra, label: "Fronte" },
        { src: backFra, label: "Retro" },
    ],
    germany: [
        { src: collageGer, label: "Dettagli" },
        { src: frontGer, label: "Fronte" },
        { src: backGer, label: "Retro" },
    ],
    italy: [
        { src: collageIta, label: "Dettagli" },
        { src: frontIta, label: "Fronte" },
        { src: backIta, label: "Retro" },
    ],
    portugal: [
        { src: collagePort, label: "Dettagli" },
        { src: frontPort, label: "Fronte" },
        { src: backPort, label: "Retro" },
    ],
};
