import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Contacts from "./components/other/Contacts";
import Home from "./Home";
import Catalog from "./components/other/catalog/Catalog";

import "./components/navigation/navigation.css";
import "./components/main.css";
import "./components/other/other.css";

function App() {
    return (
        <div className="app">
            <HashRouter>
                <Header />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/catalog" element={<Catalog />} />
                    </Routes>
                </div>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
