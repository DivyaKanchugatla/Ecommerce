import React from 'react';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";
import './Rating.css'

const Rating = ({rating}) => {
 const ratingStar = Array.from({length:5},(elem,index) => {
     let number = index + 0.5;
     return(
     <span key={index}>
     {
       rating >= index + 1 ? <FaStar/> : rating >= number ? (<FaStarHalfAlt/>) : (<AiOutlineStar/>)
     }
    </span>
     )
  });
  return (
    <div className='svg'>
    {ratingStar}
    </div>
  )
}

export default Rating