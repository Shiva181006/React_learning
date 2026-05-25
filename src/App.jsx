import { Navbar } from "./component/navbar/navbar";
import { Routes, Route } from "react-router";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import ProductCardDetails from "./component/product/product_card_details";

function App() {
  return (
    <>
      {/* Navbar  */}
      <Navbar />

      {/* Routes  */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/productCardDetails" element={<ProductCardDetails/>}/>
      </Routes>

      {/* Footer  */}
    </>
  );
}

export default App;
