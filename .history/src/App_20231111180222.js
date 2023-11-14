import "./App.css";
import React, { useState, useEffect } from "react";
import "./index.css";
import SiteFooter from "./components/SiteFooter";
import { NavBar, ProductCardCollection } from "./ui-components";
import MobilePage from "./components/MobilePage";

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
    <div className="flex">
      <div>
        <NavBar />
        {windowWidth > 500 ? <ProductCardCollection /> : <MobilePage />}
        <SiteFooter />
      </div>
    </div>
  );
}

export default App;
