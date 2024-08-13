import "./AddToCart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeToCart } from "../../reducers/CartReducer";


function AddToCart({product}) {
    const cart = useSelector((state) => state);
    const quantity = cart[product.id] ? cart[product.id].quantity : 0;

    const dispatch = useDispatch();
    function increase() {
        dispatch(addToCart(product, quantity + 1));
    }

    function decrease() {
        dispatch(removeToCart(product, quantity - 1));
    }

    if (quantity === 0) {
        return (
            <div className="addCartDiv">
                <button className="AddCartBtn" onClick={increase}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-plus-fill" viewBox="0 0 16 16">
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0"/>
                </svg>
                    Add to Cart
                </button>
            </div>
     )  
    } else {
        return ( 
            <div className="changeQtyDiv">
                <button className="DecQtyBtn" onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button className="IncQtyBtn" onClick={increase}>+</button>

            </div>
        )
    }

}

export default AddToCart;


// array of object 
// object of object 

//[{id: 1, quantity: 10}, {id: 2, quantity: 10}, {id: 3, quantity: 10}, {id: 4, quantity: 10}]
// cart = 
// {id:{id: 1, quantity: 10}, id:{id: 2, quantity: 10}, id:{id: 3, quantity: 10}, id:{id: 4, quantity: 10}}
//cart["3"]

// Object.value(obj);
// Object.keys(obj);