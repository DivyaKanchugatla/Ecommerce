import React from 'react'
import './Filters.css'

const Filters = ({filterHandler}) => {
    const priceArray = [
        {price:"All Price", avail:"1000"},
        {price:"100", avail:"150"},
        {price:"200", avail:"295"},
        {price:"300", avail:"246"},
        {price:"400", avail:"145"},
        {price:"500", avail:"168"}
    ]

    const colorArray = [
        {price:"All Colour", avail:"1000"},
        {price:"Black", avail:"150"},
        {price:"White", avail:"295"},
        {price:"Red", avail:"246"},
        {price:"Blue", avail:"145"},
        {price:"Green", avail:"168"}
    ]

    const sizeArray = [
        {price:"All Size", avail:"1000"},
        {price:"XS", avail:"150"},
        {price:"S", avail:"295"},
        {price:"M", avail:"246"},
        {price:"L", avail:"145"},
        {price:"XL", avail:"168"}
    ]
    const filterFunc = (items,head) => 
        <div className='border-bottom mb-4 pb-4'>
        <h5 className="font-weight-semi-bold mb-4 filter-heading">{head}</h5>
                        {items.map((item,index) => (
                            <div className='d-flex justify-content-between mb-2' key={index}>
                                <div>
                                    <input type="checkbox" className="" id="price-all" onClick={()=>filterHandler(item.price)} name="filter"/>
                                    <label className="pl-2" htmlFor="price-all">{item.price}</label>
                                </div>
                                <span className="border font-weight-normal badge-span">{item.avail}</span>
                            </div>
                        ))}
         
        
        </div>               

  return (
       
    <>
        {filterFunc(priceArray, "Filter By Price")}
        {filterFunc(colorArray,"Filter By Color")}
        {filterFunc(sizeArray,"Filter By Size")}
    </>      
  )}
  export default Filters;