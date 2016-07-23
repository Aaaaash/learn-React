var React=require('react');
var ShadowBox=React.createClass({
    render:function(){
        return (
            <div className="shadow-box" tabIndex="1" >
                <span className="close-button" onClick={this.props.hideShadow}></span>
            </div>
        )
    }
});
module.exports=ShadowBox;
