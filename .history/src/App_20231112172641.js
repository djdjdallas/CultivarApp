import "./App.css";
import React, { useState, useEffect } from "react";
import "./index.css";
import SiteFooter from "./components/SiteFooter";
import { NavBar, ProductCardCollection } from "./ui-components";
import MobilePage from "./components/MobilePage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="#" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      {/* {windowWidth > 500 ? <ProductCardCollection /> : <MobilePage />} */}
      <SiteFooter />
    </>
  );
}

export default App;
