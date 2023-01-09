import React from 'react'
import { DefaultConstants } from '../../../constants/constants'
import './PageHeader.css'

//Done by Kanchugatla Divya
const PageHeader = () => {
  return (
    <>
        <div className="container-fluid">
        <div className='row'>
        <div className="ShopDetail-container" style={{minHeight:"300px"}}>
            <h1 className="font-weight-semi-bold text-uppercase mb-3">{DefaultConstants.SHOPDETAIL}</h1>
            <div className="d-inline-flex">
                <p className="m-1 ShopDetail-heading" style={{display:"inline"}}><a href="/" className='ShopDetail-heading'>{DefaultConstants.HOME}</a></p>
                <p className="m-1 px-2 ShopDetail-paragraph" style={{display:"inline"}}>-</p>
                <p className="ShopDetail-paragraph" style={{display:"inline"}}>{DefaultConstants.SHOPDETAIL}</p>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default PageHeader;