import { Row } from 'antd'
import React from 'react'
import style from './index.module.less'

export default class Home extends React.Component{

    render(){
        return (
            <div className={style.homewrap}>
                Welcome!
            </div>
        )
    }
}