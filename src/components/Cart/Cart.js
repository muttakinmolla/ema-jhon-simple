import React from 'react';
import './Cart.css';

const Cart = (porps) => {
    const { cart } = porps;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = (total * 0.1).toFixed(2);
    const grandTotal = total + shipping + parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected Item : {quantity}</p>
            <p>Total Price : ${total} </p>
            <p>Total Shipping : ${shipping}</p>
            <p>Total Tax : ${tax}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;