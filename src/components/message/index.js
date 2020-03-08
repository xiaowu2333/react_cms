/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:46:14
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 14:42:14
 */
import React, { Component } from 'react';
import { Spin,Card,List, Avatar ,Badge,Button } from 'antd';
import actionCreator from '../../store/actionCreator.js';
import {connect} from "react-redux";
const mapState = (state)=>{
    return {
        loading:state.loading,
        data:state.data,
        length:state.data.filter((item)=>!item.read).length
    }
}

@connect(mapState,actionCreator)
class Message extends Component {



    render() {
        return (
            <div>
                <Card title="通知中心"  bordered={false}
                extra={<Button disabled={!Boolean(this.props.length)}  onClick={this.props.readAll}>设置为全部已读</Button>}>
                    <Spin spinning={this.props.loading}>
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                        <List.Item  extra={<Button disabled={item.read} onClick={this.props.readById.bind(this,item.id)}>设置为已读</Button>}>
                            <List.Item.Meta
                            avatar={<Badge dot={!item.read}><Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></Badge>}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                    />,
                    </Spin>
                </Card>
            </div>
        );
    }
}

export default Message;