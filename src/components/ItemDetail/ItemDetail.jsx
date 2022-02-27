import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";
import { Box, Card, CardActions, CardContent, CardMedia, Typography, Button, ImageList } from '@material-ui/core';
import { cartContext } from "../CartProvider/CartProvider"
import { Link } from 'react-router-dom';

const ItemDetail = ({ data }) => {

    //The line below brings up the context from CartProvider
    const { addItem } = useContext(cartContext);
    const [booleanFlag, setBooleanFlag] = useState(false);


    function onAdd(quantity) {

        if (quantity > 0) {
            console.log(`Agregaste ${data.title}, cantidad:${quantity}`);
            addItem(data.id, quantity, data.title, data.image, data.price);
            setBooleanFlag(true);
        } else {
            console.log("No se agregaron items al carrito")
        }
    }

    return (
        <div className='singleItemContainer'>
            <Card className="itemCardDetail">
                <CardContent className='cardContentDetail' >
                    <div className='imgDetailDiv'>
                        <img className='imgItemDetail' src={data.image} alt={data.title} />
                    </div>
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
                            </Typography>
                            <br />
                            <Typography align='center' variant="h6">
                                <b>
                                    Precio : ${data.price}
                                </b>
                            </Typography>
                        </Box>
                        <CardActions className="itemCountDiv">
                            {(booleanFlag == false) ?
                                <ItemCount stock={10} initial={1} onAdd={onAdd} />
                                :
                                <Link to="/cart">
                                    <Button variant="outlined">Ir al carrito</Button>
                                </Link>
                            }
                            <Link to="/">
                                <Button variant="outlined">Volver al menú</Button>
                            </Link>
                        </CardActions>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ItemDetail
