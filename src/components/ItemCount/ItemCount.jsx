import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import "./ItemCount.css"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial);

    function restButton() {
        if ((counter > 0) && (counter <= stock)) {
            setCounter(counter - 1);
        }
    }

    function sumButton() {
        if ((counter >= 0) && (counter < stock)) {
            setCounter(counter + 1);
        }
    };

    return (
        <div className='principalItemCountDiv'>
            <div className='countButtons'>
                <Button variant="outlined" className='countButton' onClick={restButton}>-</Button>
                <span className='counterSpan'>{counter}</span>
                <Button variant="outlined" className='countButton' onClick={sumButton}>+</Button>
            </div>
            <div className='addToCartButton'>
                <Button variant="outlined" className='addToCart' onClick={() => onAdd(counter)}>Agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount
