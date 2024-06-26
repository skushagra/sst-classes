import './App.css';
import { a, b } from './components/Products/Products';
import Products from './components/Products/Products';
import { useState } from 'react';
import CartContext from './context/CartContext';
import Cart from './components/Cart/Cart';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store/CartStore';

function App() {
  // state variable
  // inc
  // dec
  let [cart, setCart] = useState({});
  

  console.log(a, b);
  return (
    // <CartContext.Provider value={{ cart, increaseQuantity, decreaseQuantity}}>
      <Provider store={store}>
      <div className="App">
        <Products />
        <Cart />
      </div>
      </Provider>
  );
}

export default App;

// {1:{id: 1, quantity: 11}, 2:{id: 2, quantity: 10}, 3:{id: 3, quantity: 10}, 4:{id: 4, quantity: 10}}

// button
// - 1 +

// let a = {b:10, c:20};
//a.b = 30;
// let b = {...a};

// a => 1234
// a => 12

// {cart: cart, increaseQuantity: increaseQuantity}