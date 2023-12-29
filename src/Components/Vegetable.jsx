import React from 'react';
import ProductCard from './ProductCard';
import tomato from "./Vagetable-images/tomato.jpg";
import brinjal from "./Vagetable-images/brinjal.jpg";
import ladyfinger from "./Vagetable-images/ladyfinger.jpg";
import potato from "./Vagetable-images/potato.jpeg";
import cucumber from "./Vagetable-images/Cucumber.webp";
import radish from "./Vagetable-images/radish.jpeg";
import onion from './Vagetable-images/onion.jpeg';
import dhaniya from './Vagetable-images/dhaniya.jpeg';
import chilly from './Vagetable-images/chilly.jpeg';

const Vegetable = () => {
  return (
    <div className='vegetable'>
       <div className="container">
          <h3 className='title'> Vegetables.. </h3>
          <div className="product-container">
            <ProductCard img={tomato} productName="Tomato" price="$5.6"/>
            <ProductCard img={brinjal} productName="Brinjal" price="$3.6"/>
            <ProductCard img={ladyfinger} productName="Lady-Finger" price="$2.7"/>
            <ProductCard img={potato} productName="Potato" price="$3.6"/>
            <ProductCard img={cucumber} productName="Cucumber" price="$2.4"/>
            <ProductCard img={radish} productName="Radish" price="$4.2"/>
            <ProductCard img={onion} productName="Onion" price="$2.4"/>
            <ProductCard img={dhaniya} productName="Carindar" price="$1.3"/>
            <ProductCard img={chilly} productName="Green-Chilly" price="$2.5"/>
          </div>
      </div>
    </div>
  )
}

export default Vegetable
