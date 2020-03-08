/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-08 15:50:24
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 20:13:44
 */
/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:46:59
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 15:05:06
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button, message,Radio } from 'antd';
import {register} from '../../api/request';
import "./index.css";

@Form.create({ name: 'normal_login' })
class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:false
        }

    }

    toLogin = e=>{
        e.preventDefault();
        this.props.history.push("/login");
      }
    handleSubmit = e => {
        this.setState({
            loading:true
        })
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            let {username,password,roles} = values;

            register(username,password,roles).then(res=>{
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
              <Form.Item label="身份">
                {getFieldDecorator('roles',{
                    initialValue :1,
                })(
                    <Radio.Group buttonStyle="solid">
                    <Radio.Button value={1} >普通</Radio.Button>
                    <Radio.Button value={2}>管理员</Radio.Button>
                    <Radio.Button value={3}>超级管理员</Radio.Button>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item>

                <Button type="primary" htmlType="submit" loading={this.state.loading} className="login-form-button">
                register
                </Button>
                Or <a onClick={this.toLogin}>login now!</a>
              </Form.Item>
            </Form>
            </div>
        );
    }
}

export default Register;