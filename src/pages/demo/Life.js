import { Button } from 'antd';
import React from 'react';
import style from './index.module.less';

export default class Life extends React.Component{
    state = {
        count: 0
    }
    handle=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        return <div className={style.cotent}>
            <p>Click</p>
            <Button onClick={this.handle}>Click</Button>
            <p>{this.state.count}</p> 
        </div>
    }
}