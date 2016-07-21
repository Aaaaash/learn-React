var React=require('react');
var MainList=require('./MainList');
var ImgData=require('./ImgData.json');
var RightMain=React.createClass({
    getInitialState:function(){
        return {
            imgData:ImgData
        }
    },
    render:function(){
        var mainList=this.state.imgData.map(function(item,index){
            return (
                <MainList imgData={item} key={index}/>
            )
        });
        return (
            <div className="right-main">
                {mainList}
            </div>
        )
    }
});
module.exports=RightMain;
