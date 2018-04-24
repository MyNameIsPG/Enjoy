import * as axios from 'axios'
var AV = require('leancloud-storage/live-query');
//var AV = require('leancloud-storage/live-query');
import BASEDATA from '@/util/config.js'

AV.init({
    appId: BASEDATA.appInfo.appId,
    appKey: BASEDATA.appInfo.appKey
});

//注册
export function login2(params) {
    return new Promise((resolve, reject) => {
        var user = new AV.User();
        user.setUsername(params.username);
        user.setPassword(params.password);
        user.setEmail(params.email);
        user.signUp().then(function(loginedUser) {
            console.log(loginedUser);
        }, function(error) {
            alert(0)
        });
    })
}

//登录
export function denglu(params) {
    return new Promise((resolve, reject) => {
        AV.User.logIn(params.username1, params.password1).then(function(loginedUser) {
            resolve(loginedUser)
        });
    })
}

//新增帮助文档
export function help(params) {
    return new Promise((resolve, reject) => {
        let Query = AV.Object.extend('HelpFile');
        let query = new Query();
        query.set('title', params.title)
        query.set('contern', params.contern)
        query.save().then(res => {
            resolve(res)
        }, (err) => {
            reject(err)
        })
    })
}

//查询单条记录objectId
export function helpList(params) {
    return new Promise((resolve, reject) => {
        var query = new AV.Query('HelpFile');
        query.get(params.uuid).then(function(HelpFile) {
            console.log(HelpFile)
        }, function(error) {
            // 异常处理
        });
    })
}

//查询单条记录objectId
export function helpListlist(params) {
    return new Promise((resolve, reject) => {
        var cql = 'select * from HelpFile limit ?,?'
            //var cql = 'select * from HelpFile where status = 1'
        var pvalues = [params.pageNub, params.pageSize];
        AV.Query.doCloudQuery(cql, pvalues).then(function(data) {
            var results = data.results;
        });
    })
}