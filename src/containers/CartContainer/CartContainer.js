import React from 'react'
import { CartState } from '../../contexts/CartContext'
import './CartContainer.scss'
import CartTableContainer from './CartTableContainer'

const CartContainer = () => {

  const { cart } = CartState()

  return (
    <div className="cart">
      <div className="cart-container">
        <div className="cart-container-items">
          <div className="cart-container-items-top">
            <div className="cart-container-items-top-left">
              <h1>Shopping Cart</h1>
            </div>
            <div className="cart-container-items-top-right">
              <h1>{cart.length} Items</h1>
            </div>
          </div>
          <hr />
          <div className="cart-container-items-bottom">
            <CartTableContainer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartContainer
