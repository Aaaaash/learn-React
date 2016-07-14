var React=require('react');
var Card=React.createClass({
    render:function(){
        var content=this.props.content;
        var blocks=[];
        for(var i=0;i<content.blocks.length;i++){
            var links=[];
            var block=content.blocks[i];
            for(var i=0;i<block.links.length;i++){
                links.push(<a className="card-link" href={block.links[i].url}>{block.links[i].name}</a>);
            }
            blocks.push(
                <div className="card-block">
                    <h4 className="card-title">{block.title}</h4>
                    <h6 className="card-subtitle">{block.subtitle}</h6>
                    <p>{block.text}</p>
                    <p>
                    {links}
                    </p>
                </div>
            )
        }
        var listgroup=[];
        for(var i=0;i<content.listgroup.length;i++){
            listgroup.push(
                <li className="list-group-item">
                    {content.listgroup[i]}
                </li>
            );
        }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-header">{content.header}</div>
                            <img className="card-img-top" src={content.imgTop.url} alt={content.imgTop.alt}></img>
                            {blocks}
                            <ul className="list-group list-group-flush">
                                {listgroup}
                            </ul>
                            <img className="card-img-bottom" src={content.imgBottom.url} alt={content.imgBottom.alt}></img>
                            <div className="card-footer">{content.footer}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
module.exports=Card
