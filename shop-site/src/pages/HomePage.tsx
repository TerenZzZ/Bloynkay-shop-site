import { Hero } from "../components/sections/Hero";
import { ProductsBlock } from "../components/sections/ProductsBlock";
import { NationsIndex } from "../components/sections/NationsIndex";

export function HomePage() {
    return (
        <>
            <Hero />
            <ProductsBlock />
            <NationsIndex />
        </>
    );
}
