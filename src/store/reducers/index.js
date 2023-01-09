import { combineReducers } from "redux";
import {productReducer} from './ProductReducers'
import cartReducer from './CartReducer'
import { productDetailReducer } from "./ProductDetailReducer";

const reducers = combineReducers({
    //shop reducer
    allProducts: productReducer,
    //shopping cart reducer
     _cardProduct: cartReducer,
     //shopdetail reducer
     productDetail:productDetailReducer
})




export default reducers;
