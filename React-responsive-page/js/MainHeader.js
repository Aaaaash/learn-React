var React=require('react');
var MainHeader=React.createClass({
    // 主体头部组件
    render:function(){
        return(
            <div className="main-header">
                <div className="header-box">
                    <h2 className="say-hello">Hi!,My name is Misaka. I'm a web developer</h2>
                    <p className="say-title">
                        Ligula scelerisque justo sem accumsan diam quisvitae natoque dictum sollicitudin elementum.
                    </p>
                    <p className="know-more">4321 more</p>
                </div>
            </div>
        )
    }
});
module.exports=MainHeader;
