import "./App.css";
import React, { useState, useEffect } from "react";
import "./index.css";
import SiteFooter from "./components/SiteFooter";
import { ProductCardCollection, StandardCardCollection } from "./ui-components";

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
    <div className="flex flex-col justify-center content-center">
      {windowWidth > 500 ? (
        <ProductCardCollection />
      ) : (
        <StandardCardCollection />
      )}
      <SiteFooter />
    </div>
  );
}

export default App;
