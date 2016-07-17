// 左侧菜单栏子组件
var React=require('react');
var SideMenu=React.createClass({
    // 侧边栏菜单组件
    render:function(){
        var menuData=this.props.menuData.map(function(item,index){
            return (
                <MenuItem {...item} key={index}/>
            )
        });
        return (
            <div className="menu">
                <ul className="menu-list">
                    {/*这里存放菜单栏数据*/}
                    {menuData}
                </ul>
            </div>
        )
    }
});
var MenuItem=React.createClass({
    render:function(){
        return (
            <li className={this.props.active?"menu-item clearfix active":"menu-item clearfix"} onClick={this.handleScroll}>
                <div className="menu-icon fl">
                    <img src={this.props.imgUrl} title={this.props.imgTitle} />
                </div>
                <div className="menu-title fr">
                    {this.props.menuTitle}
                </div>
            </li>
        )
    }
});
module.exports=SideMenu;
