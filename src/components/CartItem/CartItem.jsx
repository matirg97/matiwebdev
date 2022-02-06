import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import {cartContext} from '../CartProvider/CartProvider';
const CartItem = ({ data }) => {

    const { removeItem } = useContext(cartContext);


    return (
        <>
            <Card className="itemCard">
                <CardContent className='cardContent' >
                    <Typography variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <img className='imgItem' src={data.image} alt="" />
                    <Typography variant='subtitle1' color="initial">
                        Precio : U$D {data.price}
                    </Typography>
                    <Button variant='contained' color='secondary' onClick={removeItem}>Remove Item</Button>
                </CardContent>
            </Card>
        </>
    );
};


export default CartItem;
