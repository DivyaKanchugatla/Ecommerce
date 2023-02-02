import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {fetchProducts} from "../../../store/actions/ProductActions"
import { DefaultConstants } from '../../../constants/constants';
import { Link } from 'react-router-dom';
import './ProductComponent.css'


const Testing = () => {
  const dispatch = useDispatch();
  const products=useSelector((state)=>state.allProducts.products);
  const [searchInput, setSearchInput] = useState("")
  const [sort, setSort] = useState(null);
  const [filterByPrice, setFilterByPrice] = useState({
    all: true,
    between0and200: false,
    between201and400: false,
    between401and600: false,
    between601and800: false,
    between801and1000: false,
  })

  const handleCheckbox = (e) => {
    const {name, checked} = e.target 
    setFilterByPrice((previousState) => {
      if (name === "all") {
        return {
          all: checked,
          between0and200: false,
          between201and400: false,
          between401and600: false,
          between601and800: false,
          between801and1000: false,
        }
        
      } else {
        return {
          ...previousState, [name]: checked, all: false 
        }
      }
    })
  };
  const filteredProducts = products.filter((product)=>{
    if (filterByPrice.all){
      return true 
    } 
    else if (filterByPrice.between0and200 && product.price >= 0 && product.price <= 200){
      return true 
    }
    else if (filterByPrice.between201and400 && product.price >= 201 && product.price <= 400){
      return true 
    }
    else if (filterByPrice.between401and600 && product.price >= 401 && product.price <= 600){
      return true 
    }
    else if (filterByPrice.between601and800 && product.price >= 601 && product.price <= 800){
      return true 
    }
    else if (filterByPrice.between801and1000 && product.price >= 801 && product.price <= 1000){
      return true 
    }
    return false 
  })

  const sortOptions = { 
    az: {
      sortMethod: (a, b) =>
        a.title > b.title ? 1 : a.title === b.title ? 0 : -1,
    },
    za: {
      sortMethod: (a, b) =>
        b.title > a.title ? 1 : a.title === b.title ? 0 : -1,
    },
    priceLow: {
      sortMethod: (a, b) => a.price - b.price,
    },
    priceHigh: {
      sortMethod: (a, b) => b.price - a.price,
    },
    ratingLow: {
      sortMethod: (a, b) => a.rating?.rate - b.rating?.rate,
    },
    ratingHigh: {
      sortMethod: (a, b) => b.rating?.rate - a.rating?.rate,
    },
  };
  const Results = filteredProducts.filter((each) =>
    each.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  const searchInputHandler = (e) => {setSearchInput(e.target.value)}
  useEffect(()=>{
    dispatch(fetchProducts());
},[dispatch])


  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-12">
            <div className="border-bottom mb-4 pb-4">
              <h5 className="font-weight-semi-bold mb-4 filter-heading">Filter by price</h5>
              <form>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input type="checkbox"
                      name="all"
                      checked={filterByPrice.all}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-all">All Price</label>
                  </div>
                  <span className="border font-weight-normal badge-span">1000</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input type="checkbox"
                      name="between0and200"
                      checked={filterByPrice.between0and200}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-1">$0 - $200</label>
                  </div>
                  <span className="border font-weight-normal badge-span">150</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input type="checkbox"
                      name="between201and400"

                      checked={filterByPrice.between201and400}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-2">$201 - $400</label>
                  </div>
                  <span className="border font-weight-normal  badge-span">295</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input type="checkbox"
                      name="between401and600"
                      checked={filterByPrice.between401and600}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-3">$401 - $600</label>
                  </div>
                  <span className="border font-weight-normal  badge-span">246</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div>
                    <input type="checkbox"
                      name="between601and800"
                      checked={filterByPrice.between601and800}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-4">$601 - $800</label>
                  </div>
                  <span className="border font-weight-normal  badge-span">145</span>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <input type="checkbox"
                      name="between801and1000"
                      checked={filterByPrice.between801and1000}
                      onChange={handleCheckbox} />
                    <label className="pl-2" htmlFor="price-5">$801 - $1000</label>
                  </div>
                  <span className="border font-weight-normal  badge-span">168</span>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search by name" onChange={searchInputHandler} value={searchInput} />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent span-color">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                  <div className="dropdown ml-4" style={{ display: "flex"}}> 
                    <h5 style={{marginRight:"10px"}}>
                      Sort by : 
                    </h5>
                    <select defaultValue={"az"} onChange={(e) => setSort(e.target.value)}>
                      <option value="az">A - Z</option>
                      <option value="za">Z - A</option>
                      <option value="ratingLow">Rating Low</option>
                      <option value="ratingHigh">Rating High</option>
                      <option value="priceLow">Price Low to High</option>
                      <option value="priceHigh">Price High to Low</option>
                    </select>
                  </div>
                </div>

              </div>
              {
                
                  
                    Results.sort(sortOptions[sort]?.sortMethod).map((each, index) => { 
                      return (
                        <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={index}>
                          <div className="card border-0 mb-4">
                            <div className="card-header border product-container">
                              <img src={each.image} alt="" className='product-img img-styling ' />
                            </div>
                            <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                              <h6 className="text-truncate mb-3">{each.title}</h6>
                              <div className="d-flex justify-content-center" >
                                <h6>${each.price}</h6><h6 className="text-muted ml-2"><del>${each.price}</del></h6>
                              </div>
                            </div>
                            <div className="card-footer d-flex justify-content-between bg-light border">
                              {/* <a href="a" className="btn btn-sm text-dark p-0"><i className="fas fa-eye mr-1 fas-color"></i>View Detail</a> */}
                              <Link to={`/product/${each.id}`} style={{textDecoration:"none"}} className="linkText">
                               <i className="fas fa-eye mr-1 fas-color"></i><span className='' style={{color:"black"}} >{DefaultConstants.VIEWDETAIL}</span>
                                </Link>
                                
                              <a href="a" className="btn btn-sm text-dark p-0"><i className="fas fa-shopping-cart mr-1 fas-color"></i>Add To Cart</a>
                            </div>

                          </div>
                        </div>
                      );
                    })
                  
                  
                  
              }

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Testing;
