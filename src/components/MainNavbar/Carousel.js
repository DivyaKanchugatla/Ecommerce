import React from 'react'

const Carousel = () => {
  return (
    <>
     <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner " role="listbox">
                        <div className="carousel-item active" >
                            <img className="img-fluid image-container" src="https://technext.github.io/eshopper/img/carousel-1.jpg" alt=""/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-container">
                                <div className="p-3 d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-6 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                                    <a href="kd" className="btn btn-light text-dark py-2 px-3 shop-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" >
                            <img className="img-fluid image-container" src="https://technext.github.io/eshopper/img/carousel-2.jpg" alt=""/>
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-container">
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <h4 className="text-light text-uppercase  mb-3">10% Off Your First Order</h4>
                                    <h3 className="display-6 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                                    <a href="@kd" className="btn btn-light text-dark py-2 px-3 shop-button">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark ml-3">
                            <span className="carousel-control-prev-icon"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark mr-3">
                            <span className="carousel-control-next-icon"></span>
                        </div>
                    </a>
                    </div>
                    </div>
    </>
  )
}

export default Carousel