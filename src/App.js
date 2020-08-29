import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Review/Review';
import Inventory from './Inventory/Inventory';
import NotFound from './NotFound/NotFound';
import ProductDetail from './ProductDetail/ProductDetail';




function App() {




  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
            <Review></Review>

          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route path="/product/:productkey">
          <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>
      
      

    </div>
  );
}

export default App;
