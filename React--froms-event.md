##表单组件
---
React中的表单组件大致可分为两类
* `受控组件`
* `非受控组件`
`受控组件`简单来说就是它的值由React进行管理，而`非受控组件`的值则由原生DOM进行管理

###受控组件
---
例如一个单行文本框
```
<input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
{/*省略部分代码*/}
handleChange:function (e){
  this.setState({
    inputValue:e.target.value
  })
}
```
　　这段代码不难看出，这个文本框的`value`是由`this.state.inputVlaue`来决定的。同时这个组件也被绑定了一个`onChange`事件处理函数，当这个文本框中的值发生改变时，会触发`onChange`事件，`onChange`事件会调用`this.setState`函数将文本框的值赋值给`this.state.inputValue`。看起来似乎有点多此一举，其实这就是受控组件最大的特点，它的值严格来说是由`this.state.inputValue`决定的，也就是被这个`onChange`所管理。
　　
基于受控组件的这个原理，我们可以简单实现类似于AngularJS的`双向数据绑定`
```
var MyComponents=React.createClass({
  getInitialState:function (){
    return{
      inputValue:""
    }
  },
  render:function (){
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
        <p>Hello  {this.state.inputValue} !</p>
      </div>
    )
  },
  handleChange:function (e){
     this.setState({
       inputValue:e.target.value 
     })
  }
});
```
![双向数据绑定](http://upload-images.jianshu.io/upload_images/1010300-959a0ba3d8c7098b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
　　使用`React Developer Tools`调试这个demo，会发现当文半框输入内容之后会引起`State`的改变，文本框本身的value属性以及下方的p标签的值也会随着改变。

###非受控组件
---
`非受控组件`就很简单了，还是以这个文本框为例
```
<input type="text" defaultValue="hello!"/>
```
　　其实就是把原本的`value`属性写为`defaultValue`并且不将它与`state`绑定，React完全不管理值的输入过程，实际开发过程中还是强烈建议使用受控组件，它可以更方便的管理表单组件

##事件系统
---
　　React对原生的事件系统也进行了封装，在React中的事件对象实际上是一个跨浏览器的`虚拟事件对象`。它拥有和原生事件对象相同的属性和方法，例如阻止事件冒泡`stopPropagation()`以及阻止默认事件`preventDefault()`,不同的是这个事件对象不存在兼容性问题，可以放心使用。如果有特殊需求，要取得浏览器原生事件对象，则可以使用`nativeEvent`属性来获取。

还是上面这个例子：
```
{/*省略部分代码*/}
handleChange:function (e){
   var ev=e.nativeEvent;
     this.setState({
        {/*这样写也是完全没有问题的*/}
       inputValue:ev.target.value 
     })
  }
```
关于React支持的一些事件可以在官方文档查询   　[事件系统](http://reactjs.cn/react/docs/events.html#form-events)
