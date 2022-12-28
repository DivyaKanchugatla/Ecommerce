import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
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
                            <div className="dropdown ml-4">
                                <button className="btn border dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" fdprocessedid="fap2qg">
                                            Sort by
                                        </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                    <a className="dropdown-item" href="#kd">Latest</a>
                                    <a className="dropdown-item" href="#kd">Popularity</a>
                                    <a className="dropdown-item" href="#kd">Best Rating</a>
                                </div>
                            </div>
                        </div>
                    
    </>
  )
}

export default SearchBar;