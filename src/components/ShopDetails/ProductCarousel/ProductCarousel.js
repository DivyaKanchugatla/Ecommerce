import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import OwlCarousel from "react-owl-carousel";
import { fetchProducts } from '../../store/Actions/ProductActions';
import { useEffect } from 'react';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import './ProductCarousel.css'
const options = {
    margin: 10,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      
      594: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200:{
          items:4
      }
    },
  };
const ProductCarousel = () => {
    const products=useSelector((state)=>state.allProducts.products)
    const dispatch=useDispatch();
 
  useEffect(()=>{
    dispatch(fetchProducts());
},[dispatch])
  return (
    <>
    
        <div className="container-fluid pt-5">
        <div className="row">
       <OwlCarousel {...options}>
        {/* <div className='d-flex'> */}
       {products.map((product,index) => {
                 const { title,image,price} = product; 
                 console.log(product)
          return (

                <div className="col-lg-3 col-md-6 col-sm-12 pb-1"  key={index}>
                        <div className="card border-0 mb-4 carousel-container">
                            <div className="card-header p-0 product-img border bg-transparent overflow-hidden position-relative">
                                <img className="img-fluid w-100 h-100 img-styling" src={image} alt=""/>
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                                <h6 className="text-truncate mb-3">{title}</h6>
                                <div className="d-flex justify-content-center" >
                                    <h6>${price}</h6><h6 className="text-muted ml-2"><del>${price}</del></h6>
                                </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                            
                                <a href="k" className="btn btn-sm text-dark p-0"><i className="fas fa-eye mr-1 fas-color"></i>View Detail</a>
                                
                                <a href="kd" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart mr-1 fas-color"></i>Add To Cart</a>
                            </div>
                        </div>
                    
                    </div>
                 );
                })}
                 {/* </div> */}
       </OwlCarousel>
                </div>
        </div>
    </>
  )
}

export default ProductCarousel