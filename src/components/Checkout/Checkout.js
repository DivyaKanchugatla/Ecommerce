import React,{useState} from "react";
import { DefaultConstants } from "../../constants/constants";
import { useSelector } from "react-redux";
import "./Checkout.css";


function Checkout() {
    const [checked,setChecked]=useState(false)
    const items = useSelector((state) => state._cardProduct);
    let TotalCart = 0;
    items.Carts.forEach(function (item) {
      TotalCart += Math.round(item.quantity * item.price);
    });
    


   const proceedToCheckOutHandler=()=>{
    if(TotalCart === 0){
        alert('Please add Items to cart')
    }
    else{
        
            const options = {
                key: "rzp_test_aaQFYwRZE89zpv",
                key_secret:'06mP2OwBGzNAI3qzeyndneDh',
                currency: 'INR',
                amount: TotalCart * 100,
                name: "Ecommerce app",
                description: " Transaction",
                image:'https://thumbs.dreamstime.com/z/payment-icon-flat-style-payment-icon-flat-style-hand-holding-money-yellow-background-circle-124180489.jpg',
                
                handler: function (response) {
                  alert(response.razorpay_payment_id);
                },
                prefill: {
                  name: "kumarswamy",
                  email: "swamykumar539@gmail.com",
                  contact: "9963684670",
                },
                notes:{
                    address:'Razorpay Corporate office'
                },
                theme:{
                    color:'#d19c97'
                }
              };
            
            const pay=new window.Razorpay(options)
            pay.open()
            }
   }

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
          <div className="col-lg-8">
                <div className="mb-4">
                    <h4 className="font-weight-semi-bold">{DefaultConstants.BILLINGADDRESS}</h4>
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.FIRSTNAME}</label>
                            <input className="checkout-input" type="text" placeholder="John"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.LASTNAME}</label>
                            <input className="checkout-input" type="text" placeholder="Doe"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label">{DefaultConstants.EMAIL1}</label>
                            <input className="checkout-input"  type="text" placeholder="example@email.com"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text" >{DefaultConstants.MOBILENO}</label>
                            <input  className="checkout-input"  type="text" placeholder="+123 456 789"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.ADDRESSLINE1}</label>
                            <input className="checkout-input"  type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.ADDRESSLINE2}</label>
                            <input  className="checkout-input" type="text" placeholder="123 Street"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="country">{DefaultConstants.COUNTRY}</label>
                            <select className="checkout-select" defaultValue='Unites States' id="country">
                                <option >United States</option>
                                <option>Afghanistan</option>
                                <option>Albania</option>
                                <option>Algeria</option>
                            </select>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.CITY}</label>
                            <input  className="checkout-input" type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group" htmlFor="text">
                            <label className="checkout-label">{DefaultConstants.STATE}</label>
                            <input className="checkout-input"  type="text" placeholder="New York"/>
                        </div>
                        <div className="col-md-6 form-group">
                            <label className="checkout-label" htmlFor="text">{DefaultConstants.ZIPCODE}</label>
                            <input className="checkout-input" type="text" placeholder="123"/>
                        </div>
                        <div className="col-md-12 form-group">
                            <div>
                                <input type="checkbox" className="checkout-checkbox" id="newaccount"/>
                                <label className="checkout-check-text checkout-label" htmlFor="newaccount">Create an account</label>
                            </div>
                        </div>
                        <div className="col-md-12 form-group">
                            <div>
                                <input onChange={()=>setChecked(!checked)} type="checkbox" className="checkout-checkbox" id="shipto"/>
                                <label className="checkout-check-text checkout-label mb-4" htmlFor="shipto"  >Ship to different address</label>
                            </div>
                        </div>
                    </div>
                </div>
               {checked && (
                    <div className=" mb-4" id="shipping-address">
                        <h4 className="font-weight-semi-bold mb-4">Shipping Address</h4>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.FIRSTNAME}</label>
                                <input className="checkout-input" type="text" placeholder="John"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.LASTNAME}</label>
                                <input className="checkout-input" type="text" placeholder="Doe"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.EMAIL1}</label>
                                <input className="checkout-input"  type="text" placeholder="example@email.com"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.MOBILENO}</label>
                                <input  className="checkout-input"  type="text" placeholder="+123 456 789"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.ADDRESSLINE1}</label>
                                <input className="checkout-input"  type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="text">{DefaultConstants.ADDRESSLINE2}</label>
                                <input  className="checkout-input" type="text" placeholder="123 Street"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="states">{DefaultConstants.COUNTRY}</label>
                                <select className="checkout-select" id='states'>
                                    <option>United States</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                </select>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="city">{DefaultConstants.CITY}</label>
                                <input  className="checkout-input" type="text" placeholder="New York" id='city'/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="state">{DefaultConstants.STATE}</label>
                                <input className="checkout-input"  type="text" placeholder="New York" id="state"/>
                            </div>
                            <div className="col-md-6 form-group">
                                <label className="checkout-label" htmlFor="zipcode">{DefaultConstants.ZIPCODE}</label>
                                <input className="checkout-input" type="text" placeholder="123" id="zipcode"/>
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
            <div className="col-lg-4">
                <div className="checkout-billing-card">
                    <div className="checkout-billing-card-header ">
                        <h4 className="font-weight-semi-bold m-0">{DefaultConstants.ORDERTOTAL}</h4>
                    </div>
                    <div className="checkout-card-body">
                        <h5 className="checkout-item mb-3">{DefaultConstants.PRODUCTS}</h5>
                    <ul style={{listStyle:'none'}}>
                       { items.Carts.map((item, index) => {
                    return (
                            <div className="d-flex justify-content-between" key={index}>
                            <li className="checkout-card-products three-dots">{item.name}</li>
                            <li className="checkout-card-products">{item.price}</li>
                        </div>
                      )
                     })}
                     </ul>

                      <hr className="mt-0 checkout-hr"/>
                        <div className="d-flex justify-content-between mb-4 pt-3">
                            <h6 className="checkout-items">{DefaultConstants.SUBTOTAL}</h6>
                            <h6 className="checkout-items">{TotalCart}</h6>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h6 className="checkout-items">{DefaultConstants.SHIPPING}</h6>
                            {TotalCart >= 150 ? <h6 className="checkout-items">$0</h6>:<h6 className="checkout-items">$10</h6>}
                        </div>
                    </div>
                    <div className="checkout-total-container">
                        <div className="d-flex justify-content-between mt-2">
                            <h5 className="checkout-total">{DefaultConstants.TOTAL}</h5>
                            {TotalCart >= 150 ? <h5 className="checkout-total">{TotalCart}</h5>:<h5 className="checkout-total">{TotalCart +10}</h5> }
                            </div>
                    </div>
                </div>


                <div className="checkout-billing-card">
                    <div className="checkout-billing-card-header ">
                        <h4 className="font-weight-semi-bold m-0">{DefaultConstants.PAYMENT}</h4>
                    </div>
                    <div className="checkout-total-container">
                        <button className="checkout-button" onClick={proceedToCheckOutHandler}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;