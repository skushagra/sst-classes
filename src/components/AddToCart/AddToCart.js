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
                <button className="AddCartBtn" onClick={increase}>Add to Cart</button>
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