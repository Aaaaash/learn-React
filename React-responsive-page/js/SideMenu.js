// 左侧菜单栏子组件
var React=require('react');
var SideMenu=React.createClass({
    getInitialState:function(){
        var index=0;
        // var isActive=
        return {
            active:[
                true,
                false,
                false,
                false
            ],
            index:[
                index++,
                index++,
                index++,
                index++
            ]
        }
    },
    handleClick:function(index){
        var isActive=this.state.active;
        for(var i=0;i<isActive.length;i++){
            isActive[i]=false;
        }
        isActive[index]=true;
        this.props.handleScroll(index);
        this.setState({
                active:isActive
        })
    },
    // 侧边栏菜单组件
    render:function(){
        var menuData=this.props.menuData.map(function(item,index){
            return (
                <MenuItem {...item} key={index} handleClick={this.handleClick} isActive={this.state.active[index]} index={this.state.index[index]}/>
            )
        }.bind(this));
        return (
            <div className="menu" ref="132">
                <ul className="menu-list">
                    {/*这里存放菜单栏数据*/}
                    {menuData}
                </ul>
            </div>
        )
    },
    componentDidMount:function(){
        // console.log(this.props.children);
    }
});
var MenuItem=React.createClass({
    render:function(){
        return (
            <li className={this.props.isActive?"menu-item clearfix active":"menu-item clearfix"}  onClick={this.props.handleClick.bind(this,this.props.index)}>
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
