import React from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {addItem} from '../../redux/cartRedux/cartActions'


const useStyles = makeStyles({
    card: {
        maxWidth: 200,
    },
    media: {
        height: 200,
    },
});
const CollectionItem =({item}) =>{
    const {id,name,price,imageUrl} = item;
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {price} $
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>dispatch(addItem(item))}>
                    Add to card
                </Button>
            </CardActions>
        </Card>

    )
};


export default CollectionItem;