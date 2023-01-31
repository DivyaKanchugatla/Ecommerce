//Done by Kanchugatla Divya
import FakeStoreApi from "../../api/FakeStoreApi";

export const SELECTED_PRODUCTS = "SELECTED_PRODUCTS"
export const SELECTED_PRODUCTS_SUCCESS = "SELECTED_PRODUCTS_SUCCESS"
export const SELECTED_PRODUCTS_ERROR = "SELECTED_PRODUCTS_ERROR"

export const getSingleProduct =  (id) => {
    return async function (dispatch) {
        dispatch({ type: SELECTED_PRODUCTS})
        try {
          const res = await FakeStoreApi.get(`/products/${id}`)
        const single = await res.data
        dispatch({ type: SELECTED_PRODUCTS_SUCCESS, payload: single})
        }
        catch (err) {
          dispatch({ type: SELECTED_PRODUCTS_ERROR, payload: err})
        }
    }
  }
