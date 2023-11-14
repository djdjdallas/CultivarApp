import "./App.css";
import Nav from "./components/Nav";
import ProductCardCollection from "./ProductCardCollection.jsx";
import SiteFooter from "./components/SiteFooter";

function App() {
  return (
    <div>
      <Nav />
      <ProductCardCollection />
      <SiteFooter />
    </div>
  );
}

export default App;
