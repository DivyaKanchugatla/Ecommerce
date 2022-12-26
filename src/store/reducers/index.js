import { combineReducers } from "redux";
import {productReducer,selectedProductsReducer} from './ProductReducers'



const reducers = combineReducers({
    allProducts: productReducer,
     product:selectedProductsReducer
})
export default reducers;