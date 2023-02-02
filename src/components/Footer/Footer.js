import React from 'react'
import { DefaultConstants } from '../../constants/constants';
import "./Footer.css"

const Footer = () => {
    const listOfData = [
        { hreftag: "home", categorey: "Home" },
        { hreftag: "ourshop", categorey: "Our Shop" },
        { hreftag: "shopdetail", categorey: "Shop Detail" },
        { hreftag: "shopingcart", categorey: "Shoping Cart" },
        { hreftag: "checkout", categorey: "Checkout" },
        { hreftag: "contactus", categorey: "Contact Us" }
      ];
  return (
    <div>
         <div className="container-fluid bg-footer text-dark mt-5 pt-5">
        <div className="row mr-3 ml-3 pt-5">
            <div className="col-lg-4 col-md-12 mb-5 ">
                <a href="/" className="footer-e-shop-head-container text-decoration-none">
                    <h1 className="mb-4 Shopper-header"><span className="E-heading">{DefaultConstants.E}</span>{DefaultConstants.SHOPPER}</h1>
                </a>
                <p className='para'>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                <p className="mb-2 footer-icon"><i className="fas fa-map-marker-alt mr-3 icon-color"></i>{DefaultConstants.ADDRESS}</p>
                <p className="mb-2 footer-icon"><i className="fas fa-envelope mr-3 icon-color"></i>{DefaultConstants.EMAIL}</p>
                <p className="mb-0 footer-icon"><i className="fas fa-phone-alt mr-3 icon-color"></i>{DefaultConstants.PHONE}</p>
            </div>
            <div className="col-lg-8 col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">{DefaultConstants.QUICKLINKS}</h5>
                        <div className="d-flex flex-column justify-content-start">
                            {listOfData.map( (item,key) => (
                                <a key={key} className='text-dark mb-2 footer-link' href={item.hreftag}>
                                    <i className="fa fa-angle-right mr-2"></i>{item.categorey}
                                </a>
                            ))}                         
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">{DefaultConstants.QUICKLINKS}</h5>
                        <div className="d-flex flex-column justify-content-start">
                            {
                                listOfData.map((each,key)=>(
                                    <a key={key} href={each.hreftag} className='text-dark mb-2 footer-link'>
                                        <i className="fa fa-angle-right mr-2"></i>{each.categorey}
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <h5 className="quick-links-head mb-4">{DefaultConstants.NEWSLETTRE}</h5>
                        <form action="">
                            <div className="form-group">
                                <input type="text" className= "input-field " placeholder="Your Name" required="required" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="input-field" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button className="newsletter-button" type="submit">{DefaultConstants.SUBSCRIBENOW}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    </div>
  )
}

export default Footer;
