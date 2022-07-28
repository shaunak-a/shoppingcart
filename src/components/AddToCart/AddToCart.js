import React from 'react'
import CartContainer from '../../containers/CartContainer/CartContainer'
import OrderSummary from '../OrderSummary/OrderSummary'
import "./AddToCart.css"

const AddToCart = () => {

  return (
    <div className="cart">
        <div className="cart-container">
            <div className="cart-container-items">
                <CartContainer />
            </div>
            <div className="cart-container-orderSummary">
                <OrderSummary />
            </div>
        </div>
    </div>
  )
}

export default AddToCart
