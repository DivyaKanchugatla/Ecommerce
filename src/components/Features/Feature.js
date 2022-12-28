import React from 'react'
import './Feature.css'



const Feature = () => {
  return (
  <div className="container-fluid pt-5">
      <div className="row  pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card d-flex  flex-row justify-content-center  text-center  p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D19C97" style={{height:'40px',width:'40px'}}><path d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                  <h5 className="font-weight-semi-bold text-ceter  m-2 pt-1">Quality Product</h5>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card d-flex  flex-row justify-content-center  text-center  p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#D19C97" style={{height:'40px', width:'40px'}}><path d="M112 0C85.5 0 64 21.5 64 48V96H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 272c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 48c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 240c8.8 0 16 7.2 16 16s-7.2 16-16 16H64 16c-8.8 0-16 7.2-16 16s7.2 16 16 16H64 208c8.8 0 16 7.2 16 16s-7.2 16-16 16H64V416c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H112zM544 237.3V256H416V160h50.7L544 237.3zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm368-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/>
              </svg>
                  <h5 className="font-weight-semi-bold text-center m-2 pt-1">Free Shipping</h5>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card d-flex  flex-row justify-content-center  text-center  p-3 mb-4" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D19C97" style={{height:'40px',width:'40px'}}>
                <path d="M32 96l320 0V32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l96 96c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-96 96c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160L32 160c-17.7 0-32-14.3-32-32s14.3-32 32-32zM480 352c17.7 0 32 14.3 32 32s-14.3 32-32 32H160v64c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-96-96c-6-6-9.4-14.1-9.4-22.6s3.4-16.6 9.4-22.6l96-96c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 64H480z"/>
                </svg>
                  <h5 className="font-weight-semi-bold m-2 pt-1">14-Day Return</h5>
              </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card d-flex  flex-row justify-content-center  text-center p-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#D19C97" style={{height:'40px',width:'40px'}}>
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
              </svg>
                  <h5 className="font-weight-semi-bold m-2 pt-1">24/7 Support</h5>
              </div>
          </div>
      </div>
  </div>

)
}

export default Feature