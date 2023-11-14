import "./App.css";
import Nav from "./components/Nav";

import SiteFooter from "./components/SiteFooter";
import { ProductCardCollection } from "./ui-components";

<ProductCardCollection />;
function App() {
  return (
    <div>
      <Nav />
      <ProductCardCollection />;
      <SiteFooter />
    </div>
  );
}

export default App;
