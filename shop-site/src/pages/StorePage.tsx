import { StoreHero, FilterBar, ProductCard } from "../components/store";
import type { Product } from "../components/store";
import { POLO_GALLERY } from "../components/sections/ProductSection";
import type { GalleryModel } from "../components/sections/ProductSection";
import poloBrazil from "../assets/images/products/store/brazill.png";
import poloEngland from "../assets/images/products/store/england.png";
import poloFrance from "../assets/images/products/store/france.png";
import poloGermany from "../assets/images/products/store/germany.png";
import poloItaly from "../assets/images/products/store/italyy.png";
import poloPortugal from "../assets/images/products/store/portugal.png";
import styles from "./StorePage.module.css";

const PRODUCTS: Product[] = [
    {
        id: "polo-portugal",
        colorway: "portugal",
        name: "Polo Portogallo",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloPortugal,
        colors: [
            { name: "Verde", hex: "#006600" },
            { name: "Rosso", hex: "#ff2020" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "polo-brazil",
        colorway: "brazil",
        name: "Polo Brasile",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloBrazil,
        colors: [
            { name: "Giallo", hex: "#f5e400" },
            { name: "Verde", hex: "#009c3b" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "polo-france",
        colorway: "france",
        name: "Polo Francia",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloFrance,
        colors: [
            { name: "Blu", hex: "#002395" },
            { name: "Rosso", hex: "#ed2939" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "polo-england",
        colorway: "england",
        name: "Polo Inghilterra",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloEngland,
        colors: [
            { name: "Bianco", hex: "#f4eeea" },
            { name: "Rosso", hex: "#c8102e" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "polo-italy",
        colorway: "italy",
        name: "Polo Italia",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloItaly,
        colors: [
            { name: "Azzurro", hex: "#0066cc" },
            { name: "Oro", hex: "#f5e60b" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
    {
        id: "polo-germany",
        colorway: "germany",
        name: "Polo Germania",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloGermany,
        colors: [
            { name: "Bianco", hex: "#f5f5f5" },
            { name: "Nero", hex: "#1a1a1a" },
        ],
        sizes: ["S", "M", "L", "XL"],
    },
];

const GALLERY_MODELS: GalleryModel[] = PRODUCTS.map((p) => ({
    colorway: p.colorway,
    name: p.name,
    swatch: p.image,
    images: POLO_GALLERY[p.colorway],
    purchase: {
        id: p.id,
        price: p.price,
        image: p.image,
        sizes: p.sizes,
        colors: p.colors,
    },
}));

export function StorePage() {
    return (
        <div className={styles.page}>
            <StoreHero
                subtitle="Esplora la collezione Drop 02 — World Cup Edition. Sei nazionali, sei polo in piqué di cotone premium, costruite con la cura artigianale di Bloynkay."
            />

            <section className={styles.main}>
                <div className={styles.container}>
                    <FilterBar productCount={PRODUCTS.length} />

                    <div className={styles.grid}>
                        {PRODUCTS.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                catalog={GALLERY_MODELS}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}