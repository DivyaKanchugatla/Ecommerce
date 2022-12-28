import React from "react";
import "./ProductsSection.css";




const data = [
  {
  id:1, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-1.jpg",
  title:"men's Dresses"
},
{
  id:2, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-2.jpg",
  title:"Women's Dresses"
},
{
  id:3, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-3.jpg",
  title:"Baby's Dresses"
},
{
  id:4, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-4.jpg",
  title:"Accessories"
},
{
  id:5, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-5.jpg",
  title:"Bags"
},
{
  id:6, 
  imgSrc:"https://technext.github.io/eshopper/img/cat-6.jpg",
  title:"Shoes"
},
]

const ProductsSection = () => {
  
    return (  
      
      <div className='container-fluid'>
        <div className="row">
        {data.map((product)=> {
          return(
            <div className="col-12 col-md-6 col-lg-4" key={product.id}> 
            <div  className="card mb-4  border" >
              <div className="text-end pr-4 pt-4 mr-2 products-section-heading"> 
                <p> 15 Products</p>
              </div>
          <div className="overflow-hidden p-3">
            <img src={product.imgSrc} className="products-section-image image-fluid" alt={product.title} />
            </div> 
          <div className="card-body">
            <h5 className="card-title fw-bold">{product.title}</h5>
          </div>
        </div>
        </div>
          )
          })}
        </div>
        </div>
      )
  }


export default ProductsSection