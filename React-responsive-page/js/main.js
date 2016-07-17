// 菜单栏信息数据
var menuData=[
    {
        imgUrl:"",
        imgTitle:"Intro",
        menuTitle:"Intro",
        active:true
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
        active:false
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
var SideHead=React.createClass({
    // 侧边栏头部组件
    getInitialState:function(){
        return {
            userName:"秀的包",
            userJob:"a web developer!"
        }
    },
    render:function(){
        return (
            <div className="head clearfix">
                <div className="head-img fl">
                    <img src="img/head-img.jpg" alt="it's me!" />
                </div>
                <div className="head-title fr">
                    <h2>{this.state.userName}</h2>
                    <p>
                        {this.state.userJob}
                    </p>
                </div>
            </div>
        )
    }
});

var SideMenu=React.createClass({
    // 侧边栏菜单组件
    render:function(){
        var menuData=this.props.menuData.map(function(item){
            return (
                <MenuItem {...item}/>
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
        console.log(this.props);
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

var MainBox=React.createClass({
    // 右侧主体父组件
    render:function(){
        return (
            <section className="main" ref="main-box">
                <MainHeader/>
                <MainSkill/>
                <MainAbout/>
                <MainContact/>
                <MainFooter/>
            </section>
        );
    }
});
var MainHeader=React.createClass({
    // 主体头部组件
    render:function(){
        return(
            <div className="main-header">
                <div className="header-box">
                    <h2 className="say-hello">Hi!,My name is Sakura. I'm a web developer</h2>
                    <p className="say-title">
                        Ligula scelerisque justo sem accumsan diam quisvitae natoque dictum sollicitudin elementum.
                    </p>
                    <p className="know-more">Know more</p>
                </div>
            </div>
        )
    }
});
var MainSkill=React.createClass({
    render:function(){
        return (
            <div className="main-skill">
                <div className="skill-box">
                    <h2 className="skill-title sm-tit">My Skills</h2>
                    <p className="skill-text">
                        Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce hendrerit lacus ridiculus.
                    </p>
                    <ul className="my-demo ">
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                        <li className="demo-item">
                            <img src="../img/head-img.jpg" alt="my-demo" className="demo-img"/>
                            <p className="demo-title">
                                demo title.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});
var MainAbout=React.createClass({
    render:function(){
        return (
            <div className="main-about">
                <div className="about-box">
                    <h2 className="about-title sm-tit">About me</h2>
                    <div className="me-img">

                    </div>
                    <p className="me-content">
                        Tincidunt eu elit diam magnis pretium accumsan etiam id urna. Ridiculus ultricies curae quis et rhoncus velit. Lobortis elementum aliquet nec vitae laoreet eget cubilia quam non etiam odio tincidunt montes. Elementum sem parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus vel quisque sociis nec ornare iaculis.
                    </p>
                </div>
            </div>
        )
    }
});
var MainContact=React.createClass({
    render:function(){
        return (
            <div className="main-contact">
                <div className="contact-box">
                    <h2 className="contact-title sm-tit">Contact</h2>
                    <p className="contact-text">
                        Elementum sem parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.
                    </p>
                    <form className="contact-form" action="javascript:;" method="post">
                        <input className="contact-input" type="text" name="name" value="" placeholder="Name" />
                        <input className="contact-input" type="email" name="email" value="" placeholder="Email" />
                        <textarea name="message" placeholder="Message" className="contact-textarea"></textarea>
                        <input type="button" value="Send Message" className="contact-button"/>
                    </form>
                </div>
            </div>
        )
    }
});
var MainFooter=React.createClass({
    render:function(){
        return (
            <footer className="main-footer">
                <div className="footer-box">
                    <p>
                        Untitled. All rights reserved.
                    </p>
                </div>
            </footer>
        )
    }
});



var MyApp=React.createClass({
    // app父组件
    render:function(){
        return (
            <div>
                <SideBox/>
                <MainBox/>
            </div>
        )
    }
})
ReactDOM.render(
    <MyApp/>,
    document.getElementById('app')
);
