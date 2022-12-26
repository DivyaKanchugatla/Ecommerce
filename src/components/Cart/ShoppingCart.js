import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { DECREASE_QUANTITY, DELETE_CART,INCREASE_QUANTITY} from "../../store/actions/CartActions";
import OurShop from "./OurShoppingHeader";
import './ShoppingCart.css'

const ShopingCart = () => {

  const dispatch=useDispatch()
  const items=useSelector((state)=>state._cardProduct)

  let ListCart = [];
  let TotalCart = 0;
 Object.keys(items.Carts).forEach(function (item) {
    TotalCart += items.Carts[item].quantity * items.Carts[item].price;
    ListCart.push(items.Carts[item]);
  });
  
  return (

    <>
    <OurShop/>
    <div className="container-fluid pt-5">
    <div className="row px-xl-5">
        <div className="col-lg-8 table-responsive mb-5">
          <table className="border shopping-cart-table">
            <thead className="text-center">
            <tr style={{backgroundColor:'#edf1ff'}}>
                <th className='fs-4 fw-bold p-2'>Products</th>
                <th className='fs-4 fw-bold p-2'>Price</th>
                <th className='fs-4 fw-bold p-2'>Quantity</th>
                <th className='fs-4 fw-bold p-2'>Total</th>
                <th className='fs-4 fw-bold p-2'>Remove</th>
            </tr>
            </thead>
            <tbody className="align-middle">
              {ListCart.map((item, key) => (
                <tr key={key} className="border p-2 fs-6">
                
                  <td className="center p-2 fs-6">
                    <img  style={{height:'35px',width:'35px',objectFit:'cover'}} src={item.image} alt={item.title}/>
                    <p className="align-center d-inline-block">{item.name}</p>
                  </td>
                  <td className="text-center border p-2">${item.price}</td>


                  <td className='border text-center fs-6 p-2'>
                <div className='add-icon-button-container d-flex flex-row justify-content-center text-center p-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='shopping-cart-add-icon'  onClick={()=>dispatch({type:DECREASE_QUANTITY,payload:key})}>
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                </svg>
                  <p className='d-inline-block shoping-cart-count-value'>{item.quantity}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  className='shopping-cart-add-icon'  onClick={()=>dispatch({type:INCREASE_QUANTITY,payload:key})}>
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
                  </svg>
                </div>
              </td>
                  <td className="text-center border">
                    ${(item.price* item.quantity)}
                  </td>

                  <td className='border text-center fs-4'>
                <button className="text-center" style={{border:'none',backgroundColor:'#d19c97'}} onClick={()=>dispatch({type:DELETE_CART,payload:key})}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 312 512"  fill="black"  className="align-middle remove-icon" style={{height:'20px',width:'20px', marginBottom:'5px'}}>
                  <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/>
                </svg>
                </button>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-lg-4">
        
          <div className="card border  mb-5">
            <div className="card-header shop-details-cart-sumary-card border-0 text-center">
              <h4 className="font-weight-semi-bold m-0">Cart Summary</h4>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-3 pt-1">
                <h6 className="font-weight-medium">Subtotal</h6>
                <h6 className="font-weight-medium">${TotalCart}</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6 className="font-weight-medium">Shipping</h6>
                <h6 className="font-weight-medium">$10</h6>
              </div>
            </div>
            <div className="card-footer border-secondary bg-transparent">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="font-weight-bold">Total</h5>
                <h5 className="font-weight-bold">${TotalCart + 10}</h5>
              </div>
              <button className="shopping-cart-proceed-to-checkout-button box-shadow">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default ShopingCart