import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DefaultConstants } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import {
  DECREASE_QUANTITY,
  DELETE_CART,
  INCREASE_QUANTITY,
} from "../../store/actions/CartActions";
import OurShop from "./OurShoppingHeader";
import "./ShoppingCart.css";

const ShopingCart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state._cardProduct);
  const navigator=useNavigate()

  let TotalCart = 0;
  items.Carts.forEach(function (item) {
    TotalCart += Math.round(item.quantity * item.price);
  });

  const TableHeadings = [
    {
      id:0,
      name:'Products',

    },
    {
      id:1,
      name:'Price',
      },
      {
        id:2,
        name:'Qunatity'
      },
      {
        id:3,
        name:'Total'
      },
      {
        id:4,
        name:'Remove'
      }
  ]

  const procedToCheckOutHandler=()=>{
    navigator('/checkout')
  }

  return (
    <>
      <OurShop />
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="border shopping-cart-table">
              <thead className="text-center">
                <tr style={{ backgroundColor: "#edf1ff"}}>
                 
                  {TableHeadings.map((item,id)=>{
                    return(
                      <th className="fs-4 fw-bold p-2" key={id}>{item.name}</th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="align-middle">
                {items.Carts.map((item, key) => (
                  <tr key={key} className="border p-2 fs-6">
                    <td className="center p-2 fs-6">
                      <img
                        style={{
                          height: "35px",
                          width: "35px",
                          objectFit: "cover",
                        }}
                        src={item.image}
                        alt={item.title}
                      />
                      <p className="align-center d-inline-block">{item.name}</p>
                    </td>
                    <td className="text-center border p-2">${item.price}</td>

                    <td className="border text-center fs-6 p-2">
                      <div className="add-icon-button-container d-flex flex-row justify-content-center text-center p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="shopping-cart-add-icon"
                          onClick={() =>
                            dispatch({ type: DECREASE_QUANTITY, payload: key })
                          }
                        >
                          <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                        </svg>
                        <p className="d-inline-block shoping-cart-count-value">
                          {item.quantity}
                        </p>
                        
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="shopping-cart-add-icon"
                          onClick={() =>
                            dispatch({ type: INCREASE_QUANTITY, payload: key })
                          }
                        >
                          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                        </svg>
                        
                      </div>
                    </td>
                    <td className="text-center border">
                      ${Math.round(item.price * item.quantity)}
                    </td>

                    <td className="border text-center fs-4">
                      <button
                        className="text-center"
                        style={{ border: "none", backgroundColor: "#d19c97" }}
                        onClick={() =>
                          dispatch({ type: DELETE_CART, payload: key })
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 312 512"
                          fill="black"
                          className="align-middle remove-icon"
                          style={{
                            height: "20px",
                            width: "20px",
                            marginBottom: "5px",
                          }}
                        >
                          <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {items.numberCart===0 && <p className="empty-cart">{DefaultConstants.EMPTYCART}</p>}
          </div>
          <div className="col-lg-4">
            <div className="card border  mb-5">
              <div className="card-header shop-details-cart-sumary-card border-0 text-center">
                <h4 className="font-weight-semi-bold m-0">{DefaultConstants.CARTSUMMARY}</h4>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between mb-3 pt-1">
                  <h6 className="font-weight-medium">{DefaultConstants.SUBTOTAL}</h6>
                  <h6 className="font-weight-medium">${TotalCart.toFixed(2)}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">{DefaultConstants.SHIPPING}</h6>
                  <h6 className="font-weight-medium">{DefaultConstants.FREE}</h6>
                </div>
              </div>
              <div className="card-footer border-secondary bg-transparent">
                <div className="d-flex justify-content-between mt-2">
                  <h5 className="font-weight-bold">{DefaultConstants.TOTAL}</h5>
                  <h5 className="font-weight-bold">${TotalCart.toFixed(2)}</h5>
                </div>
                <button className="shopping-cart-proceed-to-checkout-button" onClick={procedToCheckOutHandler}>
                  {DefaultConstants.PROCEEDTOCHECKOUT}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopingCart;
