

const initialCart = {};

  const cartReducer = (state = initialCart, action) => {
    switch(action.type) {
      case 'INCREASE_QUANTITY':
        console.log(action.payload);
        return {
          ...state,
          [action.payload.product.id]: {
            ...action.payload.product,
            quantity: action.payload.quantity
          }
        }
      case 'DECREASE_QUANTITY':
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