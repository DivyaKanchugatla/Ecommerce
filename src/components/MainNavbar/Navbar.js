import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Carousel from "./Carousel";
import Login from "../LoginPage/Login";
import { DefaultConstants } from "../../constants/constants";
import SignUp from '../LoginPage/SignUp'
import "./Navbar.css";

const Dresses = [
 { dress:DefaultConstants.MENSDRESSES,click:"men"},{dress:DefaultConstants.WOMENSDRESSES,click:"women"}, {dress:DefaultConstants.BABAYSDRESSES,click:"baby"}
]
const categoryItems = [
  {category:DefaultConstants.SHIRTS,click:"shirts"},{category:DefaultConstants.JEANS,click:"jeans"},{category:DefaultConstants.SWIMWEAR,click:"swim"},{category:DefaultConstants.SLEEPWEAR,click:"sleep"},{category:DefaultConstants.SPORTSWEAR,click:"sports"},{category:DefaultConstants.SWIMWEAR,click:"swim"},{category:DefaultConstants.BLAZERS,click:"blazers"},{category:DefaultConstants.JACKETS,click:"jackets"},{category:DefaultConstants.SHOES,click:"shoes"}
]

//Done by Kanchugatla Divya
const Navbar = (props) => {
  const [loginModal, setLoginmodal] = useState(false);
  const [isLogined, setIslogined] = useState(false);
  const [userName, setUserName] = useState("");
  const [registerModal,setRegisterModal]=useState(false)

   //check the cuurent location
   const location=useLocation()

   //this for open login modal
  const loginHandlermodal = (value) => {
    setLoginmodal(value);
  };

  //aftre login logout button
  const logoutButtonShow = (value) => {
    setIslogined(value);
  };

  //user Details hanlder
  const userDetailshandler = (details) => {
    const nameuser = details[0].firstName + details[0].lastName;
    setUserName(nameuser);
    console.log(nameuser)
    console.log(details)
  };
  //  const products = useSelector((state) => state.allProducts.products);
  // const productId = products?.map((product) => {
  //    return product.id;
  //  });
  //  console.log(productId[0]);
  
   
  //register modal
  const signupHandlermodal=(value)=>{
    setRegisterModal(value)
  }

  //create account handler when click signup here
  const createAccountHanlder=(value)=>{
    setRegisterModal(value)
  }

  //login modal show after user register succesfully registered
  const loginModalShowAfterRegister=(value)=>{
    setLoginmodal(value)
  }
  const filterResult = (item) => {
    props.searchKeyword(item);
    
  }
 
  return (
    <>
      {/* MainNavbar starts from here */}
      <div className="container-fluid mb-5">
        <div className="row border-top px-xl-5">
          {/* categories dropdown starts from here */}
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn shadow-none d-flex align-items-center justify-content-between text-white w-100 categoriesdropdown"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{
                height: "65px",
                backgroundColor: "#D19C97",
                marginTop: "-1px",
                padding: "0 30px",
                ariaExpanded: "true",
              }}
            >
              <h6 className="m-4 text-dark heading-text">{DefaultConstants.CATEGORIES}</h6>
              <i className="fa fa-angle-down text-dark"></i>
            </a>
            <nav
              className="navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 collapse show navoverplay"
              id="navbar-vertical"
            >
              <div
                className="navbar-nav w-100 overflow-hidden"
                style={{ height: "497px" }}
              >
                <div className="nav-item dropdown">
                  <a
                    href="/"
                    className="nav-link  d-flex align-items-center justify-content-between"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      height: "50px",
                      marginTop: "-1px",
                      padding: "0 30px",
                    }}
                  >
                    <span className="m-4">{DefaultConstants.DRESSES}</span>
                    <i className="fa fa-angle-down float-right mt-1"></i>
                  </a>
                      <div
                      className="dropdown-menu position-absolute border-0 rounded-0 w-100 m-0"
                      style={{ backgroundColor: "#EDF1FF" }}
                    >
                       {Dresses.map((item,index)=>{
                    return(
                      <button className="dropdown-item" key={index} onClick={()=>filterResult(item.click)}>
                        {item.dress}
                      </button>                   
                    )
                  })}
                   </div>
                </div>
                <div style={{ paddingLeft: "42px" }}>
                  {categoryItems.map((item,index)=>{
                    return(
                      <a href="/" className="nav-item nav-link text-color" key={index}>
                    {item.category}
                  </a>
                    )
                  })}                  
                </div>
              </div>
            </nav>
          </div>
          {/* categories dropdown ends here */}

          {/* Home Navbar and carousel code starts from here */}
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              {/*To display Eshopper Anchor tag for mobile devices*/}
              <a href="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0 display-5 font-weight-semi-bold">
                  <span className="E-text font-weight-bold border px-3 mr-1">
                    {DefaultConstants.E}
                  </span>
                  <span className="heading">{DefaultConstants.SHOPPER}</span>
                </h1>
              </a>
              {/*Eshopper Anchor tag ends here*/}
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* Home Navbar starts from here */}
              <div
                className="collapse navbar-collapse justify-content-between d-lg-block"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link to="/" className="nav-item nav-link items">
                    {DefaultConstants.HOME}
                  </Link>
                  <Link to="/shop" className="nav-item nav-link items">
                    {DefaultConstants.SHOP}
                  </Link>
                  <Link to="/product/1" className="nav-item nav-link items">
                    {DefaultConstants.SHOPDETAIL}
                  </Link>
                  <div className="nav-item dropdown">
                    <a
                      href="/"
                      className="nav-link dropdown-toggle items"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                     {DefaultConstants.PAGES}
                    </a>
                    <div className="dropdown-menu rounded-0 m-0">
                      <Link to="/Shopingcart" className="dropdown-item items">
                       {DefaultConstants.SHOPPINGCART}
                      </Link>
                      <Link to="/checkout" className="dropdown-item items">
                       {DefaultConstants.CHECKOUT}
                      </Link>
                    </div>
                  </div>
                  <Link to="/contactus" className="nav-item nav-link items">
                   {DefaultConstants.CONTACT}
                  </Link>
                </div>
                {isLogined ? (
                  <div className="navbar-nav cartCheck py-0">
                    <p className="font-weight-bold nav-item nav-link items">
                      {userName}
                    </p>
                    <p
                      onClick={() => setIslogined(false)}
                      className="loginButton border-none nav-item nav-link items"
                    >
                      {DefaultConstants.LOGOUT}
                    </p>
                  </div>
                ) : (
                  <div className="navbar-nav cartCheck py-0">
                    <p
                      onClick={() => setLoginmodal(true)}
                      className="loginButton border-none nav-item nav-link items"
                    >
                      {DefaultConstants.LOGIN}
                    </p>
                    <p onClick={()=>setRegisterModal(true)} className="nav-item nav-link items">
                      Register
                    </p>
                  </div>
                )}
              </div>
            </nav>
            <div>
              {loginModal && (
                <Login
                  logOutShow={logoutButtonShow}
                  modalClose={loginHandlermodal}
                  userDetailsGet={userDetailshandler}
                  createAccount={createAccountHanlder}
                />
              )}
            </div>
            {/* register modal */}
            <div>
              {registerModal && (
                <SignUp
                  modalClose={signupHandlermodal}
                  loginModalOpen={loginModalShowAfterRegister}
                />
              )}
            </div>
            {/* Home Navbar ends here */}

            {/* This is coursel code */}
            {location.pathname === "/" && <Carousel />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;