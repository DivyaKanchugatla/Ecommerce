import FakeStoreApi from "../../api/FakeStoreApi";


export const FETCH_PRODUCTS = "FETCH_PRODUCTS"


 export const fetchProducts = () =>  async (dispatch) => {
         const response = await FakeStoreApi.get("/products");
         dispatch({type:FETCH_PRODUCTS,payload: response.data })
    
 };

