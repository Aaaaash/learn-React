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
        $("html").css("overflowY","hidden");
        $(".shadow-box").height($(window)
            .height()).fadeIn(300)
            .css("top",$(document).scrollTop());
    },
    hideShadowBox:function(){
        $("html").css("overflowY","scroll");
        $(".shadow-box").fadeOut(300);
    }
});
module.exports=RightMain;
