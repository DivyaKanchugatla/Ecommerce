import FakeStoreApi from "../../api/FakeStoreApi";


export const FETCH_PRODUCTS = "FETCH_PRODUCTS"


 export const fetchProducts = () =>  async (dispatch) => {
         const response = await FakeStoreApi.get("/products");
         dispatch({type:FETCH_PRODUCTS,payload: response.data })
    
 };

//  export const getSingleProduct=(id)=>{
//   return async (dispatch)=>{
//     try {
//       const response= await FakeStoreApi.get(`/products/${id}`)
//     const singleProduct=await response.data
//     dispatch(selectedProduct(singleProduct))
//     } catch (error) {
//       const errMsg=error.message
//       dispatch(errMsg)
//     }
//   }
//  }
//    export const removeSelectedProduct = () => {
//      return {
//        type: REMOVE_SELECTED_PRODUCT,
//      };
//    };
  
// export const selectedProduct = (product) => {
//     return {
//       type: SELECTED_PRODUCT,
//       payload: product,
//     };
//   };

//   export const setProducts = (products) => {
//     return{
//         type: ActionTypes.SET_PRODUCTS,
//         payload: products,
//     }
// };
