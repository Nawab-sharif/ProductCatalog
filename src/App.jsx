import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "./index.css";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import vegetable from "./Components/Vegetable";
import Grocery from './Components/Grocery';
import Fruits from './Components/Fruits';
import Stationary from './Components/Stationary';
import Cart from './Components/Cart';

const App = () => {
  return (<>
      <Navbar/>
      <Routes>
            <Route exact path='/' Component={Home}/>
            <Route path='/grocery' Component={Grocery}/>
            <Route path='/vegetable' Component={vegetable}/>
            <Route path='/fruits' Component={Fruits}/>
            <Route path='/stationary' Component={Stationary}/>
            <Route path='/cart' Component={Cart}/>
      </Routes>
    </>)
}

export default App
