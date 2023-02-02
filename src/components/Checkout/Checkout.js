import React,{useState} from "react";
import { DefaultConstants } from "../../constants/constants";
import "./Checkout.css";


function Checkout() {
    const [checked,setChecked]=useState(false)
  return (
    <>
      <div className="checkout-first-container text-center d-flex flex-column justify-content-center">
        <div>
          <h2 className="checkout-heading">{DefaultConstants.CHECKOUT1}</h2>
          <div className="checkout-heading-caption">
            <p>
                <a className="checkout-heading-link" href="/">{DefaultConstants.HOME}</a>  
            </p>
            <p className="dashhh">-</p>
            <p className="chechout-checkout">{DefaultConstants.CHECKOUT}</p>
          </div>
          
        </div>
      </div>
      <div className="checkout-second-container">
      <div className="row rowww">
          <div class="col-lg-8">
                <div class="mb-4">
                    <h4 class="font-weight-semi-bold">{DefaultConstants.BILLINGADDRESS}</h4>
                    <div class="row">
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.FIRSTNAME}</label>
                            <input class="checkout-input" type="text" placeholder="John"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.LASTNAME}</label>
                            <input class="checkout-input" type="text" placeholder="Doe"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.EMAIL1}</label>
                            <input class="checkout-input"  type="text" placeholder="example@email.com"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.MOBILENO}</label>
                            <input  class="checkout-input"  type="text" placeholder="+123 456 789"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.ADDRESSLINE1}</label>
                            <input class="checkout-input"  type="text" placeholder="123 Street"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.ADDRESSLINE2}</label>
                            <input  class="checkout-input" type="text" placeholder="123 Street"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.COUNTRY}</label>
                            <select class="checkout-select">
                                <option selected>United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.CITY}</label>
                            <input  class="checkout-input" type="text" placeholder="New York"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.STATE}</label>
                            <input class="checkout-input"  type="text" placeholder="New York"/>
                        </div>
                        <div class="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.ZIPCODE}</label>
                            <input class="checkout-input" type="text" placeholder="123"/>
                        </div>
                        <div class="col-md-12 form-group">
                            <div>
                                <input type="checkbox" class="checkout-checkbox" id="newaccount"/>
                                <label class="checkout-check-text checkout-label" for="newaccount">Create an account</label>
                            </div>
                        </div>
                        <div class="col-md-12 form-group">
                            <div>
                                <input onChange={()=>setChecked(!checked)} type="checkbox" class="checkout-checkbox" id="shipto"/>
                                <label class="checkout-check-text checkout-label mb-4" for="shipto"  >Ship to different address</label>
                            </div>
                        </div>
                    </div>
                </div>
               {checked && (
                    <div class=" mb-4" id="shipping-address">
                        <h4 class="font-weight-semi-bold mb-4">Shipping Address</h4>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.FIRSTNAME}</label>
                                <input class="checkout-input" type="text" placeholder="John"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.LASTNAME}</label>
                                <input class="checkout-input" type="text" placeholder="Doe"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.EMAIL1}</label>
                                <input class="checkout-input"  type="text" placeholder="example@email.com"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.MOBILENO}</label>
                                <input  class="checkout-input"  type="text" placeholder="+123 456 789"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.ADDRESSLINE1}</label>
                                <input class="checkout-input"  type="text" placeholder="123 Street"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.ADDRESSLINE2}</label>
                                <input  class="checkout-input" type="text" placeholder="123 Street"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.COUNTRY}</label>
                                <select class="checkout-select">
                                    <option>United States</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.CITY}</label>
                                <input  class="checkout-input" type="text" placeholder="New York"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.STATE}</label>
                                <input class="checkout-input"  type="text" placeholder="New York"/>
                            </div>
                            <div class="col-md-6 form-group">
                                <label className="checkout-label">{DefaultConstants.ZIPCODE}</label>
                                <input class="checkout-input" type="text" placeholder="123"/>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
            <div class="col-lg-4">
                <div class="checkout-billing-card">
                    <div class="checkout-billing-card-header ">
                        <h4 class="font-weight-semi-bold m-0">{DefaultConstants.ORDERTOTAL}</h4>
                    </div>
                    <div class="checkout-card-body">
                        <h5 class="checkout-item mb-3">{DefaultConstants.PRODUCTS}</h5>
                        <div class="d-flex justify-content-between">
                            <p className="checkout-card-products">Colorful Stylish Shirt 1</p>
                            <p className="checkout-card-products">$150</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p className="checkout-card-products">Colorful Stylish Shirt 2</p>
                            <p className="checkout-card-products">$150</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p className="checkout-card-products">Colorful Stylish Shirt 3</p>
                            <p className="checkout-card-products">$150</p>
                        </div>
                        <hr class="mt-0 checkout-hr"/>
                        <div class="d-flex justify-content-between mb-4 pt-3">
                            <h6 class="checkout-items">{DefaultConstants.SUBTOTAL}</h6>
                            <h6 class="checkout-items">$150</h6>
                        </div>
                        <div class="d-flex justify-content-between">
                            <h6 class="checkout-items">{DefaultConstants.SHIPPING}</h6>
                            <h6 class="checkout-items">$10</h6>
                        </div>
                    </div>
                    <div class="checkout-total-container">
                        <div class="d-flex justify-content-between mt-2">
                            <h5 class="checkout-total">{DefaultConstants.TOTAL}</h5>
                            <h5 class="checkout-total">$160</h5>
                        </div>
                    </div>
                </div>
                <div class="checkout-billing-card">
                    <div class="checkout-billing-card-header ">
                        <h4 class="font-weight-semi-bold m-0">{DefaultConstants.PAYMENT}</h4>
                    </div>
                    <div class="checkout-card-body">
                        <div class="form-group">
                            <div class="custom-radio">
                                <input type="radio" class="checkout-radio" name="payment" id="paypal"/>
                                <label class="checkout-label" for="paypal">Paypal</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="custom-radio">
                                <input type="radio" class="checkout-radio" name="payment" id="directcheck"/>
                                <label class="checkout-label" for="directcheck">Direct Check</label>
                            </div>
                        </div>
                        <div class="">
                            <div class="">
                                <input type="radio" class="checkout-radio" name="payment" id="banktransfer"/>
                                <label class="checkout-label mb-0" for="banktransfer">Bank Transfer</label>
                            </div>
                        </div>
                    </div>
                    <div class="checkout-total-container">
                        <button class="checkout-button">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;