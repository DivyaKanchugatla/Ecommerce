import React,{useState} from 'react'
import { sortReducer } from '../../../store/reducers/ProductReducers'
import './SearchBar.css'

const sortDropBtn = [
    {sortName:"A to Z"},
    {sortName:"Z to A"},
]

const SearchBar = () => {

    const [sort,setSort]=useState(null)
    
    const selectOption=()=>{
        
    }

  return (
    <>
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
                      onChange={(e) => setSort(e.target.value)}
                    >
                      <option value="az">A - Z</option>
                      <option value="za">Z - A</option>
                      <option value="ratingLow">Rating Low</option>
                      <option value="ratingHigh">Rating High</option>
                      <option value="priceLow">Price Low to High</option>
                      <option value="priceHigh">Price High to Low</option>
                    </select>
                  </div>
                </div>
                    
    </>
  )
}

export default SearchBar;