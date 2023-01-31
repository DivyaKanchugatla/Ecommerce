import {
  
    ADD_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    DELETE_CART,
  } from "../actions/CartActions";

  //Done by kumar swamy
  
  const initialProduct = {
    // Carts array is used for storing items,deleting,increasing quantity,decresing quantity
    Carts: [],
  };
  
  function cartReducer(state = initialProduct, action) {
    const { type, payload } = action;
    switch (type) {
     
      case ADD_CART:
        // in this case we are checking carts array length if Carts array length is zero we are pushing item into Carts array
        if (state.Carts.length === 0) {
            let cart = {
            id: payload.id,
            quantity: payload.quantity,
            name: payload.title,
            image: payload.image,
            price: payload.price,
          };
          state.Carts.push(cart);
        } 
      
        else {
          let check = false;
          // here taking varible and assigning a boolean value false.next  taking the payload id coming from payload and checking witn each item id in Carts array using map function.
          // if item is present in the Carts array incresing the quantity
          state.Carts.map((item, key) => {
            if (item.id === payload.id) {
              state.Carts[key].quantity++;
              check = true;
            }
            return check;
          });
          if (!check) {
            // if item is not present pushing the item into Carts array
            let _cart = {
              id: payload.id,
              quantity: payload.quantity,
              name: payload.title,
              image: payload.image,
              price: payload.price,
            };
            state.Carts.push(_cart);
          }
        }
        return {
          ...state,
        };
      case INCREASE_QUANTITY:
        // in this quantity increased 
        
        state.Carts[payload].quantity++;
  
        return {
          ...state,
        };
      case DECREASE_QUANTITY:
        // if quantity is greter than we are decresing quantity
        let quantity = state.Carts[payload].quantity;
        if (quantity > 1) {
          state.Carts[payload].quantity--;
        }
  
        return {
          ...state,
        };
      case DELETE_CART:
        
        //here decresing the numberCart and removing the item from Carts array using the filter method.
        return {
          ...state,
          Carts: state.Carts.filter((item) => {
            return item.id !== state.Carts[payload].id;
          }),
        };
      default:
        return state;
    }
  }
  
  export default cartReducer

 