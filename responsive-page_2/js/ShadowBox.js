var React=require('react');
var BigContent=require('./BigContent');
var ImgData=require('./ImgData.json');
var $=require('jquery');
var PubSub=require('pubsub-js');
var showSha='showSha';
var ShadowBox=React.createClass({
    getInitialState:function(){
        return {
            activeData:[],
            prevData:[],
            nextData:[]
        }
    },
    componentDidMount:function(){
        PubSub.subscribe(showSha,function(evName,data){
            console.log(data);
            this.setState({
                activeData:data
            });
        }.bind(this));
    },
    getPrevNext:function(){
        var activeData=this.props.imgInfo;
        var prevIndex,nextIndex;
        var theprevData,thenextData;
        ImgData.map(function(item,index){
            item.imgInfo.map(function(obj,num){
                if(obj.url==activeData.url){
                    prevIndex=num-1;
                    nextIndex=num+1
                }
            });
        });
        ImgData.map(function(item,index){
            if(item.num==8){
                item.imgInfo.map(function(obj,num){
                    if(num==prevIndex){
                        theprevData=obj;
                    }
                    if(num==nextIndex){
                        thenextData=obj;
                    }
                });
            }
        });
        this.setState({
            prevData:theprevData,
            nextData:thenextData
        },function(){
            console.log(this.state);
        });
        return true
    },
    render:function(){
        console.log(this.state)
        var href=this.shareQzone();
        return (
            <div className="shadow-box" tabIndex="1" >
                <div className="imgBig-box"  ref="imgBox" >
                    <span className="close-button" onClick={this.props.hideShadow}></span>
                    <div className="img-ctrl clearfix fl">
                        <div className="left-ctrl ctrl"  onClick={this.handleLeftRemove}></div>
                        <div className="right-ctrl ctrl"  onClick={this.handleRightRemove}></div>
                        <img className="img-big" src={this.state.activeData.url}/>
                    </div>
                    <BigContent href={href} imgInfo={this.state.activeData}/>
                </div>
            </div>
        )
    },
    shareQzone:function(){
        var p = {
        url:"https://sakub.github.io/learn-React/responsive-page_2/",
        showcount:'1',
        desc:'qzone分享API测试',
        summary:'qzone分享API测试',
        title:'qzone分享API测试',
        site:'qzone分享API测试',
        pics:'https://github.com/SakuB/learn-React/blob/master/responsive-page_2/img/test.jpg', /*分享图片的路径(可选)*/
        style:'202',
        width:105,
        height:31
        };
        var s = [];
        for(var i in p){
        s.push(i + '=' + encodeURIComponent(p[i]||''));
        }
        var href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+s.join('&');
        return href;
    },
    handleLeftRemove:function(){
        this.getPrevNext();
        $(this.refs.imgBox).stop().animate({
            left:"-5%",
            opacity:0
        },200);
    },
    handleRightRemove:function(){
        $(this.refs.imgBox).stop().animate({
            left:"5%",
            opacity:0
        },200)
    }
});
module.exports={
    ShadowBox:ShadowBox,
    showSha:showSha
};
