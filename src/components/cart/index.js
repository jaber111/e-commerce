import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux"
import { withRouter } from 'react-router-dom'

import CartItem from "./CartItem";
const useStyles = makeStyles(theme => ({
    cart: {
        position: "absolute",
        width: "240px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border:" 1px solid black",
        backgroundColor: "white",
        top: "90px",
        right:"40px",
        zIndex: "5",
    },
    classCartItem:{
        height: "240px",
        display: "flex",
        flexDirection: "column",
        overflow: "scroll",
    },
    button:{
        marginTop: "auto",
        backgroundColor: "black",
        color:"white",
}
}));

 function Cart({history}) {
    const classes = useStyles();
     const selectedProps = useSelector(({ cartReducer }) => ({
           cartItems : cartReducer.cartItems
     }));
    return(
    <div className={classes.cart}>
     <div className={classes.classCartItem}>
         {
             (selectedProps.cartItems.length!==0) ?
             selectedProps.cartItems.map(item =><><CartItem
                 key={item.id} item={item}
             />
                 <div style={{border:"0.5px solid #C1CCBF"}}/>
             </>) : <span> YOUR CART IS EMPTY </span>

         }
     </div>
        <Button className={classes.button} onClick={()=>history.push("/checkout")}>GO TO CHECKOUT</Button>
    </div>
    )
}

export default withRouter(Cart);