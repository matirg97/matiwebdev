import React from 'react'
import ItemList from '../ItemList/ItemList'
import { Typography } from '@material-ui/core'

const ItemListContainer = ({ title }) => {
    return (
        <div>
            <Typography variant='h4' component="h2" className='catalogueTitle'>
                {title}
            </Typography>
            <ItemList />
        </div>
    )
}

export default ItemListContainer
