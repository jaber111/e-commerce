import React from "react";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    classCartItem: {
        width:"100%",
        display:"flex",
        height: "40px",
        marginBottom: "15px",
        borderTopColor : "1px solid black",
        marginTop:"10px"
},
    classImg: {
        height:"30px",
        width:"40px",
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
        fontSize: "16px",

}
}));
function CartItem({item: {imageUrl,price,name,quantity}}){
    const classes = useStyles();
    return(
    <div className={classes.classCartItem}>
        <img className={classes.classImg}
             src={imageUrl}
             alt='image'
        />
        <div className={classes.classItemDetail}>
            <span className={classes.name}>{name}</span>
            <span className={classes.name}>{quantity} x {price} $</span>
        </div>
    </div>
);
}
export default CartItem;