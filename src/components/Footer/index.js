import React from 'react'
import style from './index.module.less'

export default class Footer extends React.Component{
    
    render(){
        return(
            <div className={style.footer}>
                版权所有： 慕课网&河畔一角
            </div>
        )
    }
};