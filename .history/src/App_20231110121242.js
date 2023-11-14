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
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
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
