import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import "./ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {

    const [counter, setCounter] = useState(initial);

    return (
        <div>
            {counter > 0 && counter <= stock ?
            <Button variant="outlined" className='countButton' onClick={() => setCounter(counter - 1) }>-</Button> 
            :
            <Button variant="outlined" className='countButton'>-</Button>}
            <span className='counterSpan'>{counter}</span>
            {counter >= 0 && counter < stock ?
            <Button variant="outlined" className='countButton' onClick={() => setCounter(counter + 1)}>+</Button>
            : 
            <Button variant="outlined" className='countButton'>+</Button>}
            <div>
                {counter > 0 ? 
                <Button variant="outlined" className='addToCart' onClick={() => console.log(`Se agregaron ${counter} item/s al carrito`)}>Agregar al carrito</Button> 
                : 
                <Button variant="outlined" className='addToCart' onClick={() => console.log(`No se seleccionaron items`)}>Agregar al carrito</Button>}
            </div>
        </div>
    )
}

export default ItemCount
