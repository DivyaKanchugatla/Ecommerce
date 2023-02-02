import React from 'react'
import './Filters.css'

const Filters = () => {
    const priceArray = [
        {price:"All Price", avail:"1000"},
        {price:"$0 - $100", avail:"150"},
        {price:"$100 - $200", avail:"295"},
        {price:"$200 - $300", avail:"246"},
        {price:"$300 - $400", avail:"145"},
        {price:"400 - $500", avail:"168"}
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
                        {items.map((item) => (
                            <div className='d-flex justify-content-between mb-2'>
                                <div>
                                    <input type="checkbox" className="" id="price-all" />
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