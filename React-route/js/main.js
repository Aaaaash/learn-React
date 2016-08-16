'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute,Redirect,IndexRedirect,IndexLink,browserHistory} from 'react-router';

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
                <h3>填写表单</h3>
                {this.props.children}
            </div>
        )
    }
}
class About extends React.Component{
    render(){
        return(
            <div>
                <IndexLink className="btn btn-default" to="/">点我返回首页</IndexLink>
            </div>
        )
    }
}
class Home extends React.Component{
    render(){
        return (
            <div>
                <Link className="btn btn-default" to="/about">点击加载About</Link>
                <Link className="btn btn-default" to="/repos">点击加载Repos</Link>
            </div>

        )
    }
}
class Form extends React.Component{
    handleSubmit(event){
        event.preventDefault();
        const userName=event.target.elements[0].value;
        const repo=event.target.elements[1].value;
        const path=`/repos/${userName}/${repo}`
        browserHistory.push(path)
    }
    render(){
        return (
            <div>
                <h1>Welcome! React-router!</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="userName"/>
                    <input type="text" placeholder="repo"/>
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }

}
ReactDOM.render(
    (
        <Router history={hashHistory} >
            <Route path="/" component={App}>
                {/*<IndexRedirect to="/welcome"/>*/}

                <IndexRoute component={Home}/>
                <Redirect from="/repos" to="/repos/form"/>
                <Route component={Repos}>
                    <Route path="/repos/form" component={Form}/>
                </Route>
                <Route path="/about" component={About} />
            </Route>
        </Router>
    ),document.getElementById('app')
);
