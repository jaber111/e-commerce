import {call, put,takeLatest} from "redux-saga/effects";
import CartActionTypes from "./shopTypes";
import {listDataApi} from "../../api/shopDataApi"
import {actionCreator} from "../../utils";

function* loadDataSaga() {
  try{
    let data = yield call(listDataApi);
    if (data.status === 200) {
      yield put({
        type : actionCreator("res",CartActionTypes.LOAD_SHOP_DATA),
        ShopData : data.data
      })
    }
  }catch (e) {
    console.log(e)
    yield put({ type: actionCreator("fail",CartActionTypes.LOAD_SHOP_DATA), e });
  }
}

export function* watchLoadData() {
  yield takeLatest(
      actionCreator("req",CartActionTypes.LOAD_SHOP_DATA),
      loadDataSaga
  )
}
