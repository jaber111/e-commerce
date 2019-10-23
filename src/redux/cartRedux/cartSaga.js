import { put, takeLatest,takeEvery,select } from "redux-saga/effects";
import CartActionTypes from "./cartTypes";
import { actionCreator } from "../../utils";
import {addItemToCart, deleteItemCart} from "./cartUtil";


function* AddItemSaga({ item }) {
    let cartItems = yield select(state => state.cartReducer.cartItems);
    if(item)
     yield put({
         type:actionCreator("res",CartActionTypes.ADD_ITEM),
         item :addItemToCart(cartItems,item)
     });
    else yield put({type:actionCreator("fail",CartActionTypes.ADD_ITEM)});
}

function* DeleteItemSaga({item}) {
    let cartItems = yield select(state => state.cartReducer.cartItems);
    if(item)
        yield put({
            type:actionCreator("res",CartActionTypes.DELETE_ITEM),
            item : deleteItemCart(cartItems,item)
        });
    else yield put({type:actionCreator("fail",CartActionTypes.DELETE_ITEM)})
}

export function* watchAddItem() {
    yield takeLatest(
        actionCreator("req",CartActionTypes.ADD_ITEM),
        AddItemSaga
    )
}

export function* watchDeleteItem() {
    yield takeEvery(
        actionCreator("req",CartActionTypes.DELETE_ITEM),
        DeleteItemSaga
    )
}
