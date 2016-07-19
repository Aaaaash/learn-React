var React=require('react');
var MainHeader=React.createClass({
    // 主体头部组件
    render:function(){
        return(
            <div className="main-header">
                <div className="header-box">
                    <h2 className="say-hello">Hi!,My name is 秀的包. I'm a web developer</h2>
                    <p className="say-title">
                        Ligula scelerisque justo sem accumsan diam quisvitae natoque dictum sollicitudin elementum.
                    </p>
                    <p className="know-more" onClick={this.props.handleScroll.bind(this,1)}>更多</p>
                </div>
            </div>
        )
    }
});
module.exports=MainHeader;
