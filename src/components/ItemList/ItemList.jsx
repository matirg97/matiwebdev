import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import "./ItemList.css"

const ItemList = () => {

    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProductArray(json))
    }, []);


    return (
        <>
            {(productArray.length > 0) ?
                <div className='itemCatalogue'>
                    {productArray.map(item => {
                        return <Item data={item} />
                    })}
                </div>
                :
                <div>
                    <CircularProgress />
                </div>
            }
        </>
    )
}

export default ItemList
