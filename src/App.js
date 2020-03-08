/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 01:38:46
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 15:46:15
 */
import React, { Component } from 'react';
import axios from 'axios';

import {subRouterList} from "./router";

import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import Admin from "./components/admin";
import MyRoute from "./components/myroute";


class App extends Component {

  render() {
    return (
      <div>
        {sessionStorage.getItem("token")? <Admin>
          <Switch>
            {subRouterList.map((item)=>{
              return <MyRoute key={item.path} roles={item.roles} path={item.path} component={item.component} />
            })}
            <Redirect from="/home" to="/home/dashboard" />
          </Switch>
        </Admin>:<Redirect to="/login" />}


      </div>
    );
  }
}

export default App;