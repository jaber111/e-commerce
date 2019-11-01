import axios from "axios";
import { get } from "../utils/httpMethods";

export const authenticationApi = user => {
    var formData = new URLSearchParams();

    for (var k in user) {
        formData.append(k, user[k]);
    }
    return axios
        .post("http://localhost:8080/auth/realms/spring-boot/protocol/openid-connect/token", formData, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(response => response.data);
};

export const listItem = () => {
    return get("http://localhost:8081/items");
}