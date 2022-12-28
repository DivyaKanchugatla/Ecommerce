import React from "react";
import "./Trandy.css";
import { ADD_CART } from "../../store/actions/CartActions";
import { useDispatch } from "react-redux";
const data = [
  {
    id: 31,
    image: "https://technext.github.io/eshopper/img/product-1.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 32,
    image: "https://technext.github.io/eshopper/img/product-2.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 33,
    image: "https://technext.github.io/eshopper/img/product-3.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 34,
    image: "https://technext.github.io/eshopper/img/product-4.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 35,
    image: "https://technext.github.io/eshopper/img/product-5.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 36,
    image: "https://technext.github.io/eshopper/img/product-6.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 37,
    image: "https://technext.github.io/eshopper/img/product-7.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
  {
    id: 38,
    image: "https://technext.github.io/eshopper/img/product-8.jpg",
    title: "Colorful Stylish Shirt",
    price: 123,
    cross_price: 123,
  },
];

function Trandy() {
  const dispatch=useDispatch()
  return (
    <>
      <div className="trandy-heading-container">
      <h2 className="decorated mb-4"><span>Trandy Products</span></h2>
      </div>
      <div className="container-fluid pt-5">
         <div className="row">
         {data.map((product,index) => {
                  const {title,image,price} = product; 
           return (
                 <div className="col-12 col-md-6 col-lg-3 pb-1"  key={index}>
                 
                         <div className="card border-0 mb-4">
                             <div className="card-header p-0 product-img border bg-transparent overflow-hidden">
                                 <img className="img-fluid w-100 h-100 img-styling" src={image} alt=""/>
                             </div>
                             <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                 <h6 className="text-truncate mb-3">{title}</h6>
                                 <div className="d-flex justify-content-center" >
                                     <h6>${price}</h6><h6 className="text-muted ml-2"><del>${price}</del></h6>
                                 </div>
                             </div>
                             <div className="card-footer d-flex justify-content-between bg-light border">
                             
                        
                               <a href="/" className="text-dark p-0"><i className="fas fa-eye mr-1 fas-color"></i><span className="view-button">View Detail</span></a>
                                
                               <button   onClick={()=>dispatch({type:ADD_CART,payload:product})} className="text-dark p-0 view-button"><i className="fas fa-shopping-cart mr-1 fas-color"></i><span className = "view-button">Add To Cart</span></button>
                             </div>
                         </div>
                     </div>
                   
                  );
                 })}
         </div>
      </div>
           
      
    </>
  )
}

export default Trandy;
