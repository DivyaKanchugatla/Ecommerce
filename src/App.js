import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Home/Home";
import TopNavbar from './components/TopNavbar/TopNavbar';
import Navbar from './components/MainNavbar/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
