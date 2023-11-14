import "./App.css";
import React, { useState, useEffect } from "react";

import SiteFooter from "./components/SiteFooter";
import { ProductCardCollection, StandardCard } from "./ui-components";

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
      {windowWidth > 500 ? <ProductCardCollection /> : <StandardCard />}
      <SiteFooter />
    </div>
  );
}

export default App;
