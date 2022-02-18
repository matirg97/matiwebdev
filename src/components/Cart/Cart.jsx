import React, { useContext, useEffect } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import firebase from 'firebase';

const Cart = () => {

    const { sumItems, cart, sumTotalPrice } = useContext(cartContext);
    const [totalPrice , setTotalPrice] = useState(0);


    useEffect(() => {
        setTotalPrice(sumTotalPrice());
    })



    return (
        <>
            {(cart.length > 0) ?
                <div>
                    <h3>Cantidad de productos: {Number(sumItems)}</h3>
                    <h3>Sus productos:</h3>
                    {cart.map(item => {
                        return (
                            <CartItem key={item.id} data={item} />
                        )
                    })}
                    <h3>Valor total de los productos: ${Number(totalPrice)} </h3>
                    <Button variant="contained" color="primary">
                        Finalizar Compra
                    </Button>
                </div>
                :
                <div className='noItemDiv'>
                    <h2>Todavía no items en el carrito!</h2>
                    <Link to={"/"}>
                    <Button variant="contained" color="primary">
                        AGREGAR ITEMS
                    </Button>
                    </Link>
                    
                </div>
            }
        </>
    );
};

export default Cart;
