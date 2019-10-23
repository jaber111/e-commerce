import React, {useEffect} from 'react';
import Homepage from './components/homepage'
import ShopPage from "./components/shoppage";
import Checkout from "./components/checkout";

import './App.css';
import Navbar from './components/navabar'
import SignIn from './components/signIn'
import SignUp from "./components/signUp";
import {Link, Route} from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { withRouter } from 'react-router-dom'
import {loadShopData} from "./redux/shopRedux/shopActions";
function App() {
    const selectedProps = useSelector(({ userReducer }) => ({
        isConnected : userReducer.isConnected,
        currentUser : userReducer.currentUser
    }));


    return (

            (localStorage.getItem("connected")==="true") ?
        <div>
            <Navbar/>
            <switch>
                <Route exact path='/' component={Homepage}/>
                <Route exact path='/shoppage' component={ShopPage}/>
                <Route exact path='/checkout' component={Checkout}/>
                <Route exact path='/signin' component={SignIn}/>
                <Route exact path='/signup' component={SignUp}/>
            </switch>
        </div> : <div>
                    <span> YOUR NOT CONNECTED </span>
                    <SignIn/>
                </div>


  );
}
export default withRouter(App);
