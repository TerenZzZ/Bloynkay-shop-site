import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/sections/Footer";
import { ScrollToTop } from "./components/utils";
import { HomePage, StorePage } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<StorePage />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;