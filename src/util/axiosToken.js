import * as axios from 'axios'
//import { getCookie, setCookie } from '@/util/util'
import Qs from 'qs'

let options = {
    headers: {
        //'access_token': getCookie('access_token'),
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    transformRequest: [function(data) {
        debugger
        // 对 data 进行任意转换处理
        return Qs.stringify(data, { arrayFormat: 'brackets' })
    }],
    paramsSerializer: function(params) {
        debugger
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
}

export default axios.create(options)