// 左侧菜单栏头部子组件
var React=require('react');
var SideHead=React.createClass({
    // 侧边栏头部组件
    getInitialState:function(){
        return {
            userName:"秀的包",
            userJob:"a web developer!"
        }
    },
    render:function(){
        return (
            <div className="head clearfix">
                <div className="head-img fl">
                    <img src="img/head-img.jpg" alt="it's me!" />
                </div>
                <div className="head-title fr">
                    <h2>{this.state.userName}</h2>
                    <p>
                        {this.state.userJob}
                    </p>
                </div>
            </div>
        )
    }
});
module.exports=SideHead;
