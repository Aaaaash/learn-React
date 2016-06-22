#React入门
React是Facebook内部开源出来的一套前端UI开发框架，现在来讲React不仅仅是js框架本身，更是一套完整的前端开发生态体系<br/>
* React.js
* ReactRenders: ReactDOM / ReactServer / ReactCanvas
* Flux模式
* React开源组件
* React Native
* GraphQi+Relay
##React中的基本概念
###React.js
React.js是React的核心库，在应用中必须先加载核心库<br/>
###ReactDOM.js
ReactDOM.js是React的DOM渲染器，React将核心库和渲染器分离开，为了在web页面中显示开发的组件，需要调用ReactDOM.render方法，第一个参数是React组件，第二个参数是HTMLElement<br/>
###JSX语法
JSX是React自定义的一种JavaScript语法，最终会被转化为js运行在页面中<br/>
###组件
组件是React的核心概念，页面当中的所有元素都是通过React组件来表达，React的代码绝大多数都是在开发React组件<br/>
###VIRTUAL DOM
虚拟DOM，React抽象出来的虚拟DOM树，可以避免频繁的操作DOM，提高运行性能的关键<br/>
###单项数据流
React 应用的核心设计模式，数据流向自顶向下<br/>
##Hello World
>例子详见React-helloworld-demo<br/>

    var Hello=React.createClass({
        render:function(){
            return <div>Hello {this.props.name}</div>
        }
    });
    ReactDOM.render(
        <Hello name="World!"/>,
        document.getElementById('example');
    )
<br/>
以上就是JSX语法，组件内部写法和HTML一样，直接在函数中写xml标签
##React独特之处
* 组件的组合模式<br/>
* 单向数据流的设计<br/>
* 虚拟DOM高效的性能<br/>
* 分离的设计<br/>

###组件的组合模式
>组合模式也就是说在React中所有标签无论大小都看做一个组件，任意组件相互组合也会形成一个大组件，基于组件构建整个web应用

组合模式的优点：<br/>
* 构建可以重用的组件，组件开发能够形成公司的组件库，每个业务的开发都可能会累计可重用的组件<br/>
* 无学习障碍，天然符合HTML的结构<br/>
* 组合模式简单有效，能够构建简单的web应用也能构建大型的web应用<br/>
* 源码可维护性高，很多大型的web应用因为复杂的业务逻辑导致无法快速响应业务需求，可维护性很低<br/>

###单项数据流的设计
React的单向数据流设计可以让前端迅速的定位bug所在，页面的UI和数据对应是唯一的，可以通过定位数据变化快速的定位页面bug<br/>
###高效的性能
virtual DOM的概念，基于virtualDOM算法，可以让只有需要改变的dom元素才进行重新渲染<br/>
###分离的框架设计
现版本的React已经把核心库React.js和ReactDOM分离，这就意味着React不仅仅能够在web端工作，也有可能会在服务器端工作<br/>
###React应用范围
* web端应用
* 原生应用（ISO,android，Native）
* Node JS服务端渲染<br/>

####Web端应用
Web应用是React的出发点，我们可以通过React构建简单的web端应用，甚至是大型的web应用。同时在web端，还可以用React实现数据可视化，游戏等等。。。<br/>
####原生应用
基于facebook开源的ReactNative,我们可以使用JSX语法构建ios甚至是android端应用<br/>
####服务端渲染
React 除了在 Web 和 Native 环境以外， 也可以在服务器端渲染出 HTML。<br/>

##JSX语法
>JSX 的写法在组件的组合和属性的传递上提供了非常灵活的解决方案

###JSX本质
创建JSX语法的本质目的是为了使用基于XML的方式表达组件的嵌套，保持和HTML一致的结构，语法上除了在描述组件上比较特别以外，其他地方都和原生JavaScript没有太大区别，且JSX最终都会编译为原生的JavaScript语法<br/>

###xml规则
JSX组件嵌套的规则和XML基本一致<br/>
####嵌套规则
>标签可以任意的嵌套

    function render(){
        return <p>
                text context
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
               </p>
    }

####标签闭合
标签必须严格闭合，否则无法编译通过<br/>
<br/>
    function render(){
        return <input type="text"/>     //自闭合
    }
    function render(){
        return <p>....</p>              //标签闭合
    }
<br/>
###JSX组件
JSX组件分为`HTML原生组件`和`自定义组件`<br/>

    function (){
        return <p></p>
    }
    function(){
        return <ul>
                <li></li>
                <li></li>
                <li></li>
               </ul>
    }

<br/>
React组件就是自定义组件<br/>
<br/>
    function CustomCompont=React.createClass({          //定义自定义组件
        render:function(){
            return <div>CustomCompont</div>
        }
    });
    function render(){                              //使用自定义组件
        return <p><CustomCompont/></p>
    }
<br/>    
###组件属性
和html一样，JSX中的组件也有属性，传递属性的方式也基本相同<br/>
