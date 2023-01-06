import { combineReducers } from "redux";
import {productReducer,selectedProductsReducer} from './ProductReducers'
import cartReducer from './CartReducer'
import { productDetailReducer } from "./ProductDetailReducer";

const reducers = combineReducers({
    allProducts: productReducer,
     product:selectedProductsReducer,
     _cardProduct: cartReducer,
     productDetail:productDetailReducer
})




export default reducers;
