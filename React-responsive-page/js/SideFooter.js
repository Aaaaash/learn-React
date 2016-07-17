// 左侧菜单栏底部链接子组件
var React=require('react');
var SideFooter=React.createClass({
    // 侧边栏底部组件
    render:function(){
        var linkData=this.props.menuLink.map(function(item,index){
            return (
                <LinkItem {...item} key={index}/>
            )
        });
        return (
            <div className="head-footer">
                <ul className="footer-list">
                    {linkData}
                </ul>
            </div>
        )
    }
});
var LinkItem=React.createClass({
    render:function(){
        return (
            <li className="footer-item">
                <a href={this.props.linkUrl}>
                    <img src={this.props.imgUrl} title={this.props.linkText}></img>
                    {this.props.linkText}
                </a>
            </li>
        )
    }
});
module.exports=SideFooter;
