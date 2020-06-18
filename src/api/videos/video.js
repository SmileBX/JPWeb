import axios from "../../utils/axios";
import global from '../../components/common/Global';


export function getVideosByPage(query) {
    return this.$http.get(
        global.BOOK_URL+"/video/list",
        query
    );
}

