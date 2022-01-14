import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ title }) => {
    return (
        <div>
            <h2>
                {title}
            </h2>
            <ItemCount stock={10} initial={1} />
            <ItemList />
        </div>
    )
}

export default ItemListContainer
