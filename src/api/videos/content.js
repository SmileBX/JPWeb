import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getVideosInfo(query) {
    return this.$http.get({
        baseURL: global.BOOK_URL,
        url: "/video/videoInfo",
        method: "get",
        params: query
    });
}