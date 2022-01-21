import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import "./ItemList.css"

const ItemList = ({ data, dataPlus }) => {

    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        if (data != undefined && dataPlus != undefined) {
            fetch(`https://fakestoreapi.com/products/${data}/${dataPlus}`)
                .then(res => res.json())
                .then(json => setProductArray(json))
        } else {
            fetch(`https://fakestoreapi.com/products/`)
                .then(res => res.json())
                .then(json => setProductArray(json))
        }
    }, [dataPlus]);

    return (
        <>
            {(productArray.length > 0) ?
                <div className='itemCatalogue'>
                    {productArray.map(item => {
                        return <Item data={item} />
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

export default ItemList
