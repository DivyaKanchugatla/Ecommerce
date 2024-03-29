import React from 'react'
 import { useEffect,useState } from 'react';
 import { useSelector,useDispatch } from 'react-redux';
 import {fetchProducts,sortingProductsASC,sortingProductsDSC,filteringProducts} from '../../../store/actions/ProductActions'
 import './ProductComponent.css'
 import Filters from '../Filters/Filters';
import { Link } from 'react-router-dom';
 import { ADD_CART } from '../../../store/actions/CartActions';

 const ProductComponent = () => {
   
  const [sort,setSort]=useState('')
   const dispatch = useDispatch();
   const products=useSelector((state)=>state.allProducts.products)
  

   const sortingHandler=(e)=>{
      let inputValue=e.target.value
      setSort(inputValue)
      if(inputValue === 'az'){
      const sortedData=products.sort((a,b)=>a.title.localeCompare(b.title))
      dispatch(sortingProductsASC(sortedData))
      console.log(sortedData)}
      else{
        const sortedData=products.sort((a,b)=>b.title.localeCompare(a.title))
        dispatch(sortingProductsDSC(sortedData))
        console.log(sortedData)
      }
   }
 
  //  const [filteringArray,setfilteringArray]=useState([])
   const filterHandler = (e) => {
       console.log(e,products)
       if(Number(e)===100){
       const filteredProducts = products.filter(
        (product) => product.price >= 0 && product.price <= 100
        );
        console.log(filteredProducts)
    dispatch(filteringProducts(filteredProducts))
       }
       if(Number(e)===200){
        const filteredProducts = products.filter(
         (product) => product.price >= 0 && product.price <= 200
         );
         console.log(filteredProducts)
     dispatch(filteringProducts(filteredProducts))
        }
        if(Number(e)===300){
          const filteredProducts = products.filter(
           (product) => product.price >= 0 && product.price <= 300
           );
           console.log(filteredProducts)
       dispatch(filteringProducts(filteredProducts))
          }
          if(Number(e)===400){
            const filteredProducts = products.filter(
             (product) => product.price >= 0 && product.price <= 400
             );
             console.log(filteredProducts)
         dispatch(filteringProducts(filteredProducts))
            }
            if(Number(e)===500){
              const filteredProducts = products.filter(
               (product) => product.price >= 0 && product.price <= 500
               );
               console.log(filteredProducts)
           dispatch(filteringProducts(filteredProducts))
              }
              if(e==="All Price"){                
                   dispatch(filteringProducts(products))
                }
   }
   
   
 useEffect(()=>{
     dispatch(fetchProducts());
 },[dispatch])

   return (
     <>
      <div className="container-fluid pt-5">
         <div className="row px-xl-5">            
             <div className="col-lg-3 col-md-12">
               <Filters filterHandler={filterHandler} />
             </div>
           
             <div className="col-lg-9 col-md-12">
                 <div className="row pb-3">
                 <div className="col-12 pb-1">

                 <div className="d-flex align-items-center justify-content-between mb-4">
                            <form action="">
                                <div className="input-group">
                                    <input type="text"className="form-control" placeholder="Search by name" fdprocessedid="b2cj9t"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-transparent span-color">
                                            <i className="fa fa-search"></i>
                                        </span>
                                    </div>
                                </div>
                            </form>
                            <div className="dropdown ml-4" style={{ display: "flex" }}>
                    <h5 style={{ marginRight: "10px" }}>Sort by :</h5>
                    <select 
                      // defaultValue={"az"}
                      onChange={sortingHandler} value={sort}
                    >
                      <option value="az">A - Z</option>
                      <option value="za">Z - A</option>
                      </select>
                  </div>
                </div>
               


             </div>
                 {products.map((product,index) => {
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