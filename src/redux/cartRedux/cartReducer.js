import CartActionTypes from "./cartTypes";
import {actionCreator} from "../../utils";
const INITIAL_STATE ={
    isLoading:false,
    hidden : true,
    cartItems:[],
    totalPrice :0
}

export default function(state=INITIAL_STATE,action){
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            };
        case actionCreator("req",CartActionTypes.ADD_ITEM):
        case actionCreator("req",CartActionTypes.DELETE_ITEM):
            return {
                ...state,
                isLoading:true,
            };
        case actionCreator("res",CartActionTypes.ADD_ITEM):
            return {
                ...state,
                isLoading:false,
                cartItems: action.item
            };
        case actionCreator("res",CartActionTypes.DELETE_ITEM):
            return{
                ...state,
                isLoading: false,
                cartItems: action.item
            }
        case actionCreator("fail",CartActionTypes.ADD_ITEM):
        case actionCreator("fail",CartActionTypes.DELETE_ITEM):
            return {
                ...state,
                isLoading:false,
            };
        default:
            return state;
    }
}
