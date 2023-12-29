import React from 'react';
import ProductCard from './ProductCard';
import sugar from "./Grocery images/sugar.jpeg";
import daal from "./Grocery images/daal.png";
import flour from "./Grocery images/flour.jpeg";
import blackpepper from "./Grocery images/black-pepper.webp";
import musturdoil from "./Grocery images/mustard-oil.jpg";
import oliveoil from "./Grocery images/Olive-Oil.jpg";
import rice from "./Grocery images/rice.jpg";
import salt from "./Grocery images/salt.jpeg";
import tea from "./Grocery images/tea.webp";

const Grocery = () => {
  return (
    <div className='grocery'>
       <div className="container">
          <h3 className='title'> Grocery.. </h3>
          <div className="product-container">
            <ProductCard img={sugar} productName="Sugar" price="$3.2"/>
            <ProductCard img={daal} productName="Pulse" price="$2.6"/>
            <ProductCard img={flour} productName="Flour" price="$1.7"/>
            <ProductCard img={blackpepper} productName="Black-Pepper" price="$3.8"/>
            <ProductCard img={musturdoil} productName="Musturd-Oil" price="$2.4"/>
            <ProductCard img={oliveoil} productName="Olive-Oil" price="$2.3"/>
            <ProductCard img={rice} productName="Rice" price="$4.7"/>
            <ProductCard img={salt} productName="Salt" price="$3.2"/>
            <ProductCard img={tea} productName="Tea Leaves" price="$4.2"/>
          </div>
      </div>
    </div>
  )
}

export default Grocery
