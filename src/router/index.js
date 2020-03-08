/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:23:34
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-09 01:30:12
 */
import React from 'react'
import Loadable from 'react-loadable'

const Home = Loadable({
    loader: () => import('../App'),
    loading: ()=><div>loadding...</div>,
});

const Login = Loadable({
    loader: () => import('../components/login'),
    loading: ()=><div>loadding...</div>,
});

const Register = Loadable({
    loader: () => import('../components/register'),
    loading: ()=><div>loadding...</div>,
});

const Dashboard = Loadable({
    loader: () => import('../components/dashboard'),
    loading: ()=><div>loadding...</div>,
});

const List = Loadable({
    loader: () => import('../components/list'),
    loading: ()=><div>loadding...</div>,
});

const Message = Loadable({
    loader: () => import('../components/message'),
    loading: ()=><div>loadding...</div>,
});

const Setting = Loadable({
    loader: () => import('../components/setting'),
    loading: ()=><div>loadding...</div>,
});


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