// 左侧菜单栏父组件

var React=require('react');
var SideHead=require('./SideHead');
var SideMenu=require('./SideMenu');
var SideFooter=require('./SideFooter');
// 菜单栏信息数据
var menuData=[
    {
        imgUrl:"",
        imgTitle:"Intro",
        menuTitle:"Intro",
        active:false
    },
    {
        imgUrl:"",
        imgTitle:"my skills",
        menuTitle:"Skills",
        active:false
    },
    {
        imgUrl:"",
        imgTitle:"about me!",
        menuTitle:"About me",
        active:true
    },
    {
        imgUrl:"",
        imgTitle:"contect",
        menuTitle:"Contact",
        active:false
    }
];
var SideBox=React.createClass({
    // 侧边栏父组件
    render:function(){
        return (
            <section className="left-side">
                <SideHead/>
                <SideMenu  menuData={menuData}/>
                <SideFooter/>
            </section>
        )
    }
});
module.exports=SideBox;
