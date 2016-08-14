![](http://upload-images.jianshu.io/upload_images/1010300-1c7346f8263b1f09.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

---
　　入前端大坑也有快半年了，花了三个多月啃《JavaScript高级程序设计》，至今还谈不上什么深刻理解，对于原生js 的闭包、原型链等特性也仅仅是能说个大概而已。稀里糊涂的想接触一些框架和库，一开始看了一下AngularJS，但是一谈到MVC就有点懵逼，因为没有任何后端经验，所以MVC对我来说也只是个概念，对于model、view、controller也都没有清晰的认识。
　　更为头疼的是，当我们跨过了基础阶段，接触到这些框架级的概念时，大牛们讨论的一切仿佛和我们不在一个时代，而当我看到[React](http://reactjs.cn/)就像看到救星一样，没有一大堆繁琐的概念，从MVC的角度来说它只实现了View层面，虽然这两个框架的学习曲线都足够陡峭，但我还是义无反顾的跳入了[React](http://reactjs.cn/)的大坑。

　　*注意：我不是说React就比AngularJS更简单，相对于AngularJS辣么多晦涩难懂的概念来说，React更适合我入门以及对MVC有个基本的认识*

##起源
---
　　[React.js](http://reactjs.cn/)起源于facebook的一个内部项目，因为facebook对于市面上的JavaScript的MVC框架都不太满意，所以决定自己造轮子（所以我也不知道为啥人家不满意）。起初只是用来假设[Instagram](http://www.instagram.com/)网站，后来发现这玩意挺好用，所以就在2013年5月开源。到目前为止，[React](http://reactjs.cn/)在[github](https://github.com/facebook/react)上已经有了47158个star，而项目也已经经历了很多个版本的更新，目前最新版是15.2.1。由于[React](http://reactjs.cn/)性能出众，代码逻辑简单，以及虚拟DOM这个革命性的创新，使得它逐渐被广大前端开发者所接受（大厂出品，值得信赖）。

##Demo
---
一个简单的[React](http://reactjs.cn/)demo看起来是这样的
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>hello world</title>
        <script src="http://facebook.github.io/react/js/react.js"></script>
        <script src="http://facebook.github.io/react/js/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    </head>
    <body>
        <div id="example"></div>
        <script type="text/babel">
            var Hello=React.createClass({
                render:function(){
                    return <div>Hello {this.props.name}</div>
                }
            });
            ReactDOM.render(
                <Hello name="World!"/>,
                document.getElementById('example')
            );
        </script>
    </body>
</html>
```
　　以上就是一个简单的React应用程序，我们可以注意到在html中引入了三个js文件，分别是`react.js`、`react-dom.js`、以及`browser.min.js`
　　需要注意的一点是,在0.14版本发布之后，原先的React被分割为react和react-dom两个模块，其中react模块负责组件相关的一些核心API，而react-dom显而易见则是负责与dom相关的一些API。具体到这段代码中，React.createClass则是核心模块react所提供的API，而ReactDOM.render是react-dom模块所提供的API
　　我们很容易就会注意到，这段代码中的JavaScript部分有些不同。首先，type变成了text/babel，这是因为React提供的JSX语法浏览器本身无法解析，所以需要使用babel提供的browser.min.js将它转换为原生js，而这里的type也相应的要写为"text/babel"。而所谓JSX语法，在render方法中就有所体现，如果将这段JSX代码转换为原生js，那么它会是这样的
```
var Hello= React.createClass({displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hello ", this.props.name);
  }
});

React.render(React.createElement(HelloMessage, {name: "World!"}), mountNode);
```
　　事实上也可以这样写，只不过react更推崇用JSX的语法来创建组件，在这段代码中，首先使用React.createClass方法创建了一个对象，这个对象的名字是Hello，这也将是一个React组件，可以在app中的任何位置使用。Hello对象中包含了一个名为render的方法，顾名思义这是渲染组件的意思，这个方法需要返回一段html，而`JSX`语法最大的特点也是这里，使用`JSX`语法我们不需要再用引号将html代码包起来，而是直接按照html语法来书写，省略了一对引号但React仍然会很好的解析为HTML代码

*使用`JSX`语法有几点需要注意*
* render方法中返回的HTML代码只能有一个根节点
　　无论你的组件有多复杂，它必须被唯一的一个dom节点所包含，如果你这样写则是错误的

```
 render:function(){ 
      return (
              <div>
                    Hello {this.props.name}
              </div>
              <h1>World!</h1>
      )
 }
　//这段代码的div和h1属于同级标签，这在React中是不允许的，你应该将他们用一个父容器包裹起来
```
* render方法返回的HTML代码中标签的class属性应该写为`className`，for属性也应该写为`htmlFor`
　　这是因为class与for都是JavaScript的保留字

```
render:function(){ 
      return (
              <div className="keke">
                    Hello {this.props.name}
                    <label htmlFor="check">请选择</label>
                    <input id="check" type="checkbox"/>
              </div>
      )
 }
```
* 使用React.createClass创建的组件名第一个字母必须大写

　　在这个例子中，React.createClass创建的组件还没有被渲染到页面中，需要使用`ReactDOM.render`方法,这个方法接收三个参数，插入的组件（类似于HTML标签的写法），被插入的父容器（应该被定义在HTML文件中并带有id属性的一个节点），以及一个可选的回调函数（这个函数将在组件被渲染到页面上之后执行）。运行这个例子，页面上将会渲染出Hello World！
　　这里推荐使用`Chrome`浏览器调试React应用程序，并安装`React Developer Tools`（React开发者工具），这个工具可以帮助你在Chrome浏览器中随时查看组件的相关信息
![](http://upload-images.jianshu.io/upload_images/1010300-df6c9abd0cd7bfa5.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

　　以上就是React入门的一些基本概念，props以及state相关概念将在后续文章中详细解答
