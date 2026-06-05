import { Hero } from "../components/sections/Hero";
import { Manifesto } from "../components/sections/Manifesto";
import { ProductsBlock } from "../components/sections/ProductsBlock";
import { Waitlist } from "../components/sections/Waitlist";

export function HomePage() {
    return (
        <>
            <Hero />
            <Manifesto />
            <ProductsBlock />
            <Waitlist />
        </>
    );
}
