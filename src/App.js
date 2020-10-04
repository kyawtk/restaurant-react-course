import React, { useState } from 'react';
import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';


function App() {
  const [dishes ,setdishes ] = useState(DISHES)
   
  return (
    <div className="App">
    <Menu dishes = {dishes}/>
    </div>
  );
}

export default App;
