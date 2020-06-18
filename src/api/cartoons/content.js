import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getSectionContent(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/cartoon/content",
        method: "get",
        params: query
    });
}