export const actionCreator = (typeReq, action) => {
    switch (typeReq) {
        case "req":
            return action + "_REQUEST";
        case "res":
            return action + "_RESPONSE";
        case "fail":
            return action + "_FAILD";
        default:
            return action + "_FAILD";
    }
};

export function setToken(type, token) {
    localStorage.setItem(type, token);
}

export function getToken(type) {
    return localStorage.getItem(type);
}