import React, { useState }  from 'react';
import Cart from './Cart';

const ProductCard = (props) => {
  const [items,setItems]= useState([]);
  const addCart = () =>{
    alert(`${props.productName} added to cart Successfully`);
    setItems(props.productName);
    Cart(items);
  }
  return (<>
      <div className="product">
            <img src={props.img} alt="" />
            <h3>{props.productName}</h3>
            <div className="price">{props.price}</div>
            <button onClick={addCart}>Add to Cart</button>
      </div>  
    </>)
}

export default ProductCard;
