import axios from 'axios';
import qs from 'qs';
axios.defaults.baseURL = '/api' //此路径为配置代理服务器时的代理路径

export default {
    get(url, data) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params: data
            }).then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data) {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data)).then(response => {
                resolve(response.data);
            }).catch(err => {
                reject(err);
            })
        })
    }
};