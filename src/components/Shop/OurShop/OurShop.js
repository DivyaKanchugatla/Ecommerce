import React from 'react'
import { DefaultConstants } from '../../../constants/constants';
import './OurShop.css'

const OurShop = () => {
  return (
    <>
        <div className="container-fluid">
          <div className='row'>
        <div className="ourShop-container" style={{minHeight:"300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">{DefaultConstants.OURSHOP}</h1>
            <div className="d-inline-flex">
                <p className="m-1 ourShop-heading" style={{display:"inline"}}><a href="/" className='ourShop-heading'>{DefaultConstants.HOME}</a></p>
                <p className="m-1 px-2 ourShop-paragraph" style={{display:"inline"}}>-</p>
                <p className="ourShop-paragraph" style={{display:"inline"}}>{DefaultConstants.SHOP}</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default OurShop;