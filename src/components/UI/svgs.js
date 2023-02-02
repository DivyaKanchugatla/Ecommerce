import React from 'react'

const Svgs = (props) => {
  const {viewBox,d}=props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`${viewBox}`} fill="#D19C97" style={{height:'40px',width:'40px'}}><path d={`${d}`}/></svg>
  )
}

export default Svgs