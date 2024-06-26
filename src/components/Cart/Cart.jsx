import { useSelector } from 'react-redux'
import './Cart.css'

export default function Cart() {

    const cart = useSelector((state) => state);
    console.log("CART", cart);

    return (
        <div className='Cart'>
            <span style={{fontWeight: 600}}>Your Cart</span>

            {
                Object.values(cart).map(function (item, index) {
                    console.log("ITEM", item.quantity);
                    return (
                        <div key={index} className='cartItem'>
                            {item.title}
                            <div className='productQuantity'>
                                {item.quantity}
                            </div>
                        </div>
                    )
                })
            }
            <br />
            <br />
            <button> Buy Now </button>
        </div>
    )
}