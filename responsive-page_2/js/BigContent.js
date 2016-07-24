var React=require('react');
var BigContent=React.createClass({
    render:function(){
        return (
            <div className="img-big-content fl">
                <h4 className="big-tit">大明宫词</h4>
                <p className="big-time">May 26,2016</p>
                <p className="big-content">photo text content!photo text content!photo text content!photo text content!photo text content!photo text content!photo text content!photo text content!photo text content!photo text content</p>
                <ul className="big-shareList">
                    <li className="share-item">
                        <a version="1.0" className="img-share user-btn" href={this.props.href} target="_blank"></a>
                    </li>
                    <li className="share-item">
                        <a version="1.0" className="img-share user-btn" href={this.props.href} target="_blank"></a>
                    </li>
                    <li className="share-item">
                        <a version="1.0" className="img-share user-btn" href={this.props.href} target="_blank"></a>
                    </li>
                </ul>
            </div>
        )
    }
});
module.exports=BigContent;
