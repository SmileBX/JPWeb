import global from '../../components/common/Global';
import { request } from '../interceptor/httpAxios.js';  //此处问http文件的路径

export function get(url, query) {
    return request({
        baseURL: global.BOOK_URL, method: 'get', url: url, params: query
    });
}

export function post(url, body) {
    return request({
        baseURL: global.BOOK_URL, method: 'post', url: url, params: body
    });

}