import { ActionTypes } from "../actions/ActionTypes"

const initialState = {
     products:[],
 };

 export const productReducer = (state=initialState, {type,payload}) => {
    switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
         return {...state, products:payload};
     default:
         return state;
    }
 };
//  export const selectedProductsReducer = (state = {}, { type, payload }) => {
//      switch (type) {
//        case ActionTypes.SELECTED_PRODUCT:
//          return { ...state, ...payload };
//        case ActionTypes.REMOVE_SELECTED_PRODUCT:
//          return {};
//        default:
//          return state;
//      }
//    };
  
 // import { GET, SUCCESS, ERROR } from "..Actions/ActionTypes";
