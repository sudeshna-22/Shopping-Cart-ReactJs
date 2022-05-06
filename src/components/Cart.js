import React from 'react'

export default function Cart(props) {
    const { cartItems, onIncrease, onDecrease, itemsPrice, taxPrice, totalPrice } = props;

return (
    <div className='block col-1'>
        <h2> Cart Items </h2>
        <div>
            {cartItems.length == 0 && <div>Cart is empty</div>}
        </div>
        {
            cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onIncrease(item)} className="add">+</button>
                        <button onClick={() => onDecrease(item)} className="remove">-</button>
                    </div>

                    <div className='col-2 text-right'>
                        {item.qty} * ${item.price.toFixed(2)}
                    </div>
                </div>
            ))
        }

        {cartItems.length !== 0 && (
            <>
                <hr></hr>
                <div className='row'>
                    <div className='col-2'>Items Price</div>
                    <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Sub Total</div>
                    <div className='col-1 text-right'>${itemsPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'>Tax</div>
                    <div className='col-1 text-right'>${taxPrice.toFixed(2)}</div>
                </div>
                <div className='row'>
                    <div className='col-2'><strong>Total</strong></div>
                    <div className='col-1 text-right'>${totalPrice.toFixed(2)}</div>
                </div>
            </>
        )

        }
    </div>
)
}
