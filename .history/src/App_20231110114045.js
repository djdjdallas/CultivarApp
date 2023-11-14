import "./App.css";

import SiteFooter from "./components/SiteFooter";
import { ProductCardCollection, StandardCard } from "./ui-components";

function App() {
  return (
    <div>
      <StandardCard />
      <ProductCardCollection />;
      <SiteFooter />
    </div>
  );
}

export default App;
