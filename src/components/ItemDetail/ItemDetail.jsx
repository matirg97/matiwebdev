
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";



const ItemDetail = ({ data }) => {
    return (
        <>
            <Card className="itemCardDetail">
                <CardContent className='cardContentDetail' >
                    <img className='imgItemDetail' src={data.image} alt="" />
                    <div className='divDescBox'>
                        <Typography variant="h5" component="h2">
                            {data.title}
                        </Typography>
                        <Typography color="textSecondary">
                            {data.category}
                        </Typography>
                        <Typography variant="body2" component="p">
                            <Box fontSize={16}>
                            {data.description}
                            </Box>
                            <br />
                            <Box fontWeight="fontWeightBold">
                            Precio : U$D {data.price}
                            </Box>
                        </Typography>
                        <CardActions className="itemCountDiv">
                            <ItemCount stock={10} initial={1} />
                        </CardActions>
                    </div>

                </CardContent>
            </Card>
        </>
    )
}

export default ItemDetail
