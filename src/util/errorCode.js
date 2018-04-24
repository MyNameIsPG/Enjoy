// xxx.js 组件
//import TIP from '@/util/tip'

exports.install = function(Vue, options) {
    Vue.prototype.errorCode = function(err) {
        //alert(TIP[err]);
        alert(err)
    };
};