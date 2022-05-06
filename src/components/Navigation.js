import React from 'react'

export default function Navigation(props) {

    const { countCartItems, totalPrice } = props;

  return (
      <header className='row block center'>
          <div>
              <a href="#">
                  <h1>Shopping Cart</h1>
              </a>
          </div>
          <div>
              <a href='#'>
                  
                  Cart { ' '}
                  {countCartItems ? (
                      <button className='badge'>{countCartItems }</button>
                  ) : (
                    ''
                )}
              </a>
              <a href='#'>                  
                  Total { ' '}
                  {totalPrice ? (
                      <button className='badge'>{totalPrice }</button>
                  ) : (
                    '$0.00'
                )}</a>
          </div>
    </header>
)
}
