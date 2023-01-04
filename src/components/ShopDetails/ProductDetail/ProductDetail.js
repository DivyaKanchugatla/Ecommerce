import React ,{useEffect} from 'react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Rating from './Rating';
import { getSingleProduct, removeSelectedProduct } from '../../../store/actions/ProductActions';
import { ADD_CART } from '../../../store/actions/CartActions';


const ProductDetail = () => {
    let product = useSelector((state) => state.product);
    const {productId}=useParams();
    const dispatch = useDispatch();
    console.log(product);
    const {title,image,description,price,rating}=product;

    useEffect(()=>{
      dispatch(getSingleProduct(productId))
      return()=>{
        dispatch(removeSelectedProduct())
      }
    },[productId,dispatch])
    
    
  return (
    <>
      <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="row px-xl-5">
            <div className="col-lg-5 pb-5">
              <img src={image} className="img-fluid w-75 h-100" alt="" />
            </div>
            <div className="col-lg-7 pb-5">
              <h3 className="colorful-heading">{title}</h3>
              <div className="d-flex mb-3">
                <div className="mr-2">
                  <Rating rating={rating.rate} />
                </div>
                <small className="pt-1">({rating.count} Reviews)</small>
              </div>
              <h3 className="colorful-heading mb-4">${price}</h3>
              <p className="mb-4">{description}</p>
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
                <p className="text-dark font-weight-medium mb-0 mr-3">
                  Colors:
                </p>
                <form>
                  <div className="mr-3" style={{ display: "inline-block" }}>
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
                  <div className="mr-3" style={{ display: "inline-block" }}>
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
                  <div className="mr-3" style={{ display: "inline-block" }}>
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
                  <div className="mr-3" style={{ display: "inline-block" }}>
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
                  <div className="mr-3" style={{ display: "inline-block" }}>
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
                <div
                  className="add-icon-button-container d-flex flex-row justify-content-center text-center p-2"
                  style={{ width: "130px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="add-icon"
                  >
                    <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                  </svg>
                  <p className="d-inline-block count-value">0</p>
                
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="add-icon"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </div>
                <div className="add-icon-button-container d-flex flex-row justify-content-center text-center p-2">
                  <button className=" shopdetail-addtocart-button p-2 text-center" onClick={()=>dispatch({type:ADD_CART,payload:product})}>
                    <i className="fa fa-shopping-cart shopdetail-addtocart" />
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="d-flex pt-2">
                <p className="text-dark font-weight-medium mb-0 mr-2">
                  Share on:
                </p>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href="/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href="/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href="/">
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
            </div>)}
      </div>
    </>
  );
};

export default ProductDetail;

