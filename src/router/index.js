/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:23:34
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 20:19:53
 */
import Home from "../App";
import Login from "../components/login";
import Register from "../components/register";

import Dashboard from "../components/dashboard";
import List from "../components/list";
import Message from "../components/message";
import Setting from "../components/setting";




export const routerList = [
    {
        path:"/home",
        component:Home,
    },
    {
        path:"/login",
        component:Login,
    },
    {
        path:"/register",
        component:Register,
    },

];

export const subRouterList = [
    {
        path:"/home/dashboard",
        component:Dashboard,
        roles:["common","admin","super"]
    },
    {
        path:"/home/list",
        component:List,
        roles:["admin","super"]
    },
    {
        path:"/home/message",
        component:Message,
        roles:["common","admin","super"]
    },
    {
        path:"/home/setting",
        component:Setting,
        roles:["super"]
    },
];