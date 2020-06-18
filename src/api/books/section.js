import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getSectionList(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/book/sections",
        method: "get",
        params: query
    });
}
