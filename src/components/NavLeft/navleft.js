import React from 'react'
import MenuConfig from '../../config/menuConfig'
import style from '../NavLeft/navleft.module.less'
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;


export default class NavLeft extends React.Component{
    // state={
    //     menuTreeNode: [{
    //         title: "Menu",
    //         key: "/admin"
    //     },
    // {
    //     title: "Menu",
    //     key: "/admin"
    // }]
    // }
    // state = {
    //     currentKey: ''
    // }
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }
    //菜单渲染
    renderMenu=(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                            {this.renderMenu(item.children)}
                    </SubMenu>
                )}
            return <Menu.Item title={item.title} key={item.key}><NavLink to={item.key}>{item.title}</NavLink></Menu.Item>;
        })
    }
    render(){
        return(
            <div className="container">
                <div className={style.logo}>
                    <img className="img" src="/assets/browser.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
};