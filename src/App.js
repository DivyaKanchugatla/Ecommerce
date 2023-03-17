import React, { useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home/Home";
import TopNavbar from './components/TopNavbar/TopNavbar';
import Navbar from './components/MainNavbar/Navbar';
import Footer from './components/Footer/Footer';
import ShopingCart from './components/Cart/ShoppingCart';
import Shops from "./components/Shop/Shops";
import ShopDetail from './components/ShopDetails/ShopDetail'
import Newcontactus from './components/Contactus/Newcontactus'
import Checkout from './components/Checkout/Checkout'
import BackToTopButton from './components/BackToTopButton'
import { useSelector } from "react-redux";
import './App.css'


const App = () => {
  const products=useSelector((state)=>state.allProducts.products)
  const [searchTerm,setSearchTerm]=useState('');
   const [searchResults,setSearchResults]=useState([]);
   const [array,setArray]=useState([])
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newProductsList = products.filter((product)=>{
       return  Object.values(product.category).join("").toLowerCase().includes(searchTerm.toLowerCase())
      })
      setSearchResults(newProductsList)
    }
    else{
      setSearchResults(products)
    }
  }
  console.log(searchResults)
  const filterHandler = (item) => {
    const result = products.filter((product)=>{
      return Object.values( product.category).join("").toLowerCase().includes(item.toLowerCase())
    })
    setArray(result)
  }
  console.log(array)
  const checked = array.length < 1 ? "false" : "true"
  return (
    <div>
      <BrowserRouter>
      <TopNavbar  term={searchTerm} searchKeyword={searchHandler}/>
      <Navbar products={products} searchKeyword={filterHandler}/>
      <Routes>
        <Route path="/" element={<Home products={searchTerm.length < 1 ? products : searchResults} checked={checked} array={array}/>}/>
        <Route path="/Shopingcart" element={<ShopingCart/>}/>
        <Route path="/shop" element={<Shops/>}/>
        <Route path="/product/:productId" element={<ShopDetail/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contactus" element={<Newcontactus/>}/>
      </Routes>
      </BrowserRouter>
      <BackToTopButton></BackToTopButton>
      <Footer />
    </div>
  );
}
export default App; 