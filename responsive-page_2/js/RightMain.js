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
            .height())
            .css({
                "top":$(document).scrollTop(),
                "display":"block"
            }).stop().animate({
                opacity:1
            },300,function(){
                $(".imgBig-box").css("display","block").stop().animate({
                    opacity:1,
                    top:"0"
                })
            });
    },
    hideShadowBox:function(){
        $(".imgBig-box").stop().animate({
            opacity:0,
            top:"-100%"
        },function(){
            $(".imgBig-box").css("display","none");
            $(".shadow-box").animate({
                    opacity:0
                }).css("display","none");
            $("html").css("overflowY","scroll");
        });

    }
});
module.exports=RightMain;
