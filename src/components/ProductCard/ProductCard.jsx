import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';

function ProductCard({product}) {
  var a = 10;
  a = a + 1;

  return (
    <div className="product-card">
      <div className="left">
        <img className='productImg' src={product.images[0]} alt={product.title} />
      </div>
      <div className="right">
        <div className="top">
        <div className='productName'>{product.title}</div>
        <div className='productPrice'> ₹ {product.price.value}</div>
        </div>
        <div className="bottom">
          <AddToCart product={product} />
        </div>
      </div>
      
    </div>
    )
  }
  
export default ProductCard;