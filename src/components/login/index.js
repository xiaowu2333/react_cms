/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:46:59
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 20:13:06
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import {login} from '../../api/request';
import "./index.css";

@Form.create({ name: 'normal_login' })
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false
        }

    }
    toRegister = e=>{
      e.preventDefault();
      this.props.history.push("/register");
    }
    handleSubmit = e => {
        this.setState({
            loading:true
        })
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let {username,password} = values;
            login(username,password).then(res=>{
                console.log(res);
                if(res.data.code === 1){
                   sessionStorage.setItem("token",res.data.token);
                   sessionStorage.setItem("user",res.data.user);
                   sessionStorage.setItem("roles",res.data.roles);


                   message.success(res.data.msg);
                   this.props.history.push("/");
               }else if(res.data.code === 0){
                    message.error(res.data.msg);
                    this.setState({
                        loading:false
                    })

               }else if(res.data.code === -1){
                    message.error(res.data.msg);
                    this.setState({
                        loading:false
                    })
               }
            });
          }
        });
      };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login-wrap">
                <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>

                <Button type="primary" htmlType="submit" loading={this.state.loading} className="login-form-button">
                  Log in
                </Button>
                Or <a onClick={this.toRegister}>register now!</a>
              </Form.Item>
            </Form>
            </div>
        );
    }
}

export default Login;