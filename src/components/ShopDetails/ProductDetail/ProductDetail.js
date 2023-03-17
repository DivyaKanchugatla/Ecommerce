import React ,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerCircular } from "spinners-react";
import Rating from './Rating';
import { getSingleProduct } from '../../../store/actions/ProductDetailActions';
import { ADD_CART } from '../../../store/actions/CartActions';
import { DefaultConstants } from '../../../constants/constants';
import './ProductDetail.css';

const sizes = [  
    {id:"size-1", size:DefaultConstants.XS,check:true},
    {id:"size-2", size:DefaultConstants.S,check:false},
    {id:"size-3", size:DefaultConstants.M,check:false},
    {id:"size-4", size:DefaultConstants.L,check:false},
    {id:"size-5", size:DefaultConstants.XL,check:false},
]
const colors = [
  {color:DefaultConstants.BLACK,check:false}, {color:DefaultConstants.WHITE,check:false}, {color:DefaultConstants.RED,check:false}, {color:DefaultConstants.BLUE,check:true}, {color:DefaultConstants.GREEN,check:false},
]
const socialIcons = [
  {link:"https://www.facebook.com/Maybinsefu1/",icon:"fab fa-facebook-f"},
  {link:"https://www.twitter.com",icon:"fab fa-twitter"},
  {link:"https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHKrOz2HSDNtwAAAYWCuvZorIoAmjWmSMp7eL4ZwwQjl8FzyHKfD7XNG2ThkEMh4HGi_b8ddLqUiWmDNoiioww-oJzKacNCwD5Deue137TcFteOVzciIPVYwzGLs57zcwG4oZk=&original_referer=https://63b63c607d93c40eccfdb126--endearing-puffpuff-1605ac.netlify.app/&sessionRedirect=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fmsys-technologies",icon:"fab fa-linkedin-in"},
  {link:"https://www.pinterest.com",icon:"fab fa-pinterest"},
]

//Done by Kanchugatla Divya
const ProductDetail = () => {
  const dispatch = useDispatch();

  // accessing the parameter of the current route
  const {productId}=useParams();

  //getting the state from redux store
    let {product,loading} = useSelector((state) => state.productDetail);
    const {title,image,description,price,rating}=product;

    //action creating
    useEffect(()=>{
      dispatch(getSingleProduct(productId))
    },[productId,dispatch])
    
const [count,setCount]=useState(1);
     //increase quantiy
  const increaseQuantity = () => {
    setCount((prev) => prev + 1);
  };
  //decrease Quntity
  const decreaseQuantity = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };
    
  return (
    <>
      <div className="ui grid container">
        {!loading ? (
          <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <img src={image} className="img-fluid w-75 h-100" alt="" />
          </div>
          <div className="col-lg-7 pb-5">
            <h3 className="colorful-heading">{title}</h3>
            <div className="d-flex mb-3">
              {/* Rating code */}
              <div className="mr-2">
                <Rating rating={rating?.rate} />
              </div>
              <small className="pt-1">({rating?.count} Reviews)</small>
            </div>
            <h3 className="colorful-heading mb-4">${price}</h3>
            <p className="mb-4">{description}</p>
            {/* Sizes code */}
            <div className="d-flex mb-3">
              <p className="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
              <form>
                {sizes.map((item,index)=>{
                  return(
                    <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input star"
                      id={item.id}
                      name="size"
                      defaultChecked={item.check}
                    />
                    <label className="custom-control-label" htmlFor={item.id}>
                      {item.size}
                    </label>
                  </div>
                  )
                })}
              </form>
            </div>
            {/* Colors code */}
            <div className="d-flex flex-row mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">
                Colors:
              </p>
              <form>
                {colors.map((item,index)=>{
                  return(
                <div className="custom-control custom-radio custom-control-inline" key={index}>
                    <input
                      type="radio"
                      className="custom-control-input star"
                      id="specifyColor"
                      name="color"
                      defaultChecked={item.check}
                    />
                    <label className="custom-control-label" htmlFor="specifyColor">
                      {item.color}
                    </label>
                  </div>
                  )
                })}
              </form>
            </div>
            <div className="d-flex mb-4 pt-2 center">
              {/* increasing and decreasing count of item in cart code */}
              <div
                className="add-icon-button-container d-flex flex-row justify-content-center text-center p-2"
                style={{ width: "130px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="add-icon" onClick={decreaseQuantity}
                >
                  <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
                </svg>
                <p className="d-inline-block count-value">{count}</p>
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="add-icon" onClick={increaseQuantity}
                >
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                </svg>
              </div>
              {/* Adding items to cart */}
              <div className="add-icon-button-container d-flex flex-row justify-content-center text-center p-2">
                <button className=" shopdetail-addtocart-button text-center" onClick={()=>dispatch({type:ADD_CART,payload:{...product,quantity:count}})}>
                  <i className="fa fa-shopping-cart shopdetail-addtocart" />
                  Add To Cart
                </button>
              </div>
            </div>
            {/* social icons code */}
            <div className="d-flex pt-2">
              <p className="text-dark font-weight-medium mb-0 mr-2">
                Share on:
              </p>
              <div className="d-inline-flex">
                {socialIcons.map((item,index)=>{
                  return(
                    <a className="text-dark px-2" key={index} href={item.link} target="_blank" rel="noreferrer">
                    <i className={item.icon} />
                  </a>
                  )
                })}
              </div>
            </div>
          </div>
          </div>
        ) : 
        // spinner code
        (
          <div className="spinner-container">
            <SpinnerCircular size={100} style={{ color: "blue" }} />
          </div>
          )}
      </div>
    </>
  );
};

export default ProductDetail;






