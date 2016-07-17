var deleteItem='deleteItem';
var ItemComponent=React.createClass({
    render:function(){
        return (
            <li className="list-group-item">
                <div className="handle btn btn-default">
                    <a href="javascript:;" onClick={this.deleteHandle}>delete</a>
                </div>
                <p className="user">{this.props.userName} :</p>
                <p className="centence">{this.props.content}</p>
            </li>
        )
    },
    deleteHandle:function(){
        PubSub.publish(deleteItem,this.props._id);
    }
});
var MainComponent=React.createClass({
    getInitialState:function(){
        return {
            listArr:this.props.listArr
        }
    },
    componentDidMount:function(){
        var _this=this;
        PubSub.subscribe(deleteItem,function(evName,data){
            var newArr=_this.state.listArr.filter(function(item,index){
                return item._id!=data
            });
            console.log(newArr);
            _this.setState({
                listArr:newArr
            });
        });
    },
    addItem:function(data){
        this.state.listArr.push(data);
        this.setState({
            listArr:this.state.listArr
        });
    },
    render:function(){
        return (
            <div className="container">
                <MesComponent addItem={this.addItem}/>
                <ListComponent listArr={this.props.listArr}/>
            </div>
        )
    }
});
var MesComponent=React.createClass({
    render:function(){
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>userName:</label>
                        <input type="text" ref="userName" className="form-control" placeholder="your name"/>
                    </div>
                    <div className="form-group">
                        <label>comment:</label>
                        <textarea rows="6" ref="content" className="form-control" placeholder="please input your comment!"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default" onClick={this.addItemHandle}>submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    },
    addItemHandle:function(){
        var userName=this.refs.userName.value;
        var content=this.refs.content.value;
        this.props.addItem({
            userName:userName,
            content:content,
            _id:Date.now()
        });
        this.refs.userName.value="";
        this.refs.content.value="";
    }
});
var ListComponent=React.createClass({
    render:function(){
        return (
            <div className="col-md-8">
                <h3 className="reply">Repeat comment:</h3>
                <h2 style={{display:"none"}}>No comments! click button to add comment</h2>
                <ul className="list-group">
                    {
                        this.props.listArr.map(function(item,index){
                            return <ItemComponent {...item} key={index} />
                        })
                    }
                </ul>
            </div>
        )
    }
});
var listArr=[
    {
        userName:"Sakura",
        content:"Welcome to my React demo page",
        _id:Date.now()+1
    },
    {
        userName:"Misaka",
        content:"Sakura is a good web developer!",
        _id:Date.now()
    }
]
ReactDOM.render(
    <MainComponent listArr={listArr}/>,
    document.getElementById('app')
)
