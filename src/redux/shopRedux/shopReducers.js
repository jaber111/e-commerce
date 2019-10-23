import CartActionTypes from "./shopTypes";
import {actionCreator} from "../../utils";

const INITIAL_STATE ={
    isLoading:false,
    ShopData:[],
};

export default function(state=INITIAL_STATE,action){
    switch (action.type) {
        case actionCreator("req",CartActionTypes.LOAD_SHOP_DATA):
            return {
                ...state,
                isLoading: true,
            }
        case actionCreator("res",CartActionTypes.LOAD_SHOP_DATA):
            return {
                ...state,
                isLoading: false,
                ShopData: action.ShopData
            }
        case actionCreator("fail",CartActionTypes.LOAD_SHOP_DATA):
            return {
                ...state,
                isLoading:false,
            };
        default:
            return state;

    }
}