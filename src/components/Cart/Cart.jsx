import React, { useContext, useEffect, useState, useRef } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { Button, Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Cart = () => {

    const { sumItems, cart, sumTotalPrice } = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(sumTotalPrice());
    })

    return (
        <>
            {(cart.length > 0) ?
                <div className='cartContainer'>
                    <Box className='productsContainer'>
                        <Typography align='center' variant='h5'>
                            Sus productos:
                        </Typography>
                        <div className='cartCatalogue'>
                            {cart.map(item => {
                                return (
                                    <CartItem key={item.id} data={item} />
                                )
                            })}
                        </div>
                    </Box>
                    <Box className='infoContainer'>
                        <Typography align='center' variant='h5'>
                            Cantidad de productos: {Number(sumItems)}
                        </Typography>
                        <Typography align='center' variant='h5'>
                            Valor total de los productos: ${Number(totalPrice)}
                        </Typography>
                        <Link to={"/payment"}>
                            <Button variant="contained" color="primary">
                                Finalizar Compra
                            </Button>
                        </Link>
                    </Box>
                </div>
                :
                <div className='noItemDiv'>
                    <Typography align='center' variant='h4'>
                        Todavía no tenes items en el carrito!
                    </Typography>
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
