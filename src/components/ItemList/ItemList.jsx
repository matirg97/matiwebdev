import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Products from "../../JSON/Products.json"
import CircularProgress from '@material-ui/core/CircularProgress';
import "./ItemList.css"

const ItemList = () => {

    const [booleanFlag, setBooleanFlag] = useState(false);

    const [productArray, setProductArray] = useState([]);

    const listProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Products);
        }, 3000);
    })

    useEffect(() => {
        listProducts
            .then(res => {
                setProductArray(res);
                setBooleanFlag(true);
            })
            .catch(err => {
                console.log("Error that comes from the catch: " + err);
            })
    });


    return (
        <>
            {(booleanFlag) ?
                <div className='itemCatalogue'>
                    {productArray.map(item => {
                        return <Item data={item} />
                    })}
                </div>
                :
                <div>
                    {Products.map(item => {
                        return <CircularProgress />
                    })}
                </div>
            }
        </>
    )
}

export default ItemList
