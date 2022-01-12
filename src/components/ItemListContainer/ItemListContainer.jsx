import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({title}) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <ItemCount stock={10} initial={1} />
        </div>
    )
}

export default ItemListContainer
