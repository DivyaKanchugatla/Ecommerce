import React from 'react'
import './Filters.css'

const Filters = () => {
  return (
       
           <>
               <div className="border-bottom mb-4 pb-4">
                    <h5 className="font-weight-semi-bold mb-4 filter-heading">Filter by price</h5>
                    <form>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="price-all" />
                            <label className="pl-2" htmlFor="price-all">All Price</label>
                            </div>
                            <span className="border font-weight-normal badge-span">1000</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="price-1"/>
                            <label className="pl-2" htmlFor="price-1">$0 - $100</label>
                            </div>
                            <span className="border font-weight-normal badge-span">150</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="price-2"/>
                            <label className="pl-2" htmlFor="price-2">$100 - $200</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">295</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="price-3"/>
                            <label className="pl-2" htmlFor="price-3">$200 - $300</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">246</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="price-4"/>
                            <label className="pl-2" htmlFor="price-4">$300 - $400</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">145</span>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <input type="checkbox" className="" id="price-5"/>
                            <label className="pl-2" htmlFor="price-5">$400 - $500</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">168</span>
                        </div>
                    </form>
                </div>
               
                <div className="border-bottom mb-4 pb-4">
                    <h5 className="font-weight-semi-bold mb-4 filter-heading">Filter by color</h5>
                    <form>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="color-all"/>
                            <label className="pl-2" htmlFor="price-all">All Color</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">1000</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="color-1"/>
                            <label className="pl-2" htmlFor="color-1">Black</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">150</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="color-2"/>
                            <label className="pl-2" htmlFor="color-2">White</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">295</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="color-3"/>
                            <label className="pl-2" htmlFor="color-3">Red</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">246</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="color-4"/>
                            <label className="pl-2" htmlFor="color-4">Blue</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">145</span>
                        </div>
                        <div className="d-flex justify-content-between">
                           <div>
                            <input type="checkbox" className="" id="color-5"/>
                            <label className="pl-2" htmlFor="color-5">Green</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">168</span>
                        </div>
                    </form>
                </div>
                

                
                <div className="mb-5">
                    <h5 className="font-weight-semi-bold filter-heading mb-4">Filter by size</h5>
                    <form>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="size-all"/>
                            <label className="pl-2" htmlFor="size-all">All Size</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">1000</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="size-1"/>
                            <label className="pl-2" htmlFor="size-1">XS</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">150</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="size-2"/>
                            <label className="pl-2" htmlFor="size-2">S</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">295</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="size-3"/>
                            <label className="pl-2" htmlFor="size-3">M</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">246</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <div>
                            <input type="checkbox" className="" id="size-4"/>
                            <label className="pl-2" htmlFor="size-4">L</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">145</span>
                            </div>
                        <div className="d-flex justify-content-between">
                            <div>
                            <input type="checkbox" className="checkbox-color" id="size-5"/>
                            <label className="pl-2" htmlFor="size-5">XL</label>
                            </div>
                            <span className="badge border font-weight-normal  badge-span">168</span>
                        </div>
                    </form>
                </div>





 
                </>      
  )}
  export default Filters;