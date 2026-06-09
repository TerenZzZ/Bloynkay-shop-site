import { ProductSection } from "../ProductSection";
import type { Colorway } from "../ProductSection";
import poloBrazil from "../../../assets/images/products/landing/brazill.png";
import poloEngland from "../../../assets/images/products/landing/england.png";
import poloFrance from "../../../assets/images/products/landing/france.png";
import poloGermany from "../../../assets/images/products/landing/germany.png";
import poloItaly from "../../../assets/images/products/landing/italyy.png";
import poloPortugal from "../../../assets/images/products/landing/portugal.png";
import styles from "./ProductsBlock.module.css";

type ProductData = {
    colorway: Colorway;
    name: string;
    description: string;
    details: string[];
    price: string;
    mediaSrc: string;
    mediaAlt: string;
};

const PRODUCTS: ProductData[] = [
    {
        colorway: "brazil",
        name: "Brasile",
        description:
            "Il calcio più bello del mondo in un piqué dorato. Il verde amazzonico incontra l'oro del Maracanã. Una polo che porta il ritmo del futebol sul petto.",
        details: [
            "100% cotone piqué premium",
            "Verde e oro brasiliani",
            "Patch Bloynkay sul petto",
            "Taglia S / M / L / XL",
        ],
        price: "€59,90",
        mediaSrc: poloBrazil,
        mediaAlt: "Polo Bloynkay Brasile — World Cup Edition",
    },
    {
        colorway: "england",
        name: "Inghilterra",
        description:
            "Bianco calcistico dove tutto è iniziato. I Three Lions ricamati sul petto, i bordi rosso English sul colletto. Dove il calcio ha preso forma.",
        details: [
            "100% cotone piqué premium",
            "Bianco con bordi rosso England",
            "Three Lions ricamati",
            "Patch Bloynkay sul colletto",
        ],
        price: "€59,90",
        mediaSrc: poloEngland,
        mediaAlt: "Polo Bloynkay Inghilterra — World Cup Edition",
    },
    {
        colorway: "france",
        name: "Francia",
        description:
            "Blu notte con accenti tricolore. La scuola tattica più sofisticata del calcio mondiale incontra il design artigianale italiano.",
        details: [
            "100% cotone piqué premium",
            "Blu notte con accenti tricolore",
            "Gallo Gallico ricamato",
            "Patch Bloynkay in argento",
        ],
        price: "€59,90",
        mediaSrc: poloFrance,
        mediaAlt: "Polo Bloynkay Francia — World Cup Edition",
    },
    {
        colorway: "germany",
        name: "Germania",
        description:
            "Bianco ghiaccio con rigore tedesco. La tradizione del calcio organizzato si fonde con il minimalismo del design italiano. Perfezione costruita.",
        details: [
            "100% cotone piqué premium",
            "Bianco con bordi neri a contrasto",
            "Aquila DFB ricamata",
            "Patch Bloynkay sul retro",
        ],
        price: "€59,90",
        mediaSrc: poloGermany,
        mediaAlt: "Polo Bloynkay Germania — World Cup Edition",
    },
    {
        colorway: "italy",
        name: "Italia",
        description:
            "L'azzurro più iconico del calcio mondiale. Quattro stelle, un'identità unica. Il capo che celebra la Nazionale con il rigore del design Bloynkay.",
        details: [
            "100% cotone piqué premium",
            "Azzurro Nazionale certificato",
            "Quattro stelle ricamate",
            "Patch Bloynkay in oro sul petto",
        ],
        price: "€59,90",
        mediaSrc: poloItaly,
        mediaAlt: "Polo Bloynkay Italia — World Cup Edition",
    },
    {
        colorway: "portugal",
        name: "Portogallo",
        description:
            "Rosso e verde. Lo scudo antico di una nazione che ha scritto la storia del calcio. Il coraggio di una squadra da anni al vertice del mondo.",
        details: [
            "100% cotone piqué premium",
            "Verde con bordi rosso Portogallo",
            "Stemma FPF ricamato",
            "Patch Bloynkay sul colletto",
        ],
        price: "€59,90",
        mediaSrc: poloPortugal,
        mediaAlt: "Polo Bloynkay Portogallo — World Cup Edition",
    },
];

export function ProductsBlock() {
    return (
        <div className={styles.container}>
            {PRODUCTS.map((p, i) => (
                <ProductSection
                    key={p.colorway}
                    position={i + 1}
                    total={PRODUCTS.length}
                    isFlipped={i % 2 !== 0}
                    nextColorway={PRODUCTS[i + 1]?.colorway}
                    {...p}
                />
            ))}
        </div>
    );
}
