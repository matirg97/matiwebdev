import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import CartProvider from './components/CartProvider/CartProvider';


function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer title={"Nuestros productos"} />
            </Route>
            <Route path="/products/category/:id">
              <ItemListContainer />
            </Route>
            <Route path={"/item/:idItem"} >
              <ItemDetailContainer />
            </Route>
            <Route path={"/cart"} >
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>

    </>
  );
}

export default App;
