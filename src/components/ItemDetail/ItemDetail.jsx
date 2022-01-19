
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css";



const ItemDetail = ({data}) => {
    return (
        <>
            <Card className="itemCard">
                <CardContent className='cardContent' >
                    <Typography variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <img className='imgItem' src={data.image} alt="" />
                    <Typography color="textSecondary">
                        {data.category}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.description}
                        <br />
                        Precio : ${data.price}
                    </Typography>
                </CardContent>
                <CardActions className="itemCountDiv">
                    <ItemCount stock={10} initial={1} />
                </CardActions>
            </Card>
        </>
    )
}

export default ItemDetail
