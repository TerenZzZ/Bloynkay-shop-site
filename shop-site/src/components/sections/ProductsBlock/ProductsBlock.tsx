import { ProductSection, COLORWAYS } from "../ProductSection";
import type { Colorway } from "../ProductSection";
import poloBrazil from "../../../assets/images/products/landing/blocks/brazill.png";
import poloEngland from "../../../assets/images/products/landing/blocks/england.png";
import poloFrance from "../../../assets/images/products/landing/blocks/france.png";
import poloGermany from "../../../assets/images/products/landing/blocks/germany.png";
import poloItaly from "../../../assets/images/products/landing/blocks/italyy.png";
import poloPortugal from "../../../assets/images/products/landing/blocks/portugal.png";
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

const DESCRIPTION =
    "Polo Bloynkay World Cup 2026 - Drop 02.\n\n" +
    "Ispirata a sei iconiche nazionali, con estetica calcistica anni '90/2000 e una rilettura contemporanea riadattata ad una vestibilità boxy.";

const DETAILS = [
    "100% cotton piqué",
    "Embroidered front and back logo",
    "Screen printed 'bloynkay' logo",
    "Embroidered bloynkay patch",
];

const PRODUCTS: ProductData[] = [
    {
        colorway: "brazil",
        name: "Brasile",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloBrazil,
        mediaAlt: "Polo Bloynkay Brasile — World Cup Edition",
    },
    {
        colorway: "england",
        name: "Inghilterra",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloEngland,
        mediaAlt: "Polo Bloynkay Inghilterra — World Cup Edition",
    },
    {
        colorway: "france",
        name: "Francia",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloFrance,
        mediaAlt: "Polo Bloynkay Francia — World Cup Edition",
    },
    {
        colorway: "germany",
        name: "Germania",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloGermany,
        mediaAlt: "Polo Bloynkay Germania — World Cup Edition",
    },
    {
        colorway: "italy",
        name: "Italia",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloItaly,
        mediaAlt: "Polo Bloynkay Italia — World Cup Edition",
    },
    {
        colorway: "portugal",
        name: "Portogallo",
        description: DESCRIPTION,
        details: DETAILS,
        price: "€59,90",
        mediaSrc: poloPortugal,
        mediaAlt: "Polo Bloynkay Portogallo — World Cup Edition",
    },
];

export function ProductsBlock() {
    return (
        <div className={styles.container}>
            {PRODUCTS.map((p, i) => {
                const prev = PRODUCTS[i - 1];
                const next = PRODUCTS[i + 1];
                return (
                    <ProductSection
                        key={p.colorway}
                        position={i + 1}
                        total={PRODUCTS.length}
                        isFlipped={i % 2 !== 0}
                        prevBgBase={prev ? COLORWAYS[prev.colorway].bgBase : undefined}
                        nextBgBase={next ? COLORWAYS[next.colorway].bgBase : undefined}
                        {...p}
                    />
                );
            })}
        </div>
    );
}
