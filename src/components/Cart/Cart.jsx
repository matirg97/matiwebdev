import React, { useContext } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';


const Cart = () => {

    const { cart } = useContext(cartContext);

    return (
        <div>
            <h3>Sus productos:</h3>
            {cart.map(item => {
                return (
                    <CartItem data={item} />
                )
            })}
        </div>
    );
};

export default Cart;
