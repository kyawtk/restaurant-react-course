import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

function App() {
  
   
  return (
    <BrowserRouter>
    <div className="App">
    <Main/>
    </div>
    </BrowserRouter>
  );
}

export default App;
