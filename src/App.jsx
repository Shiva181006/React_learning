import { Navbar } from "./component/navbar/navbar";
import { Routes, Route } from "react-router";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";

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
      </Routes>

      {/* Footer  */}
    </>
  );
}

export default App;
