import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import CircularProgress from '@material-ui/core/CircularProgress';
import "./ItemList.css"
import { getFirestore } from '../../firebase/firebase';


const ItemList = ({ idParams }) => {

    const [productArray, setProductArray] = useState([]);
    const db = getFirestore();
    const itemCollection = db.collection('products')
    const itemCollectionCategory = db.collection('products').where('category', '==', `${idParams}`)


    useEffect(() => {

        if (idParams != undefined) {
            itemCollectionCategory.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size == 0) {
                        console.log("There's no documents with that query (Category parameter)");
                        return
                    }
                    console.log("There's documents (Category parameter)");
                    setProductArray(querySnapshot.docs.map((doc) => doc.data()));
                    console.log(productArray);
                })
                .catch((err) => {
                    console.log(`The error in the firebase was : ${err} (Category parameter)`);
                })
        } else {
            itemCollection.get()
                .then((querySnapshot) => {
                    if (querySnapshot.size == 0) {
                        console.log("There's no documents with that query");
                        return
                    }
                    console.log("There's documents");
                    setProductArray(querySnapshot.docs.map((doc) => doc.data()));
                    console.log(productArray);
                }
                )
                .catch((err) => {
                    console.log(`The error in the firebase was : ${err}`);
                })
        }
    }, [idParams]);

    return (
        <>
            {(productArray.length > 0) ?
                <div className='itemCatalogue'>
                    {productArray.map(item => {
                        return <Item key={item.id} data={item} />
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
