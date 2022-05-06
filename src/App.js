import React, { useState } from 'react'

import Navigation from './components/Navigation';
import Product from './components/Product';
import Cart from './components/Cart';
import data from './data/data';
import { Switch, Route } from "react-router-dom";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onIncrease = (product) => {
    const exist = cartItems.find(x => x.id === product.id);

    if (exist) {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);

    if (exist) {
      console.log("Already Added");
    }  else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
    }
  }

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.13;
  const totalPrice = itemsPrice + taxPrice;

  return (
    <div className="App">
      <Navigation countCartItems={cartItems.length} totalPrice={totalPrice} />
      
      <Switch>
        <Route exact path='/'>
          <Product onAdd ={ onAdd } products={products} />
        </Route>

        <Route path='/cart'>
          <Cart itemsPrice = {itemsPrice} taxPrice = {taxPrice} totalPrice = {totalPrice} onDecrease={ onRemove } onIncrease = {onIncrease} cartItems={cartItems} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
