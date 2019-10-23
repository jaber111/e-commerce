import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import Cart from '../cart'
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux';
import {totalItem} from "../../redux/cartRedux/cartUtil";
import Avatar from '@material-ui/core/Avatar';
import avatar from '../../assets/img/avatar.jpg'

const useStyles = makeStyles(theme => ({
    header:{
    height: "70px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "25px",
    },
   options: {
       width: "100%",
       height: "100%",
       display: "flex",
       alignItems: "center",
       justifyContent: "flex-end",
       marginRight:"20px",
   },
    option:{
        padding: "10px 15px",

}
}));
   function AppBar(){
       const [hidden,setHidden] = useState(true);
       const classes = useStyles();
       const selectedProps = useSelector(({ cartReducer,userReducer }) => ({
           cartItems : cartReducer.cartItems,
           currentUser : userReducer.currentUser
       }));
       return(
        <div className={classes.header}>
            <div className={classes.options}>
                <Link className={classes.option} to='/'>
                    SHOP
                </Link>
                <Link className={classes.option} to='/shoppage'>
                    CONTACT
                </Link>
                <Badge
                    color="secondary"
                   badgeContent={totalItem(selectedProps.cartItems)}
                >
                <ShoppingCartIcon onClick={()=>{
                    hidden ? setHidden(false) : setHidden(true)}
                }>
                </ShoppingCartIcon>
                </Badge>
            </div>
            {
                hidden ? null : <Cart/>

            }
            <Avatar alt="Stock avatar" src={avatar}/>
            <h6>{selectedProps.currentUser}</h6>
        </div>
    );
}





export default AppBar;