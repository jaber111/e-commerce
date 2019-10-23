import {AUTHENTICATE} from './userTypes';
import {actionCreator} from "../../utils";
const defaultState = {
    isLoading: false,
    isConnected: false,
    data :[],
    currentUser:null,
};

export default function(state = defaultState, action) {
    switch (action.type) {
        case actionCreator("req", AUTHENTICATE):
            return { ...state, isLoading: true };
        case actionCreator("res", AUTHENTICATE):
            return {
                ...state,
                isLoading: false,
                isConnected: true,
                data : action.data,
                currentUser:action.currentUser
            };
        case actionCreator("fail", AUTHENTICATE):
            return { ...state, isLoading: false, isConnected: false };
        default:
            return state;
    }
}