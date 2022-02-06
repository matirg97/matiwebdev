import React, { useContext } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart } = useContext(cartContext);

    return (
        <>
            {(cart.length > 0) ?
                <div>
                    <h3>Sus productos:</h3>
                    {cart.map(item => {
                        return (
                            <CartItem key={item.id} data={item} />
                        )
                    })}
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
