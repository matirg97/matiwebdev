import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Typography } from '@material-ui/core';


const CartWidget = () => {
    return (
        <>
            <ShoppingCartIcon />
            <span>
                <Typography>0</Typography>
            </span>
        </>
    )
}

export default CartWidget
