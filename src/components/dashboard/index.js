/*
 * @Descripttion:
 * @version:
 * @Author: xiaowu
 * @Date: 2020-03-06 16:45:38
 * @LastEditors: xiaowu
 * @LastEditTime: 2020-03-07 01:12:28
 */
import React, { Component } from 'react';
import echarts from "echarts";

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            option:{
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                legend: {
                    data:['销量']
                },
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            }
        }
    }
    componentDidMount(){
        var myChart = echarts.init(document.getElementById('main'));
        myChart.setOption(this.state.option);
    }

    render() {
        return (
            <div>
                <div id="main" style={{width: "600px",height:"400px"}}></div>
            </div>
        );
    }
}

export default Dashboard;