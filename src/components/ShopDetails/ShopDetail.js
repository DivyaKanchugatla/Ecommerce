import React from 'react'
import PageHeader from './PageHeader/PageHeader'
import Description from './Description/Description'
import ProductDetail from './ProductDetail/ProductDetail'
import ProductCarousel from './ProductCarousel/ProductCarousel'
const ShopDetail = () => {
  return (
    <>
        <PageHeader/>
        <ProductDetail/>
        <Description/>
        <ProductCarousel/>
    </>
  )
}

export default ShopDetail