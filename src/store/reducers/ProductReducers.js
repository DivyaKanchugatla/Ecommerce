import { ActionTypes } from "../actions/ActionTypes"

const initialState = {
     products:[],
 };

 export const productReducer = (state=initialState, {type,payload}) => {
    switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
         return {...state, products:payload};
    case ActionTypes.A_to_Z:
        return {...state,products:payload};
    case ActionTypes.Z_to_A:
        return {...state,products:payload}    
     default:
         return state;
    }
 };

//  export const sortReducer=(products,sortAction)=>{
//     switch (sortAction){
//         case 'az':
//             return products.sort((a,b)=>a.title.localeComapre(b.title));
//         case 'za':
//             return products.sort((a,b)=>b.title.localeComapre(a.title));
//         default:
//             return  products  
//     }
//  }
