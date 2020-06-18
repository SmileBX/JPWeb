import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function register(userInfo) {
    return axios.post(
        global.BOOK_URL+"/user/register",
         userInfo
    );
}

export function login(userInfo) {
    return axios.post(
        global.BOOK_URL+"/user/login",
         userInfo
    );
}
