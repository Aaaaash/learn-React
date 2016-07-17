// 左侧菜单栏底部链接子组件
var React=require('react');
var SideFooter=React.createClass({
    // 侧边栏底部组件
    render:function(){
        return (
            <div className="head-footer">
                <ul className="footer-list">
                    <li className="footer-item">
                        <a href="javascript:;">
                            weibo
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="javascript:;">
                            github
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="javascript:;">
                            blog
                        </a>
                    </li>
                    <li className="footer-item">
                        <a href="javascript:;">
                            zhihu
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
});
module.exports=SideFooter;
