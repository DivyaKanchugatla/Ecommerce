import React from 'react';
import './OurShoppingHeader.css'

const OurShop = () => {
  return (
    <>
        <div className="container-fluid">
          <div className='row'>
        <div className="ourShop-container text-center" style={{minHeight:"300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">SHOPPING CART</h1>
            <div className="d-inline-flex">
                <p className="m-1 ourShop-heading" style={{display:"inline"}}><a href="/"  className='ourShop-heading'>Home</a></p>
                <p className="m-1 px-2 ourShop-paragraph" style={{display:"inline"}}>-</p>
                <p className="ourShop-paragraph" style={{display:"inline"}}>Shopping cart</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default OurShop;