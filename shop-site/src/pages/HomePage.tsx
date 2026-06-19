import { Hero } from "../components/sections/Hero";
import { ProductsBlock } from "../components/sections/ProductsBlock";
import { NationsIndex } from "../components/sections/NationsIndex";
import {
    Marquee,
    BRAND_MARQUEE_ITEMS,
    BRAND_MARQUEE_DOT_COLORS,
} from "../components/ui/Marquee";

export function HomePage() {
    return (
        <>
            <Hero />
            <ProductsBlock />
            <Marquee
                items={BRAND_MARQUEE_ITEMS}
                dotColors={BRAND_MARQUEE_DOT_COLORS}
            />
            <NationsIndex />
        </>
    );
}
