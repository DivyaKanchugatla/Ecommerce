import { combineReducers } from "redux";
import cartReducer from './CartReducer'


const reducers = combineReducers({
       _cardProduct: cartReducer,
     });
export default reducers;