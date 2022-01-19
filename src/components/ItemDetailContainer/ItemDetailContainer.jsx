
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress, Typography } from '@material-ui/core';


const ItemDetailContainer = ({id}) => {


    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setProductDetail([json]));
    }, []);


    return (
        <>
        <Typography variant="h5" component="h2">
            Producto con el id : {id}
        </Typography>
            {(productDetail.length > 0) ?
                <div>
                    {productDetail.map(item => {
                        return <ItemDetail data={item} />
                    })}
                </div>
                :
                <CircularProgress />
            }
        </>
    )
}

export default ItemDetailContainer
