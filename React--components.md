　　React是一个用于创建UI组件的框架，它的核心就是组件
　　组件实际上并不难理解，在传统的桌面编程中，组件实际上就是一个个的控件，开发者无须编写代码就可以直接从IDE的控件箱中拖控件来创建简单的应用程序。而对应到前端来说，我们一开始见到的一些组件可能是来自`Dreamweaver`自带的一些简单的web小控件，例如单行文本框，单选/多选框以及下拉列表等等，实际上这些控件所提供的功能对前端开发者来说太过于简陋，甚至可以说是丑陋。当我们脱离了刀耕火种的时代，前端组件化需求就显得十分迫切
　　在当下有很多框架实现了组件化，例如非常火爆的`bootstrap`，有一点需要区分的是前端组件化（`Web Components`）和模块化（`module`），它们是不同的概念。关于这两点的具体区别将在后续文章中详细介绍，我们首先应该关注的是`组件化`
##React中的组件
---
　　在上一篇文章中，我们使用React创建了一个简单的应用程序，它可以在页面上渲染出"Hello World！"。其中React.createClass所创建的Hello对象就是一个组件，我们可以使用同样的方法创建出更多不同功能的组件以便于重复使用，而且组件可以相互嵌套，例如：
```
var Hello =React.createClass({
  render:function (){
    return (
      <div>
        <h1>This is my first web components!</h1>
        <Keke></Keke>      {/*Keke作为子组件被嵌套在Hello组件中*/}
      </div>
    )
  }
});
var Keke=React.createClass({
  render:function (){
    return (
      <h2>ReactJS is good!</h2>
    )
  }
});
```
　　这个例子中，首先创建了一个Hello组件，它包含一个h1标签，然后创建了一个Keke组件，包含一个h2标签，在Hello组件中可以将Keke组件像一个普通的HTML标签一样插入进来，语法依然像HTML一样可以是闭合标签`<Keke></Keke>`也可以是自闭合标签`<Keke/>`，这也是JSX语法的特点之一。
　　使用React创建组件可以任意的嵌套，每个组件的UI以及逻辑相互独立，拿掉任何一个组件不会影响应用程序的正常运行。这样一来可以将一个web页面切分为很多个组件，非常便于后期维护。
![](http://img0.imgtn.bdimg.com/it/u=1103287360,717015992&fm=21&gp=0.jpg)

##属性与状态
---
　　在React为数不多的概念中，属性（`props`）与状态（`state`）可能是最让初学者头疼的，在一个React组件中，它们是这样工作的。
```
var myName="Sakura";
//定义myName变量
var MyComponents=React.createClass({
  getInitialState:function (){    {/*初始化state*/}
    return {
      user:this.props.user      {/*将user属性赋值给user状态*/}
    }  
  },
  render:function (){
    return (
        <div>
          <h1>My name is {this.state.user}</h1>
          {/*user状态可以使用this.state获取到*/}
        </div>
    )
  }
});
ReactDOM.render(
  {/*将myName变量作为MyComponents组件的user属性传入*/}
  <MyComponents user={myName}/>,
  document.getElementById("app")
);
```
　　这个例子中，`this.props`是组件的属性，组件的属性`props`必须通过父组件向下传递，在`ReactDOM.render`方法中，我们把myName变量作为一个属性传递给了MyComponents组件，并且命名为user，而在这个组件内部，我们可以使用`this.props.user`得到这个属性。
　　状态是React组件中的一个对象，用于存放组件相关数据。React把用户界面当做一个状态机，状态的更新会引起组件的重新渲染，从而使数据与界面保持一致。`getInitialState`方法用于定义状态的初始值，在这个例子中user状态的初始值是由传入的user属性决定的。状态与界面息息相关，一切与界面相关的数据都应存放在state中，更新state可以使用`this.setState`方法，React不允许直接通过`this.state.xxx=xxx`的方式直接修改state。
　　`props`与`state`两者的区别是：props是用于父组件向子组件传递数据的通道，而state则是组件存放自身相关信息的一个对象

##单向数据流
---
　　React的数据是自顶向下的`单向数据流`，在一个React应用程序中，数据由父组件通过props自顶向下传递给子组件，子组件接收到数据后，可以将props中的属性作为自身的一个状态（`state`）用于渲染界面。
