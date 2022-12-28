import React from 'react'
import './OurShop.css'

const OurShop = () => {
  return (
    <>
        <div className="container-fluid">
          <div className='row'>
        <div className="ourShop-container" style={{minHeight:"300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">Our Shop</h1>
            <div className="d-inline-flex">
                <p className="m-1 ourShop-heading" style={{display:"inline"}}><a href="noWhere" className='ourShop-heading'>Home</a></p>
                <p className="m-1 px-2 ourShop-paragraph" style={{display:"inline"}}>-</p>
                <p className="ourShop-paragraph" style={{display:"inline"}}>Shop</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default OurShop;