var React=require('react');
var ReactDOM=require('react-dom');
var SideBox=require('./SideBox');

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
module.exports=MyApp;
