import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Product from "./components/Product/Product";
import Searchbox from "./components/Searchbox/Searchbox";
import {BrowserRouter, Routes ,Route, Redirect} from "react-router-dom";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Product/ProductDetails";
import AddToCart from "./components/AddToCart/AddToCart";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
        <Route path="/product/:name" element={<ProductDetails />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
