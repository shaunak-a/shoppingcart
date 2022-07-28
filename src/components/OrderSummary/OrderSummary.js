import { Button } from '@mui/material'
import React from 'react'
import { CartState } from '../../contexts/CartContext'
import './OrderSummary.scss'

const OrderSummary = () => {

    const { cart } = CartState()

    return (
        <div className="order-summary">
            <div className="order-summary-container">
                <div className="order-summary-container-top">
                    <h1>Order Summary</h1>
                </div>
                <hr />
                <div className="order-summary-container-bottom">
                        <h2>Total Item {cart.length}</h2>
                        <h2>Total Cost ${cart.reduce((acc, val) => acc + Number(val.price), 0)}</h2>
                        <Button color="secondary" variant="contained">Checkout</Button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
