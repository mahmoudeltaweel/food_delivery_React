import React, { useContext } from 'react'
import './placeOrder.css'
import { storeContext } from '../../context/StoreContext';

export default function PlaceOrder() {
  const{getTotalCartAmount}=useContext(storeContext);

  return (
   <form className='place-order'>
    <div className='place-order-left'>
      <p className='title'> Delivery Information </p>
      <div className='multi-fields'>
          <input type='text' placeholder='Frist Name' />
          <input type='text' placeholder='Last Name' />
      </div>
      <input type='email' placeholder='Email Address' />
      <input type='text' placeholder='street' />
      <div className='multi-fields'>
          <input type='text' placeholder='City' />
          <input type='text' placeholder='State' />
      </div>
      <div className='multi-fields'>
          <input type='text' placeholder='Zip Code' />
          <input type='text' placeholder='country' />
      </div>
      <input type='text' placeholder='phone' />
    </div>
    <div className='place-order-right'>
    <div className='cart-total'>
                    <h2>Cart Totals</h2>
                    <div>
                      <div className='cart-total-details'>
                        <p>subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                      </div>
                      <hr />
                      <div className='cart-total-details'>
                      <p>Delivery Fee</p>
                      <p>{getTotalCartAmount()===0?0:2}</p>
                      </div>
                      <hr />

                      <div className='cart-total-details'>
                      <p>Total</p>
                      <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
                      </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
    </div>
   </form>
  )
}
