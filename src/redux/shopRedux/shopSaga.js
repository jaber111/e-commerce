import {call, put,takeLatest} from "redux-saga/effects";
import CartActionTypes from "./shopTypes";
import {listDataApi} from "../../api/shopDataApi"
import {actionCreator} from "../../utils";

function* loadDataSaga() {
  try{
    let data = yield call(listDataApi);
    console.log(data.status)

    if (data.status===200) {
      yield put({
        type : actionCreator("res",CartActionTypes.LOAD_SHOP_DATA),
        ShopData : data.shopdata
      })
    }
    }catch (e) {
    yield put({ type: actionCreator("fail",CartActionTypes.LOAD_SHOP_DATA), e });
  }
}

export function* watchLoadData() {
  yield takeLatest(
      actionCreator("req",CartActionTypes.LOAD_SHOP_DATA),
      loadDataSaga
  )
}
