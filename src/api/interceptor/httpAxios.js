import axios from 'axios';

export const request = (config) => {
    return axios(config);
};

// http request 拦截器
axios.interceptors.request.use(
    (config) => {
        config.headers.token = localStorage.token;  // token保存在store中
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    (response) => {
        if (response.data.code == 408) {
            this.$router.push({
                path: "/user/login"
            });
        }
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response.data);
    }
);