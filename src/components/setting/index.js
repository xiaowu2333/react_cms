/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:47:23
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-08 23:24:50
 */
import React, { Component } from 'react';
import { Upload, Icon, Modal } from 'antd';
import {upload} from "../../api/request";
import "./index.css";

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }


class Setting extends Component {
    constructor(props){
        super(props);
        this.state = {

            previewVisible: false,
            previewImage: '',
            fileList: [
                {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                },
                {
                uid: '-5',
                name: 'image.png',
                status: 'error',
                },
            ],

        }
    }
    upload = ({file})=>{

        console.log(file);
        var form = new FormData;
        form.append("file",file)
        upload(form).then((res)=>{
            console.log(res.data);
            if(res.data.status===0){

                this.setState({
                    fileList:[...this.state.fileList,{
                        uid: new Date().getTime()*-1,
                        name: 'image.png',
                        status: 'done',
                        url: 'http://localhost:4000'+res.data.path,
                    }]
                },()=>{
                    console.log(this.state.fileList);
                })
            }
        })

    }
    handleCancel = () => this.setState({ previewVisible: false });

    handlePreview = async file => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
        previewImage: file.url || file.preview,
        previewVisible: true,
        });
    };
    remove = (file)=>{
        this.setState({
            fileList:this.state.fileList.filter((item)=>item.uid!==file.uid)
        });
    }
//   handleChange = ({ fileList }) => {
//       this.setState({ fileList });
//   }
    render() {

            const { previewVisible, previewImage, fileList } = this.state;
            const uploadButton = (
              <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
              </div>
            );
            return (
              <div className="clearfix">
                <Upload
                  customRequest={this.upload}
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                onRemove={this.remove}
                  multiple={true}
                >
                  {fileList.length >= 9 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
            );
    }


}

export default Setting;