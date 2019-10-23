import {authenticationApi,listItem} from "../../api/userApi"
import {actionCreator,setToken} from "../../utils";
import {call, put,takeLatest} from "redux-saga/effects";
import {AUTHENTICATE} from './userTypes';
import { toastrError} from "../../utils/toastr";
import { CONST_ACCESS_TOKEN} from "../../utils/const";
import { CONST_REFRESH_TOKEN} from "../../utils/const";
import jwt_decode from 'jwt-decode';



function* authentication({ credentials, setErrors }) {
    try {
        credentials["client_id"] = "items-app";
        credentials["grant_type"] = "password";
        // call keycloak
        let authCredentiels = yield call(authenticationApi, credentials);

        setToken(CONST_ACCESS_TOKEN, authCredentiels.access_token);
        setToken(CONST_REFRESH_TOKEN, authCredentiels.refresh_token);
        localStorage.setItem("connected",true);

        let decoded = jwt_decode(authCredentiels.access_token);
        console.log("**********************************************************************************************");
        console.log(decoded.realm_access.roles);
        console.log("**********************************************************************************************");

        let permissions = yield call(listItem);
        console.log(permissions);


            yield put({
                type: actionCreator("res", AUTHENTICATE),
                data: permissions[0],
                currentUser : decoded.name
            })
    } catch (error) {
        let alert;
        if (error.response && error.response.status === 401)
            alert = "login ou mot de passe incorrect";
        else if (error.response && error.response.status === 500)
            alert =
                "Le portail client est actuellement indisponible. Merci de réessayer dans quelques instants";
        else alert = "une erreur technique est survenue";
        toastrError(alert);
        setErrors({
            username: " ",
            password: " "
        });
        yield put({ type: actionCreator("fail", AUTHENTICATE) });
    }
}
export function* watchLoginUser() {
    yield takeLatest(actionCreator("req", AUTHENTICATE), authentication);
}