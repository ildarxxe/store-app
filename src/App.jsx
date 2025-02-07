import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Contacts from "./components/other/Contacts";
import Home from "./Home";
import Catalog from "./components/other/catalog/Catalog";
import Basket from "./components/other/basket/Basket";
import Checkout from "./components/other/checkout/Checkout";
import Login from "./components/other/authorization/Login";
import Registration from "./components/other/authorization/Registration";
import Info from "./components/other/information/Info";

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
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/registration" element={<Registration />} />
                        <Route path="/about" element={<Info />} />
                    </Routes>
                </div>
                <Footer />
            </HashRouter>
        </div>
    );
}

export default App;
