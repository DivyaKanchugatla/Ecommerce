import { combineReducers } from "redux";
import {productReducer,selectedProductsReducer} from './ProductReducers'
import cartReducer from './CartReducer'


const reducers = combineReducers({
    allProducts: productReducer,
     product:selectedProductsReducer,
     _cardProduct: cartReducer,
})




export default reducers;