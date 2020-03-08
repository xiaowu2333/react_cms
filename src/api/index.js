/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:23:59
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-07 11:30:29
 */
import axios from "axios";

const service = axios.create({
    baseURL: '/api',
    "content-type":"application/json",
    timeout: 5000,
});

//请求拦截器
service.interceptors.request.use((config)=>{
    //带上token
    console.log("发起请求了");
    if(sessionStorage.getItem("token")){
        config.headers = {"token":sessionStorage.getItem("token")};
    }
    return config;
});

//响应拦截器
service.interceptors.response.use((res)=>{
    //判断token
    console.log("响应了");
    // console.log(res.data.tokenStatus)
    if(res.data.tokenStatus === -1){
        window.location.href = "/login";
    }

    return res;
});


export default service;