var ListComponent=React.createClass({
    render:function(){
        return (
            <ul>
                {this.props.listArr.map(function(item,index){
                    return <li key={index}>{item}</li>
                })}
            </ul>
        )
    }
});
var MyComments=React.createClass({
    getInitialState:function(){
        return {
            mes:this.props.value,
            listArr:this.props.listArr
        }
    },
    changeHandle:function(e){
        this.setState({
            mes:e.target.value
        })
    },
    addItemHandle:function(){
        console.log(this.refs)
        var value=this.refs.textInput.value;
        var newArr=this.state.listArr.concat([value]);
        this.setState({listArr:newArr});
    },
    render:function(){
        return (
            <div>
                <h2>Hello React!</h2>
                <a href={"https://github.com/"+this.props.author}>This is my GitHub home page.</a>
                <h4>I am a {this.props.job}</h4>
                <input type="text" ref="textInput" value={this.state.mes} onChange={this.changeHandle}/>
                <button onClick={this.addItemHandle}>submit</button>
                <p>{this.state.mes}</p>
                <ListComponent listArr={this.state.listArr}/>
            </div>
        )
    }
});
var componentData={
    author:"SakuB",
    job:"Web developer",
    value:"please input comments！",
    listArr:["sakura","misaka","mikoto"]
}
ReactDOM.render(
    <MyComments {...componentData}/>,
    document.getElementById('demo')
);
