'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute,Redirect} from 'react-router';

class App extends React.Component{
    render(){
        return (
            <div>
                <h3>首页</h3>
                {this.props.children}
            </div>
        )
    }
}

class Repos extends React.Component{
    render(){
        return (
            <div>
                <h3>科科</h3>
            </div>
        )
    }
}
class About extends React.Component{
    render(){
        return(
            <div>
                <Link to="/">点我返回首页</Link>
            </div>
        )
    }
}
let routes=<Route path="/" component={App}>
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
</Route>;
ReactDOM.render(
    (
        <Router history={hashHistory} routes={routes}/>    
    ),document.getElementById('app')
);
