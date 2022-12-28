import React from 'react';
import './SelectedProduct.css';

function SelectedProduct() {
  return (
    <>
        <div className="row px-xl-5">
  <div className="col-lg-5 pb-5">
    <div id="product-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner border">
        <div className="carousel-item">
          <img className="w-100 h-100" src=" https://technext.github.io/eshopper/img/product-1.jpg" alt="" />
        </div>
        <div className="carousel-item active">
          <img className="w-100 h-100" src=" https://technext.github.io/eshopper/img/product-2.jpg" alt="" />
        </div>
        <div className="carousel-item">
          <img className="w-100 h-100" src=" https://technext.github.io/eshopper/img/product-3.jpg" alt="" />
        </div>
        <div className="carousel-item">
          <img className="w-100 h-100" src=" https://technext.github.io/eshopper/img/product-4.jpg" alt="" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#product-carousel"
        data-slide="prev"
      >
        <i className="fa fa-2x fa-angle-left text-dark" />
      </a>
      <a
        className="carousel-control-next"
        href="#product-carousel"
        data-slide="next"
      >
        <i className="fa fa-2x fa-angle-right text-dark" />
      </a>
    </div>
  </div>
  <div className="col-lg-7 pb-5">
    <h3 className="colorful-heading">Colorful Stylish Shirt</h3>
    <div className="d-flex mb-3">
      <div className="text-primary mr-2">
        <small className="fas fa-star star" />
        <small className="fas fa-star star" />
        <small className="fas fa-star star" />
        <small className="fas fa-star-half-alt star" />
        <small className="far fa-star star" />
      </div>
      <small className="pt-1">(50 Reviews)</small>
    </div>
    <h3 className="colorful-heading mb-4">$150.00</h3>
    <p className="mb-4">
      Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam
      stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem magna lorem
      ut. Erat lorem duo dolor no sea nonumy. Accus labore stet, est lorem sit
      diam sea et justo, amet at lorem et eirmod ipsum diam et rebum kasd rebum.
    </p>
    <div className="d-flex mb-3">
      <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
      <form>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input star"
            id="size-1"
            name="size"
          />
          <label className="custom-control-label" htmlFor="size-1">
            XS
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input star"
            id="size-2"
            name="size"
          />
          <label className="custom-control-label" htmlFor="size-2">
            S
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input star"
            id="size-3"
            name="size"
          />
          <label className="custom-control-label" htmlFor="size-3">
            M
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input star"
            id="size-4"
            name="size"
          />
          <label className="custom-control-label" htmlFor="size-4">
            L
          </label>
        </div>
        <div className="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            className="custom-control-input star"
            id="size-5"
            name="size"
          />
          <label className="custom-control-label" htmlFor="size-5">
            XL
          </label>
        </div>
      </form>
    </div>
    <div className="d-flex flex-row mb-4">
      <p className="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
      <form>
        <div className="mr-3" style={{display:"inline-block"}}>
          <input
            type="radio"
            className="star"
            id="specifyColor"
            name="color"
          />
          <label className="ml-1" htmlFor="specifyColor">
            Black
          </label>
        </div>
        <div className="mr-3" style={{display:"inline-block"}}>
          <input
            type="radio"
            className="star"
            id="specifyColor"
            name="color"
          />
          <label className="ml-1" htmlFor="specifyColor">
            White
          </label>
        </div>
        <div className="mr-3" style={{display:"inline-block"}}>
          <input
            type="radio"
            className="star"
            id="specifyColor"
            name="color"
          />
          <label className="ml-1" htmlFor="specifyColor">
            Red
          </label>
        </div>
        <div className="mr-3" style={{display:"inline-block"}}>
          <input
            type="radio"
            className="star"
            id="specifyColor"
            name="color"
          />
          <label className="ml-1" htmlFor="specifyColor">
            Blue
          </label>
        </div>
        <div className="mr-3" style={{display:"inline-block"}}>
          <input
            type="radio"
            className="star"
            id="specifyColor"
            name="color"
          />
          <label className="ml-1" htmlFor="specifyColor">
            Green
          </label>
        </div>
      </form>
    </div>
    <div className="d-flex mb-4 pt-2 center">
    <div className='add-icon-button-container d-flex flex-row justify-content-center text-center p-2' style={{width:"130px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='add-icon' >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg>
                <p class="d-inline-block count-value">0</p>
                 {/* <p className='d-inline-block count-value'>{item.quantity}</p> */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className='add-icon'>
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                  </svg>
                </div>
                <div className='add-icon-button-container d-flex flex-row justify-content-center text-center p-2' >
                <button className=" shopdetail-addtocart-button p-2 text-center">
                      <i className="fa fa-shopping-cart shopdetail-addtocart" /> Add To Cart
                </button>
    </div>  
    </div>
    <div className="d-flex pt-2">
      <p className="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
      <div className="d-inline-flex">
        <a className="text-dark px-2" href="kd">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="text-dark px-2" href="kd">
          <i className="fab fa-twitter" />
        </a>
        <a className="text-dark px-2" href="kd">
          <i className="fab fa-linkedin-in" />
        </a>
        <a className="text-dark px-2" href="kd">
          <i className="fab fa-pinterest" />
        </a>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default SelectedProduct;