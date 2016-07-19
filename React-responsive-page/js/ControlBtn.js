var React=require('react');
var ControlBtn=React.createClass({
    render:function(){
        return (
            <span className="control-btn" onClick={this.props.handleControl}>≡</span>
        )
    }
});
module.exports=ControlBtn;
