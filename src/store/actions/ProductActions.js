 import FakeStoreApi from "../../api/FakeStoreApi";


export const FETCH_PRODUCTS = "FETCH_PRODUCTS"
export const FILTER_PRODUCTS = "FILTER_PRODUCTS"

export const A_to_Z='az'
export const Z_to_A='za'


 export const fetchProducts = () => async (dispatch) => {
          const response = await FakeStoreApi.get("/products");
         dispatch({type:FETCH_PRODUCTS,payload: response.data })
    
 };
 export const filteringProducts = (data) => {
        return{
                type:FILTER_PRODUCTS,
                payload:data
        }

        
 }

export const sortingProductsASC=(sortedData)=>{
        return{
                type:A_to_Z,
                payload:sortedData
        }
}

export const sortingProductsDSC=(sortedData)=>{
        return{
                type:Z_to_A,
                payload:sortedData
        }
}