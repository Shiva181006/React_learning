import { Navbar } from "./component/navbar/navbar";
import {  Routes, Route } from "react-router";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import Product from "./component/product/product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Product/>
    </>
  );
}

export default App;
