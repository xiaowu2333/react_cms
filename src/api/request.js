/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 23:25:30
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 17:16:59
 */
import axios from './index';

//获取列表数据
export const getUsers = (page,pageSize)=>{
    return axios.get('/users/getusers',{params:{page,pageSize}})
}

// 添加
export const register = (username,userpwd,usertype)=>{
    return axios.post('/users/register',{username,userpwd,usertype});
}


//删除用户
export const removeUserById=(id)=>{
    return axios.post("/users/del",{id});
}

//登录
export const login=(username,password)=>{
    return axios.post("/users/login",{username,password});
}

//退出
export const quit=()=>{
    return axios.post("/users/quit");
}

//上传
export const upload=(data)=>{
    return axios.post("/upload",data)
}