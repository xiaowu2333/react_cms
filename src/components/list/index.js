/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:45:55
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-07 11:14:52
 */
import React, { Component } from 'react';
import { Table,Button,Modal,message,Card } from 'antd';
import {getUsers,removeUserById} from '../../api/request';


class List extends Component {
    constructor(props){
        super(props);
        this.state = {
          //模态框数据
          id:0,
          ModalText: '确定删除吗',
          visible: false,
          confirmLoading: false,
          //列表数据
            count:0,
            data: [],
            page:1,
            loading: true,
            pageSize:7,
            columns: [
              {
                title: '姓名',
                dataIndex: 'name',
                key:'name',
                width: '30%',
              },
              {
                title: '年龄',
                dataIndex: 'age',
                key:'age',
                width: '30%',
              },
              {
                title: '操作',
                dataIndex: 'operate',
                key:'operate',
                render:(text,record)=>{
                  return <Button type="danger" onClick={this.remove.bind(this,record.key)}>删除</Button>
                }
              },
            ]
    }}

    //确定删除 ，打开模态框
    remove = (id)=>{
      this.setState({
        id:id,
        visible: true,
      });
    }

    //cancel按钮
    handleCancel = () => {
      this.setState({
        visible: false,
      });
    };

    //确定按钮
    handleOk = () => {
      this.setState({
        confirmLoading: true,
      });
      removeUserById(this.state.id).then((res)=>{
        // console.log(res);
        if(res.data.code === "1"){
          this.setState({
            confirmLoading: false,
            visible: false
          });
          message.success('删除成功');
          this.getData(this.state.page,this.state.pageSize);
        }else{
          this.setState({
            confirmLoading: false,
            visible: false
          });
          message.error('删除失败');
        }
      })

    }
    getData = (page,pageSize)=>{
      this.setState({
        loading: true,
      });
      getUsers(page,pageSize).then((res)=>{
        console.log(res);
        var list = res.data.data.map(({_id,username,age})=>{
          return {
            key: _id,
            name:username,
            age
          }
        });

        this.setState({
            loading: false,
            data:list,
            count:res.data.count
        });

      })
    }
    componentDidMount() {
      this.getData(1,this.state.pageSize);
    }
    getPageContent = (page,pageSize)=>{
      this.setState({page});
      this.getData(page,pageSize);
    }
    render() {
      let {data,count,pageSize,loading,columns,visible,confirmLoading,ModalText} = this.state;
        return (
          <div>
            <Modal
          title="删除"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
        <Card bordered={false} title="学生列表" extra={<Button type="primary" onClick={this.goAdd}>添加</Button>}>
          <Table
                columns={columns}
                dataSource={data}
                pagination={{total:count,pageSize,onChange:this.getPageContent}}
                loading={loading}
          />
      </Card>
          </div>
        );
    }

    componentWillUnmount(){  //解决异步数据回来时,组件却卸载了
      //重写组件的setState方法，直接返回空
      this.setState = (state,callback)=>{
        return;
      };
  }
}

export default List;