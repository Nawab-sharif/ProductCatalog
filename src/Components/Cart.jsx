import React from 'react';

const Cart = (props) => {
  return (<>
      <div className="container">
        <div className="showItems">
          <h1 className=' text-center m-4 mt-5'>Welcome To The Cart....</h1>
          <div className="eachItems">
            <h3>Cart Items Not Available Now (Coming Soon) </h3>
          </div>
          <div className="eachItems">
            <h3>{props.item}</h3>
          </div>
        </div>
      </div>
    </>)
}

export default Cart
