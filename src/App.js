import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home/Home";
import TopNavbar from './components/TopNavbar/TopNavbar';
import Navbar from './components/MainNavbar/Navbar';
import Footer from './components/Footer/Footer';
import ShopingCart from './components/Cart/ShoppingCart';
import Shops from "./components/Shop/Shops";
import ShopDetail from './components/ShopDetails/ShopDetail'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Shopingcart" element={<ShopingCart/>}/>
        <Route path="/shop" element={<Shops/>}/>
        <Route path="/product/:productId" element={<ShopDetail/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
