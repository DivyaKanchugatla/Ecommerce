import { ActionTypes } from "./ActionTypes";
import FakeStoreApi from "../../api/FakeStoreApi";
// import axios from "axios";


 export const fetchProducts = () =>  async (dispatch) => {
         const response = await FakeStoreApi.get("/products");
         dispatch({type:ActionTypes.FETCH_PRODUCTS,payload: response.data })
    
 };

 export const getSingleProduct=(id)=>{
  return async (dispatch)=>{
    try {
      const response= await FakeStoreApi.get(`/products/${id}`)
    const singleProduct=await response.data
    dispatch(selectedProduct(singleProduct))
    } catch (error) {
      const errMsg=error.message
      dispatch(errMsg)
    }
  }
 }

 export const setProducts = (products) => {
     return{
         type: ActionTypes.SET_PRODUCTS,
         payload: products,
     }
 };
 export const selectedProduct = (product) => {
     return {
       type: ActionTypes.SELECTED_PRODUCT,
       payload: product,
     };
   };
   export const removeSelectedProduct = () => {
     return {
       type: ActionTypes.REMOVE_SELECTED_PRODUCT,
     };
   };
