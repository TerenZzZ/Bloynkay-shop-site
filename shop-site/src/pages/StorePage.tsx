import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
        name: "Portogallo",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloPortugal,
        colors: [
            { name: "Verde", hex: "#006600" },
            { name: "Rosso", hex: "#ff2020" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "polo-brazil",
        colorway: "brazil",
        name: "Brasile",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloBrazil,
        colors: [
            { name: "Giallo", hex: "#f5e400" },
            { name: "Verde", hex: "#009c3b" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "polo-france",
        colorway: "france",
        name: "Francia",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloFrance,
        colors: [
            { name: "Blu", hex: "#002395" },
            { name: "Rosso", hex: "#ed2939" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "polo-england",
        colorway: "england",
        name: "Inghilterra",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloEngland,
        colors: [
            { name: "Bianco", hex: "#f4eeea" },
            { name: "Rosso", hex: "#c8102e" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "polo-italy",
        colorway: "italy",
        name: "Italia",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloItaly,
        colors: [
            { name: "Azzurro", hex: "#0066cc" },
            { name: "Oro", hex: "#f5e60b" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "polo-germany",
        colorway: "germany",
        name: "Germania",
        description: "World Cup Drop 02",
        price: 59.90,
        image: poloGermany,
        colors: [
            { name: "Bianco", hex: "#f5f5f5" },
            { name: "Nero", hex: "#1a1a1a" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
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
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const { scrollY } = useScroll();
    const bgY = useTransform(scrollY, [0, 2000], [0, -350]);

    const visibleProducts = selectedSize
        ? PRODUCTS.filter((p) => p.sizes.includes(selectedSize))
        : PRODUCTS;

    return (
        <div className={styles.page}>
            <motion.div className={styles.bgParallax} style={{ y: bgY }} aria-hidden="true" />
            <StoreHero />

            <section className={styles.main}>
                <div className={styles.container}>
                    <FilterBar
                        productCount={visibleProducts.length}
                        selectedSize={selectedSize}
                        onSizeChange={setSelectedSize}
                    />

                    <div className={styles.grid}>
                        {visibleProducts.map((product, index) => (
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