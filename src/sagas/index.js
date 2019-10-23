import { fork, all } from "redux-saga/effects";
import * as cartSagas from "../redux/cartRedux/cartSaga";
import * as shopSagas from "../redux/shopRedux/shopSaga";
import * as userSagas from "../redux/userRedux/userSaga"
export default function* rootSaga() {
    yield all(
   [
       ...Object.values(userSagas),
       ...Object.values(cartSagas),
       ...Object.values(shopSagas)].map(fork)
    )
}
