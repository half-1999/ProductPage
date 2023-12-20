import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Component/Landing";

import BlogPage from "./Component/Pages/BlogPage";
import About from "./Component/Pages/About";
import Products from "./Component/Products/Products";
import SingleProductPage from "./Component/Products/SingleProduct";
import AllProducts from "./Component/Products/AllProducts";
import Support from "./Component/Pages/Support";
import Contact from "./Component/Pages/Contact/Contact";
import Partner from "./Component/Pages/Partner";
import Navbar3 from "./Component/Navbar/Navbar3";
import Footerwa from "./Component/Footer/Footerwa";
import DesignSolution from "./Component/Pages/DesignSolution";
function App() {
  return (
    <div className="  ">
      <Router>
        {/* <Navigation/> */}
        <Navbar3 />
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productName" element={<SingleProductPage />} />
          <Route path="/allproducts/:productName" element={<AllProducts />} />
          <Route path="/registration-warranty-form" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner-with-us" element={<Partner />} />
          <Route path="/design-solution" element={<DesignSolution />} />
        </Routes>
        {/* <Footer/> */}
        <Footerwa />
        {/* <Footer2/> */}
      </Router>
    </div>
  );
}

export default App;
