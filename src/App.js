import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap'
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';
import {Provider} from "react-redux"
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();
function App() {
  
   
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
    <Main/>
    </div>
    </BrowserRouter></Provider>
  );
}

export default App;
