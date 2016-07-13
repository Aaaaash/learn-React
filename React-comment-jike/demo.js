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
    mixins:[React.addons.LinkedStateMixin],
    // 引入双向数据绑定插件
    getInitialState:function(){
        return {
            mes:this.props.value
        }
    },
    render:function(){
        console.log(this    );
        return (
            <div>
                <h2>Hello React!</h2>
                <a href={"https://github.com/"+this.props.author}>This is my GitHub home page.</a>
                <h4>I am a {this.props.job}</h4>
                <input type="text" valueLink={this.linkState('mes')}/>
                <p>{this.state.mes}</p>
                <ListComponent listArr={this.props.listArr}/>
            </div>
        )
    },
    changeHandle:function(e){
        this.setState({
            mes:e.target.value
        })
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
