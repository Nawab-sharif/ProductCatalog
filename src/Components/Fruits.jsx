import React from 'react';
import ProductCard from './ProductCard';
import apple from "./Fruits Images/apple.jpeg";
import banana from "./Fruits Images/banana.jpeg";
import grapes from "./Fruits Images/grapes.jpg";
import guava from "./Fruits Images/guava.jpg";
import mango from './Fruits Images/Mango.jpeg';
import papaya from './Fruits Images/papaya.jpg';
import pineapple from './Fruits Images/pineapple.jpg';
import pomegranate from './Fruits Images/pomegranate.webp';
import strawberry from './Fruits Images/strawberry.jpeg';

const Fruits = () => {
  return (
    <div className='fruits'>
       <div className="container">
          <h3 className='title'> Fruits... </h3>
          <div className="product-container">
            <ProductCard img={apple} productName="Apple" price="$6.2"/>
            <ProductCard img={banana} productName="Banana" price="$2.6"/>
            <ProductCard img={grapes} productName="Grapes" price="$4.7"/>
            <ProductCard img={guava} productName="Guava" price="$3.8"/>
            <ProductCard img={mango} productName="Mango" price="$2.4"/>
            <ProductCard img={papaya} productName="Papaya" price="$4.5"/>
            <ProductCard img={pineapple} productName="Pine-Apple" price="$6.4"/>
            <ProductCard img={pomegranate} productName="Pomegranate" price="$5.4"/>
            <ProductCard img={strawberry} productName="Straw-Berry" price="$6.5"/>
          </div>
        </div>
    </div>
  )
}

export default Fruits;

