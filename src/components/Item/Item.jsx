import React from 'react'
import "./Item.css"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Item = ({ data }) => {
    return (
        <>
            <Card className="itemCard">
                <CardContent className='cardContent' >
                    <Typography variant="h5" component="h2">
                        {data.nombre}
                    </Typography>
                    <img className='imgItem' src={data.imagen} alt="" />
                    <Typography color="textSecondary">
                        {data.color}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {data.descripcion}
                        <br />
                        Precio : ${data.precio}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default Item
