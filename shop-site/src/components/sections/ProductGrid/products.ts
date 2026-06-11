import type { Colorway } from "./colorways";
import poloBrazil from "../../../assets/images/products/landing/brazill.png";
import poloEngland from "../../../assets/images/products/landing/england.png";
import poloFrance from "../../../assets/images/products/landing/france.png";
import poloGermany from "../../../assets/images/products/landing/germany.png";
import poloItaly from "../../../assets/images/products/landing/italyy.png";
import poloPortugal from "../../../assets/images/products/landing/portugal.png";

export type Product = {
    colorway: Colorway;
    name: string;
    /** Codice nazione a tre lettere (stile maglia). */
    code: string;
    tagline: string;
    description: string;
    details: string[];
    price: string;
    /** Pezzi totali della tiratura per questo capo. */
    edition: number;
    mediaSrc: string;
    mediaAlt: string;
};

export const PRODUCTS: Product[] = [
    {
        colorway: "brazil",
        name: "Brasile",
        code: "BRA",
        tagline: "Oro del Maracanã",
        description:
            "Il calcio più bello del mondo in un piqué dorato. Il verde amazzonico incontra l'oro del Maracanã. Una polo che porta il ritmo del futebol sul petto.",
        details: [
            "100% cotone piqué premium",
            "Verde e oro brasiliani",
            "Patch Bloynkay sul petto",
            "Taglia S / M / L / XL",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloBrazil,
        mediaAlt: "Polo Bloynkay Brasile — World Cup Edition",
    },
    {
        colorway: "england",
        name: "Inghilterra",
        code: "ENG",
        tagline: "Dove tutto è iniziato",
        description:
            "Bianco calcistico dove tutto è iniziato. I Three Lions ricamati sul petto, i bordi rosso English sul colletto. Dove il calcio ha preso forma.",
        details: [
            "100% cotone piqué premium",
            "Bianco con bordi rosso England",
            "Three Lions ricamati",
            "Patch Bloynkay sul colletto",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloEngland,
        mediaAlt: "Polo Bloynkay Inghilterra — World Cup Edition",
    },
    {
        colorway: "france",
        name: "Francia",
        code: "FRA",
        tagline: "Blu notte tricolore",
        description:
            "Blu notte con accenti tricolore. La scuola tattica più sofisticata del calcio mondiale incontra il design artigianale italiano.",
        details: [
            "100% cotone piqué premium",
            "Blu notte con accenti tricolore",
            "Gallo Gallico ricamato",
            "Patch Bloynkay in argento",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloFrance,
        mediaAlt: "Polo Bloynkay Francia — World Cup Edition",
    },
    {
        colorway: "germany",
        name: "Germania",
        code: "GER",
        tagline: "Rigore tedesco",
        description:
            "Bianco ghiaccio con rigore tedesco. La tradizione del calcio organizzato si fonde con il minimalismo del design italiano. Perfezione costruita.",
        details: [
            "100% cotone piqué premium",
            "Bianco con bordi neri a contrasto",
            "Aquila DFB ricamata",
            "Patch Bloynkay sul retro",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloGermany,
        mediaAlt: "Polo Bloynkay Germania — World Cup Edition",
    },
    {
        colorway: "italy",
        name: "Italia",
        code: "ITA",
        tagline: "Azzurro a quattro stelle",
        description:
            "L'azzurro più iconico del calcio mondiale. Quattro stelle, un'identità unica. Il capo che celebra la Nazionale con il rigore del design Bloynkay.",
        details: [
            "100% cotone piqué premium",
            "Azzurro Nazionale certificato",
            "Quattro stelle ricamate",
            "Patch Bloynkay in oro sul petto",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloItaly,
        mediaAlt: "Polo Bloynkay Italia — World Cup Edition",
    },
    {
        colorway: "portugal",
        name: "Portogallo",
        code: "POR",
        tagline: "Scudo antico",
        description:
            "Rosso e verde. Lo scudo antico di una nazione che ha scritto la storia del calcio. Il coraggio di una squadra da anni al vertice del mondo.",
        details: [
            "100% cotone piqué premium",
            "Verde con bordi rosso Portogallo",
            "Stemma FPF ricamato",
            "Patch Bloynkay sul colletto",
        ],
        price: "€59,90",
        edition: 250,
        mediaSrc: poloPortugal,
        mediaAlt: "Polo Bloynkay Portogallo — World Cup Edition",
    },
];

/** Serial fittizio ma stabile per capo, stile "N° 002 / 250". */
export function serialOf(index: number, edition: number): string {
    return `N° ${String((index + 1) * 2).padStart(3, "0")} / ${edition}`;
}
