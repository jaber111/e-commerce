import {AUTHENTICATE} from "./userTypes";
import {actionCreator} from "../../utils";

export const authenticate = (credentials, setErrors) => ({
    type: actionCreator("req", AUTHENTICATE),
    credentials,
    setErrors
});