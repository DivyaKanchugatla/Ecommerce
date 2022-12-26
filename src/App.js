import React from "react";
import Navbar from "./components/MainNavbar/Navbar";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import Trandy from "./components/Trandy/Trandy";
import Subscriber from "./components/Subscriber/Subscriber";
import JustArrived from "./components/JustArrived/JustArrived";

const App = () => {
  return (
    <>
      <TopNavbar />
      <Navbar />

      <Trandy />
      <Subscriber />
      <JustArrived />
    </>
  );
};

export default App;
