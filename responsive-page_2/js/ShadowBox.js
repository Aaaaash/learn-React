var React=require('react');
var ShadowBox=React.createClass({
    render:function(){
        return (
            <div className="shadow-box" onClick={this.props.hideShadow}></div>
        )
    }
});
module.exports=ShadowBox;
