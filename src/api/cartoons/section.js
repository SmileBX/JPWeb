import axios from "../../utils/axios";
import global from '../../components/common/Global';

export function getSectionsByPage(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/cartoon/sections",
        method: "get",
        params: query
    });
}
