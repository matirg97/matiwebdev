import React from 'react'
import ItemList from '../ItemList/ItemList'
import { Typography } from '@material-ui/core'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ title }) => {

    let { idCategory } = useParams();

    return (
        <div>
            <Typography variant='h4' component="h2" className='catalogueTitle'>
                {title}
            </Typography>
            <ItemList idParams={idCategory} />
        </div>
    )
}

export default ItemListContainer
