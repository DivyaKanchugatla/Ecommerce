import React from 'react';
import { useNavigate } from "react-router-dom";
import { DefaultConstants } from '../../constants/constants';
import './Button.css'

//done by kumar swamy

const Button = () => {
  const navigator=useNavigate()
  
  const goToShopHandler=()=>{
    navigator('/shop')
  }
  
  return (
          <button className='btn btn-sm fs-6 fst-normal shop-now-button' onClick={goToShopHandler}>{DefaultConstants.SHOPNOW}</button>
    )
}

export default Button