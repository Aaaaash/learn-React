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
        menuTitle:"Intro"
    },
    {
        imgUrl:"",
        imgTitle:"my skills",
        menuTitle:"Skills"
    },
    {
        imgUrl:"",
        imgTitle:"about me!",
        menuTitle:"About me"
    },
    {
        imgUrl:"",
        imgTitle:"contect",
        menuTitle:"Contact"
    }
];
// 链接信息数据
var menuLink=[
    {
        linkUrl:"",
        imgUrl:"",
        linkText:"sina"
    },
    {
        linkUrl:"",
        imgUrl:"",
        linkText:"github"
    },
    {
        linkUrl:"",
        imgUrl:"",
        linkText:"blog"
    },
    {
        linkUrl:"",
        imgUrl:"",
        linkText:"zhihu"
    },
];
var SideBox=React.createClass({
    // 侧边栏父组件
    render:function(){
        return (
            <section className="left-side">
                <SideHead/>
                <SideMenu  menuData={menuData} handleScroll={this.props.handleScroll}/>
                <SideFooter menuLink={menuLink}/>
            </section>
        )
    }
});
module.exports=SideBox;
