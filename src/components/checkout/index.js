import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector} from "react-redux"
import { withRouter } from 'react-router-dom'
import {totalPrice} from "../../redux/cartRedux/cartUtil";
import StripeCheckoutButton from "../stripeButton/StripeButton";

import CheckoutItem from "./CheckoutItem";
const useStyles = makeStyles(theme => ({
    cart: {
        position:"relative",
        width: "800px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        border:" 1px solid black",
        backgroundColor: "white",
        marginLeft: "100px",
        zIndex: "5",
    },
    classCartItem:{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        overflow: "scroll",
    },
    classTotal:{
        marginTop: "40px",
        textAlign: "-webkit-center"
    }

}));

function Checkout() {
    const classes = useStyles();
    const selectedProps = useSelector(({ cartReducer }) => ({
        cartItems : cartReducer.cartItems,
        totalPrice : cartReducer.totalPrice
    }));
    return(
        <>
        <div className={classes.cart}>
            <div className={classes.classCartItem}>
                {
                    selectedProps.cartItems.map(item =><><CheckoutItem
                        key={item.id} item={item}
                    />
                        <div style={{border:"0.5px solid #C1CCBF"}}/>
                    </>)
                }

            </div>
            <span className={classes.classTotal}>TOTAL : {totalPrice(selectedProps.cartItems)}</span>
            <StripeCheckoutButton price={totalPrice(selectedProps.cartItems)}/>
        </div>
        </>
    )
}

export default withRouter(Checkout);