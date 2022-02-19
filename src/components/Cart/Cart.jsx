import React, { useContext, useEffect, useState, useRef } from 'react';
import { cartContext } from '../CartProvider/CartProvider';
import "./Cart.css"
import CartItem from '../CartItem/CartItem';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import { getFirestore } from '../../firebase/firebase';


const Cart = () => {

    const { sumItems, cart, sumTotalPrice } = useContext(cartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setTotalPrice(sumTotalPrice());
    })

    return (
        <>
            {(cart.length > 0) ?
                <div>
                    <h3>Cantidad de productos: {Number(sumItems)}</h3>
                    <h3>Sus productos:</h3>
                    <div className='cartCatalogue'>
                        {cart.map(item => {
                            return (
                                <CartItem key={item.id} data={item} />
                            )
                        })}
                    </div>
                    <h3>Valor total de los productos: ${Number(totalPrice)} </h3>
                    <Link to={"/payment"}>
                        <Button variant="contained" color="primary">
                            Finalizar Compra
                        </Button>
                    </Link>
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
