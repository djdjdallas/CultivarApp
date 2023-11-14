import "./App.css";
import Nav from "./components/Nav";
import ProductCard from "./ui-components/ProductCard";
import SiteFooter from "./components/SiteFooter";
import { ProductCardCollection } from "./ui-components";

<ProductCardCollection />;
function App() {
  return (
    <div>
      <Nav />
      <ProductCardCollection />;{/* <ProductCard /> */}
      <SiteFooter />
    </div>
  );
}

export default App;
