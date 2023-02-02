//Done by Kanchugatla Divya
import { SELECTED_PRODUCTS, SELECTED_PRODUCTS_SUCCESS, SELECTED_PRODUCTS_ERROR} from '../actions/ProductDetailActions'

const initialState = {
    product:[],
};
export const productDetailReducer = (state = initialState,action) => {
    switch (action.type) {
        case SELECTED_PRODUCTS:
            return {
                ...state,loading: true
            }
            case SELECTED_PRODUCTS_SUCCESS:
            return {
                ...state,loading: false,
                product: action.payload,
            }
            case SELECTED_PRODUCTS_ERROR:
            return {
                ...state,loading: false,
                error: action.payload,
            }
            default:
                return state;
    }
}



