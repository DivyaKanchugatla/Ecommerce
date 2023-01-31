 import React from 'react'
 import { useEffect } from 'react';
 import { useSelector,useDispatch } from 'react-redux';
 import {fetchProducts} from '../../../store/actions/ProductActions'
 import './ProductComponent.css'
 import Filters from '../Filters/Filters';
 import SearchBar from '../SearchBar/SearchBar';
 import { Link } from 'react-router-dom';
 import { ADD_CART } from '../../../store/actions/CartActions';
 const ProductComponent = () => {
 
   const dispatch = useDispatch();
   const products=useSelector((state)=>state.allProducts.products)
 
 useEffect(()=>{
     dispatch(fetchProducts());
 },[dispatch])

   return (
     <>
      <div className="container-fluid pt-5">
         <div className="row px-xl-5">            
             <div className="col-lg-3 col-md-12">
               <Filters/>
             </div>
           
             <div className="col-lg-9 col-md-12">
                 <div className="row pb-3">
                 <div className="col-12 pb-1">
               <SearchBar/>
             </div>
                 {products?.map((product,index) => {
                  const { id,title,image,price} = product; 
           return (
                 <div className="col-lg-4 col-md-6 col-sm-12 pb-1"  key={index}>
                 
                         <div className="card border-0 mb-4">
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
                             <Link to={`/product/${id}`} style={{textDecoration:"none"}} className="linkText">
                               <i className="fas fa-eye mr-1 fas-color"></i><span className='' style={{color:"black"}} >View Detail</span>
                                </Link> 
                                <button onClick={()=>dispatch({type:ADD_CART,payload:{...product,quantity:1}})} className="text-dark p-0 view-button"><i className="fas fa-shopping-cart mr-1 fas-color"></i><span className = "view-button">Add To Cart</span></button>
                             </div>
                         </div>
                     </div>
                   
                  );
                 })}
                 </div>
                 </div>
             </div>
             </div> 
     </>
   )
 }
 export default ProductComponent;