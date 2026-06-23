import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/sections/Footer";
import { CartDrawer } from "./components/cart";
import { CartProvider } from "./cart";
import { ScrollToTop } from "./components/utils";
import { HomePage, StorePage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <CartProvider>
                <ScrollToTop />
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/store" element={<StorePage />} />
                    </Routes>
                </main>
                <Footer />
                <CartDrawer />
            </CartProvider>
        </BrowserRouter>
    );
}

export default App;