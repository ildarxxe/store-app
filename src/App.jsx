import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import Contacts from "./components/other/Contacts";
import Home from "./Home";

import "./components/navigation/navigation.css";
import "./components/main.css";
import "./components/other/other.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/contacts" element={<Contacts />} />
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer />
        </div>
    );
}

export default App;
