import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from '@material-ui/core/styles';
import {useDispatch} from "react-redux";
import {deleteItem} from "../../redux/cartRedux/cartActions";

const useStyles = makeStyles(theme => ({
    classCartItem: {
        width:"100%",
        display:"flex",
        height: "50px",
        marginBottom: "15px",
        borderTopColor : "0.5px solid #C1CCBF",
        marginTop:"10px"
    },
    classImg: {
        height:"50px",
        width:"50px",
    },
    classItemDetail:{
        width: "70%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent : "center",
        padding: "10px 20px",
    },
    name :{
        fontSize: "20px",

    }
}));
function CheckoutItem({item}){
    const classes = useStyles();
    const dispatch = useDispatch();

    return(
        <div className={classes.classCartItem}>
            <img className={classes.classImg}
                 src={item.imageUrl}
                 alt='image'
            />
            <div className={classes.classItemDetail}>
                <span className={classes.name}>{item.name}</span>
                <span className={classes.name}>{item.quantity} x {item.price} $</span>
            </div>
            <DeleteIcon onClick={()=>dispatch(deleteItem(item))}/>
        </div>
    );
}
export default CheckoutItem;