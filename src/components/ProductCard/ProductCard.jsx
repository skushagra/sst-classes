import './ProductCard.css';
import AddToCart from '../AddToCart/AddToCart';
import React from 'react';

function ProductCard({product}) {
  var a = 10;
  a = a + 1;

  const stars = ["⭐", "⭐", "⭐", "⭐", "⭐"];

  const [image, setImage] = React.useState(0);
  
  const changeImage = () => {
    setImage((image + 1) % product.images.length);
  }

  return (
    <div className="product-card">
      <div className="left">
        <img onClick={changeImage} className='productImg' src={product.images[image]} alt={product.title} />
      </div>
      <div className="right">
        <div className="top">
        <div className='productName'>{product.title}</div>
        <div className='productRatings'>{
          stars.map((star, index) => {
            if(index < product.rating.value)
            return <span key={index}>{star}</span>
          })
        } {product.rating.count} reviews</div> 
        <div className='productFrom'>from <span style={{fontWeight: 600}}>{product.brand} Store</span></div> 
        <div className='productCategory'>{product.category}</div> 
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