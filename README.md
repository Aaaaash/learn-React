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

    function render(){
        return <input type="text"/>
    }
    function render(){
        return <p></p>
    }

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

React组件就是自定义组件<br/>

    function CustomCompont=React.createClass({
        render:function(){
            return <div>CustomCompont</div>
        }
    });
    function render(){
        return <p><CustomCompont/></p>
    }

###组件属性
和html一样，JSX中的组件也有属性，传递属性的方式也基本相同<br/>
对于HTML组件：<br/>

    function render(){
        return <p title="title">Hello World!</p>
    }

而如果是React组件，可以自定义属性，传递自定义属性的方式也基本相同<br/>

    function render(){
        return <p><CustomComponent customProps="data"/></p>
    }

属性即可以是字符串，也可以是任意的JavaScript变量<br/>
而传递属性的方式是变量用花括号包起来<br/>

    function render() {
        var data = {a: 1, b:2};
        return <p> <CustomComponent customProps={data}/> </p>
    }

>有一个区别是，在写JSX的时候，所有的属性都是`驼峰命名法`

    function render(){
        return <div className="...">
            <label htmlFor=".."></label>
            <input onChange=""/>
        </div>
    }

驼峰式是JavaScript的标准写法，并且React底层是将属性直接对应到原生DOM属性，而原生DOM的属性其实就是驼峰式写法，而这里class和for是js的关键字，所以在JSX中这两个属性应该写成`className`和`htmlFor`<br/>

除此之外比较特殊的地方是 data-* 和 aria-* 两类属性是和 HTML 一致的。<br/>

###JSX花括号
####显示文本
有时候我们需要将js中的文本直接显示，做法和变量一样用花括号<br/>

    function render(){
        var text="Hello World!";
        return <p>{text}</p>
    }

####运算
花括号里边除了变量以外，还可以是一段js表达式，可以利用花括号做简单的运算<br/>

    function render(){
        var text=text;
        var isTrue=false;
        var arr=[1,2,3];
        return <p>
            {text}
            {isTrue?'true':'false'}
            {arr.map(function(){
                return <span>{it}</span>
                })}
        </p>
    }

###JSX注释
注释的写法与原生js基本一致<br/>

    function render(){
        /*这里是注释内容*/
    }

###限制规则
render方法返回的组件必须有且只有一个根组件<br/>

    function render(){
        return <P></p>
        <p></p>
        //无法编译通过，JSX会显示编译错误
    }

###组件命名空间
JSX可以通过命名空间的方式使用组件，通过命名空间的方式可以解决相同名称不同用途的组件<br/>

    function render(){
        return <div>
        <CustomCompont1.subElement/>
        <CustomCompont2.subElement/>
        </div>
    }

###JSX的编译方式
JSX最终会被解释成原生js的语法，而且实际上如果愿意的话可以直接写js的语法，但是JSX的开发体验可能会更好一点<br/>
JSX的编译方式有两种<br/>
* 在HTML中引入babel编译器，如一开始HelloWorld中的`browser.min.js`
* 离线JSX编译，通过babel编译JSX
###JSX到js的转化
例如一开始的Hello World转化为js的代码如下<br/>

    var Hello=React.createClass({
        displayName:'Hello',
        render:function(){
            return React.createElement('div',null,'Hello',this.props.name);
        }
        });
    ReactDOM.render(
        React.createElement(Hello,{name:'World!'}),
        document.getElementById('container')
        )

><Hello/>==>React.createElement(Hello,...)

基本可以得知，React中组件就是一个对象<br/>

##React组件
###React组件介绍
在React中组件是第一元素，是React的基础，一个React应用就是由多个组件组合而成的<br/>

###创建一个组件
创建一个组件，需要调用React.createClass方法，传入一个对象作为参数，且必须有一个render方法，render方法则返回整个组件的结构，render的返回值有且只能有一个组件实例，或者返回null/false，当返回null/false时，React内部通过<noscript/>标签替换！<br/>

    var MyComponte=React.createClass({
        render:function(){
            return <p></p>
        }
        });

####组件的命名空间
React.createClass方法生成的组件实际上是一个JavaScript对象，也可以设置命名控件组件<br/>

    MyComponent.SubComponent=React.createClass({....})
    MyComponent.SubComponent.Sub=React.createClass({....})

组件较多的情况下，可以借助命名空间的方式解决组件名称冲突的问题<br/>

####无状态组件
还有一种创建组件的方式是通过一个普通函数返回组件<br/>

    function StatesComponent(props){
        return <div>Hello {props.name}</div>
    }

这样创建的组件内部不会维护状态，React内部也不会有一个对应的组件实例，并且也没有生命周期`hook`

###组件的渲染
当创建好了一个组件以后，将这个组件渲染到页面上一共有两个步骤<br/>
* 首先页面中需要有一个父级容器来容纳这个组件，事先在HTML中定义一个元素，并设置id属性
* JSX中调用ReactDOM.render方法，第一个参数为需要插入的组件，第二个参数就是之前定义的这个父级DOM元素


    <script type="text/babel">
        //自定义组件
        var MyComponent=React.createClass({
            render:function(){
                return <p>.....</p>;
            }
            });
            //调用render方法渲染组件到容器中
            ReactDOM.render(
                <MyComponent/>,
                document.getElementById('app')
                );
    </sctipt>

有一些问题需要注意:<br/>
* React可以渲染组件到多个元素，并且是任意位置的元素
* 程序运行中可以动态的调用render方法
* 数据修改后不需要重新调用render方法

###组件状态State
React中每个组件可以存储自己的当前状态，React的渲染结果是由组件属性和状态共同决定的，状态和属性(props)的区别是：<br/>
* 状态维护在组件的内部
* 属性是由外部控制

控制状态的API分比为：<br/>
* this.state:组件的当前状态
* getInitialState：获取组件的初始状态，在组件加载的时候会被调用一次，返回值给this.state作为初始值
* this.setState:
    * 组件状态改变时，可以通过this.setState修改状态
    * setState支持按需修改，也就是说可以传入一个key只修改一个状态
    * 每次调用setState会导致重渲染调用render方法
    * 直接修改state 不会重新渲染组件

    var Switch=React.createClass({
        //定义Switch组件的初始状态，初始为关闭
        getInitialState:function(){
            return {
                open:false
            }
        },
        //通过this.state获取当前状态
        render:function(){
            console.log('render switch component');
            var open=this.state.open;
            return <label className="switch">
                <input type="checkbox" checked={open}/>
            <label/>
        },
        //通过setState修改状态
        //setState 过后会 React 会调用 render 方法重渲染 input 组件状态
        toggleSwitch:function(){
            var open=this.state.open;
            this.setState({
                open:!open
                });
        }
        })

###组件属性props
React可以传递属性给组件，方法和html中差不多，可以通过this.props获取组件属性<br/>
控制属性的API：<br/>
* this.props:获取属性值
* getDefaultProps:获取默认属性对象，会被调用一次，返回值会被缓存起来，当组件被 实例化后如果传入的属性没有值，则会返回默认值
* this.props.children:子节点属性
* propsTypes:属性类型检查
