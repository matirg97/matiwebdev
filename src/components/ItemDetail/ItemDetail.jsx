
import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { cartContext } from "../CartProvider/CartProvider"

const ItemDetail = ({ data }) => {

    //The line below brings up the context from CartProvider
    const { addItem, cart } = useContext(cartContext);

    function onAdd(quantity) {

        if (quantity > 0) {
            console.log(`Agregaste ${data.title}, cantidad:${quantity}`);
            addItem(data.id, quantity, data.title, data.image, data.price);
            console.log(cart);
        } else {
            console.log("No se agregaron items al carrito")
        }
    }

    return (
        <div className='singleItemContainer'>
            <Card className="itemCardDetail">
                <CardContent className='cardContentDetail' >
                    <img className='imgItemDetail' src={data.image} alt={data.title} />
                    <div className='divDescBox'>
                        <Typography variant="h5" component="h2">
                            {data.title}
                        </Typography>
                        <Typography color="textSecondary">
                            {data.category}
                        </Typography>
                        <Box fontSize={16}>
                            <Typography variant="body2" component="p">
                                {data.description}
                                <br />
                                <b>
                                    Precio : U$D {data.price}
                                </b>
                            </Typography>
                        </Box>
                        <CardActions className="itemCountDiv">
                            <ItemCount stock={10} initial={1} onAdd={onAdd} />
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemDetail
