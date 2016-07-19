var React=require('react');
var ReactDOM=require('react-dom');
var ControlBtn=require('./ControlBtn');
var SideBox=require('./SideBox');
var MainBox=require('./MainBox');
var $=require('jquery');
var MyApp=React.createClass({
    // app父组件
    render:function(){
        return (
            <div>
                <ControlBtn/>
                <SideBox handleScroll={this.handleScroll}/>
                <MainBox handleScroll={this.handleScroll}/>
            </div>
        )
    },
    // SideMenu点击滚动函数
    handleScroll:function(index){
        switch(index){
            case 0:
                $('body').stop().animate({
                    scrollTop:$('.main-header').offset().top
                },1000);
                break;
            case 1:
                $('body').stop().animate({
                    scrollTop:$('.main-skill').offset().top
                },1000);
                break;
            case 2:
                $('body').stop().animate({
                    scrollTop:$('.main-about').offset().top
                },1000);
                break;
            case 3:
                $('body').stop().animate({
                    scrollTop:$('.main-contact').offset().top
                },1000);
                break;
        }
    }
})
ReactDOM.render(
    <MyApp/>,
    document.getElementById('app')
);
module.exports=MyApp;
