import React from 'react'
import { HashRouter, Route, Swith } from 'react-router-dom'
import App from './App'
import Login from './pages/login/index'
import Admin from './admin'
import Button from './pages/ui/buttons/index'
import NoMatch from './pages/nomatch/index'
export default class IRouter extends React.Component{

    render(){
        return(
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Button}/>
                            <Route component={NoMatch}/>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        );
    }
}