var React=require('react');
var $=require('jquery');
var MainList=require('./MainList');
var ShadowBox=require('./ShadowBox');
var ImgData=require('./ImgData.json');
var RightMain=React.createClass({
    getInitialState:function(){
        return {
            imgData:ImgData
        }
    },
    render:function(){
        var mainList=this.state.imgData.map(function(item,index){
            return (
                <MainList imgData={item} key={index} handleShow={this.showShadowBox}/>
            )
        }.bind(this));
        return (
            <div className="right-main">
                {mainList}
                <ShadowBox hideShadow={this.hideShadowBox}/>
            </div>
        )
    },
    showShadowBox:function(){
        $(".shadow-box").fadeIn()
    },
    hideShadowBox:function(e){
        $(".shadow-box").fadeOut()
    }
});
module.exports=RightMain;
