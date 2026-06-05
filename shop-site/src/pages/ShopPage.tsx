import { ShopHero, FilterBar, ProductCard } from "../components/shop";
import type { Product } from "../components/shop";
import cardiganNero from "../assets/images/products/shop/cardigan_nero_fronte.png";
import cardiganCeleste from "../assets/images/products/shop/cardigan_celeste_fronte.png";
import cardiganPanna from "../assets/images/products/shop/cardigan_panna_fronte.png";
import bgClouds from "../assets/images/backgrounds/sfondo_shop_01.png";
import styles from "./ShopPage.module.css";

const PRODUCTS: Product[] = [
    {
        id: "cardigan-panna",
        name: "Cardigan Panna",
        description: "Cardigan Drop 01",
        price: 140,
        image: cardiganPanna,
        colors: [
            { name: "Panna", hex: "#f5e6d3" },
            { name: "Nero", hex: "#1a1a1a" },
            { name: "Celeste", hex: "#a8c5dd" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "cardigan-nero",
        name: "Cardigan Nero",
        description: "Cardigan Drop 01",
        price: 140,
        image: cardiganNero,
        colors: [
            { name: "Nero", hex: "#1a1a1a" },
            { name: "Panna", hex: "#f5e6d3" },
            { name: "Celeste", hex: "#a8c5dd" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
        id: "cardigan-celeste",
        name: "Cardigan Celeste",
        description: "Cardigan Drop 01",
        price: 140,
        image: cardiganCeleste,
        colors: [
            { name: "Celeste", hex: "#a8c5dd" },
            { name: "Panna", hex: "#f5e6d3" },
            { name: "Nero", hex: "#1a1a1a" },
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
    },
];

export function ShopPage() {
    return (
        <div className={styles.page}>
            <ShopHero backgroundImage={bgClouds} />

            <section className={styles.main}>
                <div className={styles.container}>
                    <FilterBar productCount={PRODUCTS.length} />

                    <div className={styles.grid}>
                        {PRODUCTS.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
