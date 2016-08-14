　　React是由数据驱动的，简单来说React中最重要的`props`以及`state`服务的最终对象都是数据。props作为数据传输的管道，state则是数据存放的地址。数据可以由人为添加上去，也可以由Ajax动态获取，创建一个简单的React应用，我们首先要拿到的是数据。
　　假设我们需要创建一个类似于微博评论列表的组件
![示例](http://upload-images.jianshu.io/upload_images/1010300-426b1ac035aa703c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

```
//首先我们拿到一段包含微博用户名以及评论内容的数据
var comment=[
{
  user:"Anarchus",
  context:"让一盘而已，EG无敌"
},
{
  user:"Tatsyta33",
  context:"EG，强，无敌！ 破产哥，我这波奶的可以吧"
},
{
  user:"长得又黑又胖又丑的人",
  context:"eg让一追二，苏跳跳卫冕成功，骑到中国队脖子上打"
}
];
var  CommentBox=React.createClass({
  render:function (){
    var data=this.props.commentData.map(function (item,index){
        return (
            <CommentItem user={item.user} context={item.context}></CommentItem>
            {/*遍历并绑定*/}
        )
    });
    return (
      <div className="comment-box">
          <ul>
            {/*这里存放循环绑定后的评论内容子组件*/}
            {data}
          </ul>
      </div>
    );
  }
});
var CommentItem=React.createClass({
    {/*评论子组件*/}
    render:function (){
        return (
            <li>
                <p>{this.props.user}: <span>{this.props.context}</span></p>
            </li>
        )  
    }
});
ReactDOM.render(
   {/*将comment通过props传递给子组件*/}
  <CommentBox commentData={comment}/>,
  document.getElementById('app')
);
```
　　上面这个例子中，我们先拿到了评论列表这个组件的一些基本数据。在应用程序一开始，创建了一个`CommentBox`组件，它包含一个用div标签包裹着的ul无序列表，而ul中的li则单独提取出来作为一个子组件被创建，也就是下面的`CommentItem`。而在父组件中并没有直接引用子组件，而是循环将数据绑定后再插入到ul中。
　　`CommentBox`组件的render方法中，定义了一个data变量，这个变量通过调用`this.props.commentData`从而获得了一开始传入的comment属性，然后再使用数组的map方法遍历其中的每个元素，将得到的`item`再使用`props`传递给子组件`CommentItem`。
　　而这时data变量的结果实际上就是一组循环绑定数据之后的`CommentItm`组件，再将它直接插入到ul列表中，这样就实现了数据的单向绑定。
