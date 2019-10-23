import axios from "axios";


export const listDataApi = () => {
    return axios.get("https://my-json-server.typicode.com/jaber111/api_demo/shopdata"
    );
}