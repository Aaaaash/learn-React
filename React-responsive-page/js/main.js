var React=require('react');
var ReactDOM=require('react-dom');
var SideBox=require('./SideBox');
var MainBox=require('./MainBox');
var MyApp=React.createClass({
    // app父组件
    render:function(){
        return (
            <div>
                <SideBox/>
                <MainBox/>
            </div>
        )
    }
})
ReactDOM.render(
    <MyApp/>,
    document.getElementById('app')
);
module.exports=MyApp;
