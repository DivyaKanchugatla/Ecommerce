import React from 'react'
import { DefaultConstants } from '../../constants/constants'
import OffersectionCard from './OffersectionCard'
import './Offersection.css'

//done by kumar swamy
const Offersection = () => {
  return (
    
    <div className='container-fluid pt-3 mt-3 mb-3'>
            <div className='row px-xl-5'>
                <div className='col-md-6'>
                    <OffersectionCard heading={DefaultConstants.TWENTYPERCENTAGEOFFTHEALLORDER} description={DefaultConstants.SPRINGCOLLECTION} image={'https://technext.github.io/eshopper/img/offer-1.png'} orderzero={'order-0'} orderone={'order-1'} text={'text-end mr-3'}/>
                </div>
                <div className='col-md-6'>
                    <OffersectionCard heading={DefaultConstants.TENOFFYOURFIRSTORDER} description={DefaultConstants.WINTERCOLLECTION} image={'https://technext.github.io/eshopper/img/offer-2.png'} orderzero={'order-1'} orderone={'order-0'} text={'text-start ml-3 align-end justify-content-end'}/>
                </div> 
            </div>    
        </div>
  )
}

export default Offersection