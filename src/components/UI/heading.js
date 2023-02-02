import React from 'react'

//done by kumar swamy

const Heading = (props) => {
    const {heading}=props
  return(
    <h1 className='font-weight-semi-bold text-ceter  m-2'>{heading}</h1>
  )
}

export default Heading