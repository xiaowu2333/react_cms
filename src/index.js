/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 01:38:46
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-07 16:22:42
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {routerList} from "./router";
import {Provider} from "react-redux";
import store from './store';
import { BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import NotFound from './components/notfound';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                {routerList.map(({path,component})=>{
                    return <Route key={path} path={path} component={component} />
                })}
                <Redirect from='/' to='/home' exact />
                <Route component={NotFound} />
            </Switch>
            {/* <App /> */}
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
