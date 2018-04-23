import * as axios from 'axios'
import { getCookie, setCookie } from '@/util/util'
import Qs from 'qs'

let expireDays = 1000 * 60 * 60;
if (GetRequest().access_token) {
    setCookie('access_token', GetRequest().access_token, expireDays);
    setCookie('orgId', GetRequest().orgId, expireDays);
}

function GetRequest() {
    var url = location.href;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("?")[1];
        var strs1 = strs.split("&");
        for (var i = 0; i < strs1.length; i++) {
            theRequest[strs1[i].split("=")[0]] = unescape(strs1[i].split("=")[1]);
        }
    }
    return theRequest;
}

let options = {
    headers: {
        'access_token': getCookie('access_token'),
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function(data) {
        // 对 data 进行任意转换处理
        return Qs.stringify(data, { arrayFormat: 'brackets' })
    }],
    paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
}

export default axios.create(options)