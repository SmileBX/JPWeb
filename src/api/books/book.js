import axios from "../../utils/axios";
import global from '../../components/common/Global';


// export function getImageUrls(pageIndex) { 
//     return axios({
//         url: "/books/getImages",
//         method: "get",
//         params: { index }
//     });
// }

export function getBooksByPage(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/book/list",
        method: "get",
        params: query
    });
}
export function getBookInfo(query) {
    return axios({
        baseURL: global.BOOK_URL,
        url: "/book/bookInfo",
        method: "get",
        params: query
    });
}
