var React=require('react');
var ShadowBox=React.createClass({
    render:function(){
        return (
            <div className="shadow-box" tabIndex="1" >
                <div className="imgBig-box">
                    <span className="close-button" onClick={this.props.hideShadow}></span>
                    <img className="img-big fl" src="../img/test_2.jpg"/>
                    <div className="img-big-content fl">
                        <p>咿呀咿呀呦！咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦</p>
                        <p>咿呀咿呀呦！咿呀咿呀呦！咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！咿呀咿呀呦！咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦咿呀咿呀呦</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                        <p>咿呀咿呀呦！</p>
                    </div>
                </div>
            </div>
        )
    }
});
module.exports=ShadowBox;
