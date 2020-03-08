/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-08 14:52:40
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 20:18:36
 */
import React, { Component } from 'react';
import {Route} from "react-router-dom";

class MyRouter extends Component {
    render() {

        let status = sessionStorage.getItem("roles")*1;

        let persion = "";

        if(status===1){
            persion = "common";
        }else if(status===2){
            persion = "admin"
        }else if(status===3){
            persion = "super"
        }else{
            sessionStorage.clear();
           window.location.href = "/login";
        }
        let {component:Com,path,roles} = this.props;
        // console.log(persion);
        let permission =  roles.some((item)=>item===persion);
        return (
            <Route path={path} render={(props)=>{
                return permission?<Com {...props} />:<div>您无权访问</div>
            }} />
        )

    }
}

export default MyRouter;