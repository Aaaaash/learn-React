class Count extends React.Component{
    constructor(){
        this.state={count:0}
    }

    update(){
        this.setState({
            count:++this.state.count
        });
    }

    render(){
        return (
        <div>
            <h2>Count</h2>
            <h3>{this.state.count}</h3>
        </div>
        );
    }
}
count=React.render(
    <Count/>,
    document.getElementById('content')
);
