import React from 'react'
import "./Item.css"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import VerMasButton from '../VerMasButton/VerMasButton';

const Item = ({ data }) => {
    return (
        <>
            <Card className="itemCard">
                <CardContent className='cardContent' >
                    <Typography variant="h5" component="h2">
                        {data.title}
                    </Typography>
                    <Typography color="textSecondary">
                        {data.category}
                    </Typography>
                    <img className='imgItem' src={data.image} alt="" />
                </CardContent>
                <CardActions>
                    <Link to={`/item/${data.id}`} >
                        <VerMasButton text={"Ver mas"}/>
                    </Link>
                </CardActions>
            </Card>
        </>
    )
}

export default Item
