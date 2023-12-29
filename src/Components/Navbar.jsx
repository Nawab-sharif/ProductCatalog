import React from 'react';
// import {GiHamburgerMenu} from "react-icons/gi";
import img from "./logo/logo.jpeg";
const Navbar = () => {
  return (
  <div className='navbar'>
        <img src={img} alt=""/>
        <h1>Product Catalogue</h1>
        <div className="listnings">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="./Grocery">Grocery</a></li>
          <li><a href="./Vegetable">Vegetables</a></li>
          <li><a href="./Fruits">Fruits</a></li>
          <li><a href="./Stationary">Stationary</a></li>
          <li><a href="./Cart">Cart🛒</a></li>
        </ul>
        <div className="humberger-menu">
            {/* <a href=""><GiHamburgerMenu/></a> */}
        </div>
        </div>
  </div>)
}

export default Navbar
