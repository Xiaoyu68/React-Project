import { Col, Row } from 'antd';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft/navleft.js';
import style from './admin.module.less';
import Home from './pages/home'

export default class Admin extends React.Component{

    render(){
        return (
            <Row className={style.cotent}>
                <Col span={4} className={style.navleft}>
                    <NavLeft/>
                </Col>
                <Col span={20} className={style.main}>
                    <Header/>
                    <Row className={style.container}>
                    {/* <Home/> */}
                    {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}