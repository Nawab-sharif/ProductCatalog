import React from 'react';
import ProductCard from './ProductCard';
import pen from './Stationary-images/pen.jpeg';
import eracer from './Stationary-images/eracer.jpeg';
import fevigum from './Stationary-images/fevigum.jpeg';
import marker from './Stationary-images/marker.jpeg';
import notebook from './Stationary-images/notebook.jpeg';
import pencil from './Stationary-images/pencil.png';
import scale from './Stationary-images/scale.jpg';
import sharpner from './Stationary-images/sharpner.webp';
import whitener from './Stationary-images/whitener.jpg';

const Stationary = () => {
  return (
    <div className='stationary'>
      <div className="container">
          <h3 className='title'> Stationary... </h3>
          <div className="product-container">
            <ProductCard img={pen} productName="Pen" price="$4.2"/>
            <ProductCard img={pencil} productName="Pencil" price="$2.6"/>
            <ProductCard img={eracer} productName="Eracer" price="$1.7"/>
            <ProductCard img={sharpner} productName="Sharpner" price="$2.8"/>
            <ProductCard img={marker} productName="Marker" price="$3.4"/>
            <ProductCard img={notebook} productName="Notebook" price="$4.5"/>
            <ProductCard img={whitener} productName="Whitener" price="$3.7"/>
            <ProductCard img={scale} productName="Scale" price="$2.4"/>
            <ProductCard img={fevigum} productName="FeviGum" price="$3.5"/>
          </div>
        </div>
    </div>
  )
}

export default Stationary
