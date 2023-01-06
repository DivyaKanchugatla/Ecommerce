import { combineReducers } from "redux";
import {productReducer} from './ProductReducers'
import cartReducer from './CartReducer'
import { productDetailReducer } from "./ProductDetailReducer";

const reducers = combineReducers({
    allProducts: productReducer,
     _cardProduct: cartReducer,
     productDetail:productDetailReducer
})




export default reducers;
