import React from 'react'
import { DefaultConstants } from '../../constants/constants'
import Button from '../UI/Button'

import './Offersection.css'

//done by kumar swamy
const Offersection = () => {
  return (
    
    <div className='container-fluid pt-3 mt-3 mb-3'>
            <div className='row px-xl-5'>
                <div className='col-md-6'>
                    <div className='small-container  d-flex flex-row justify-content-between mb-2'>
                        <div>
                        <img className='offer-section-girl-image-1' alt="girlpic" src='https://technext.github.io/eshopper/img/offer-1.png'/>
                        </div>
                        <div className='pr-3  pt-3 text-end'>
                            <h4 className='offer-section-description  fs-4 fw-normal pb-2'>{DefaultConstants.TWENTYPERCENTAGEOFFTHEALLORDER}</h4>
                            <h1 className='fs-3 fw-bold pb-2'>{DefaultConstants.SPRINGCOLLECTION}</h1>
                           <Button/>
                            </div>
                    </div>  
                </div>
                <div className='col-md-6'>
                    <div className='small-container mb-2  d-flex flex-row justify-content-between'>
                        <div className='pt-3 ml-3 justify-content-start'>
                            <h4 className='offer-section-description fs-4 fw-normal pb-2'>{DefaultConstants.TWENTYPERCENTAGEOFFTHEALLORDER}</h4>
                            <h1 className='fs-3 fw-bold pb-2'>{DefaultConstants.WINTERCOLLECTION}</h1>
                            <Button/>
                            </div>
                        <img className='offer-section-girl-image' alt="girlpic" src='https://technext.github.io/eshopper/img/offer-2.png' />
                        </div>  
                </div> 
            </div>    
        </div>
  )
}

export default Offersection