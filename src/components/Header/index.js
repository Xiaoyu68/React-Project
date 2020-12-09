import { Row, Col } from 'antd';
import React from 'react';
import style from './index.module.less';
import Util from '../../Util/Utils';
import axios from '../../axios/index'

export default class Header extends React.Component{
    state={}
    componentWillMount(){
        this.setState({
            userName: 'User'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        },1000)
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        let city = "London";
        axios.jsonp({
            url:'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=1f551f13ca478c5d67b947eaddac87ce'
        }).then((res)=>{
            if(res.cod == 200){
                console.log(res);
                 let weather = res.weather[0].main;
                 let name = res.name;
                this.setState({
                    weather: weather,
                    name: name
                })
            }
        })
    }
    render(){
        return(
            <div className={style.header}>
                <Row className={style.headertop}>
                    <Col span={24}>
                        <span>Welcome, {this.state.userName}</span>
                        <a href='#'>Logout</a>
                    </Col>
                </Row>
                <Row className={style.breadcrumb}>
                    <Col span={4} className={style.breadcrumbtitle}>
                        Homepage
                    </Col>
                    <Col span={20} className={style.weather}>
                        <span className={style.date}>{this.state.sysTime}</span>
                        <span className={style.weatherdetail}>{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
};