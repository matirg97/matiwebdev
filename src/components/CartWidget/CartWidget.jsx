import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@material-ui/core';
import { cartContext } from '../CartProvider/CartProvider';
import { useContext } from 'react';

const CartWidget = () => {

    const { sumItems, cart } = useContext(cartContext);

    return (
        <>
            <ShoppingCartIcon />
            <span>
                {Number(sumItems)}
            </span>

        </>
    )
}

export default CartWidget
