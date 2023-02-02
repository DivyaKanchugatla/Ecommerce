import React from 'react'
import './OffersectionCard.css'
import Button from '../UI/Button'
const OffersectionCard = (props) => {
    const {image,heading,description,orderzero,orderone,text}=props
  return (
    <div className='d-flex flex-row justify-content-between offer-section-image-container  mb-2' >
    <div className={`${orderzero} offersection-image-container`}>
    <img className='offer-section-girl-image' alt="girlpic" src={image}/>
    </div>
    <div className={`${orderone} ${text} pr-3  pt-3 offer-section-content-container`}>
        <h4 className='offer-section-description  fs-6 fw-normal pb-2'>{heading}</h4>
        <h1 className='fw-bold pb-2 collection-heading'>{description}</h1>
       <Button/>
        </div>
</div>
  )
}

export default OffersectionCard