import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getCartoonByPage(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/cartoon/list",
        method: "get",
        params: query
    });
}


export function getCartoonInfo(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/cartoon/cartoonInfo",
        method: "get",
        params: query
    });
}