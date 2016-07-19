var React=require('react');
var MainHeader=require('./MainHeader');
var MainSkill=require('./MainSkill');
var MainAbout=require('./MainAbout');
var MainContact=require('./MainContact');
var MainFooter=require('./MainFooter');
var MainBox=React.createClass({
    // 右侧主体父组件
    render:function(){
        return (
            <section className="main" ref="main-box">
                <MainHeader handleScroll={this.props.handleScroll}/>
                <MainSkill/>
                <MainAbout/>
                <MainContact/>
                <MainFooter/>
            </section>
        );
    }
});
module.exports=MainBox;
