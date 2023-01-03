import React from "react";
import Feature from "../components/Features/Feature";
import Offersection from "../components/OffersSection/Offersection";
import ProductsSection from "../components/ProductsSection/ProductsSection";
import Trandy from "./../components/Trandy/Trandy";
import Subscriber from "../components/Subscriber/Subscriber";
import JustArrived from "./../components/JustArrived/JustArrived";
import OwlDemo from "../components/Footer/OwlDemo";

const Home = () => {
  return (
    <div>
       <Feature />
      <ProductsSection />
      <Offersection />
      <Trandy />
      <Subscriber />
      <JustArrived />
      <OwlDemo/> 
    </div>
  );
};

export default Home;
