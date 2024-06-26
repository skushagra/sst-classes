

const initialCart = {};

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export function addToCart(product, quantity) {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity
    }
  }
}

export function removeToCart(product, quantity) {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      product,
      quantity
    }
  }
}


const cartReducer = (state = initialCart, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [action.payload.product.id]: {
          ...action.payload.product,
          quantity: action.payload.quantity
        }
      }
    case REMOVE_FROM_CART:
      if (action.payload.quantity === 0) {
        let stateCopy = { ...state };
        delete stateCopy[action.payload.product.id];
        return stateCopy;
      }
      return {
        ...state,
        [action.payload.product.id]: {
          ...action.payload.product,
          quantity: action.payload.quantity
        }
      }
    default:
      return state;
  }
}

export default cartReducer;