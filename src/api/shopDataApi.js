import { get } from "../utils/httpMethods";


export const listDataApi = () => {
    return get("http://localhost:8081/items"
    );
}