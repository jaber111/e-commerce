import CartActionTypes from "./cartTypes";
import {actionCreator} from "../../utils";

export const toggleCartHidden = () =>({
        type:CartActionTypes.TOGGLE_CART_HIDDEN
    }
);

export const addItem = item => ({
    type : actionCreator("req",CartActionTypes.ADD_ITEM),
    item : item
});

export const deleteItem = item=>({
    type : actionCreator("req",CartActionTypes.DELETE_ITEM),
    item : item
})