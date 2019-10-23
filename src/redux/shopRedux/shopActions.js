import CartActionTypes from "./shopTypes";
import {actionCreator} from "../../utils";

export const loadShopData = () => ({
    type : actionCreator("req",CartActionTypes.LOAD_SHOP_DATA)
});
