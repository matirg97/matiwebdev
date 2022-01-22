
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    let { idItem } = useParams();

    const [productDetail, setProductDetail] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${idItem}`)
            .then(res => res.json())
            .then(json => setProductDetail([json]));
    }, [idItem]);


    return (
        <>
            {(productDetail.length > 0) ?
                <div className='singleItemContainer'>
                    {productDetail.map(item => {
                        return <ItemDetail data={item} />
                    })}
                </div>
                :
                <div className='circularProgressDiv'>
                    <CircularProgress size={450} thickness={1} />
                </div>
            }
        </>
    )
}

export default ItemDetailContainer
