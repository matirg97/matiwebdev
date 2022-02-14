
import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { CircularProgress, Typography } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/firebase';


const ItemDetailContainer = () => {

    let { idItem } = useParams();

    const [productDetail, setProductDetail] = useState([]);
    const db = getFirestore();
    const itemCollection = db.collection('products');
    const singleItem = itemCollection.doc(`${idItem}`);


    useEffect(() => {
        singleItem.get()
            .then((doc) => {
                if (!doc.exists) {
                    console.log("Doc doesn't exists.");
                    return
                }
                console.log("Doc exists.");
                setProductDetail([{ ...doc.data() }])
                console.log(productDetail);
            })
            .catch((err) => {
                console.log("error in single item :" + err)
            })
    }, [idItem]);


    return (
        <>
            {(productDetail.length > 0) ?
                <div>
                    {productDetail.map(item => {
                        return <ItemDetail key={item.id} data={item} />
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
