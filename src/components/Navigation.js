import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation(props) {

    const { countCartItems, totalPrice } = props;

  return (
      <header className='row block center'>
          <div>
              <Link to="/">
                  <h1>Shopping Cart</h1>
              </Link>
          </div>
          <div>
              <Link to='/cart'>
                  
                  Cart { ' '}
                  {countCartItems ? (
                      <button className='badge'>{countCartItems }</button>
                  ) : (
                    ''
                )}
              </Link>
              <Link to='/cart'>                  
                  Total { ' '}
                  {totalPrice ? (
                      <button className='badge'>{totalPrice }</button>
                  ) : (
                    '$0.00'
                )}</Link>
          </div>
    </header>
)
}
