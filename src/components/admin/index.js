/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:15:11
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 14:40:28
 */

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Icon,message,Modal,Dropdown,Badge } from 'antd';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './index.css';
const { confirm } = Modal;

const { Header, Content, Sider } = Layout;
var mapState =(state)=>{
  return {
    length:state.data.filter((item)=>!item.read).length
  }
}
@withRouter
@connect(mapState)
class Admin extends Component {
  constructor(props){
    super(props);
  }

    go = ({ item, key, keyPath, domEvent })=>{
      if(key !== "quit"){
        this.props.history.push(key);
      }else{
        var that = this;
        confirm({
          title: '确定要退出系统吗?',
          content: '不多玩一会儿嘛~',
          onOk() {
            sessionStorage.clear();
            message.success("退出成功");
            that.props.history.push("/login");
          },
          onCancel() {

          },
        });


      }
    }

    showMenu = ()=>{
      return (<Menu>
        <Menu.Item onClick={this.go} key="/home/message">
            <Badge dot={Boolean(this.props.length)}>通知中心</Badge>
        </Menu.Item>
        <Menu.Item onClick={this.go} key="quit">
            退出
        </Menu.Item>
      </Menu>)
    }
    render() {
      // console.log(this.props);
     return (<Layout>
        <Header className="header">
          <div>
                <div className="logo" />
              <div style={{'color':"#fff",'fontSize':"30px"}}>后台管理系统</div>
          </div>
          <div style={{'color':"#fff",'fontSize':"20px"}}>
            <Dropdown overlay={this.showMenu()} >
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              <Badge count={this.props.length}>
              你好:{sessionStorage.getItem("user")}
              </Badge>
              </a>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              selectedKeys={this.props.location.pathname}
              style={{ height: '100%', borderRight: 0 }}
            >
                <Menu.Item  key="/home/dashboard" onClick={this.go}>
                    <Icon type="dashboard" />
                    <span>仪表盘</span>
                </Menu.Item>
                <Menu.Item key="/home/list" onClick={this.go}>
                    <Icon type="unordered-list" />
                    <span>用户列表</span>
                </Menu.Item>
                <Menu.Item key="/home/setting" onClick={this.go}>
                    <Icon type="setting" />
                    <span>设置</span>
                </Menu.Item>
                <Menu.Item key="quit" onClick={this.go}>
                    <Icon type="close-circle" />
                    <span>退出</span>
                </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>

            <Breadcrumb style={{ margin: '16px 0' }}>
              {this.props.location.pathname.split("/").map((item)=>{
                  return <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
              })}
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
            {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>)
    }
}

export default Admin;