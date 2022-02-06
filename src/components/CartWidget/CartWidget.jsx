import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@material-ui/core';
import { cartContext } from '../CartProvider/CartProvider';
import { useContext } from 'react';

const CartWidget = () => {

    return (
        <>
            <ShoppingCartIcon />
            <span>
                    0
            </span>
        </>
    )
}

export default CartWidget
