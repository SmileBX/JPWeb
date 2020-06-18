import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getBooksContent(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/book/content",
        method: "get",
        params: query
    });
}