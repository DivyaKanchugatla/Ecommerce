
import React from 'react'
import Heading from './heading'
import Svgs from './svgs'

const FeaturesCard = (props) => {
  const {heading,viewBox,d}=props
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card d-flex  flex-row justify-content-center align-items-center p-3 mb-4">
             <Svgs viewBox={`${viewBox}`} d={`${d}`} />
                  <Heading heading={heading} />
              </div>
          </div>
  )
}

export default FeaturesCard