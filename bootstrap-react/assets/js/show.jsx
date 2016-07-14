var React=require('react/addons');
var Card=require('./Card.jsx');
var blocks=[
    {
        title:"Obama",
        subtitle:"president",
        text:"I love Aerica",
        links:[{
            url:"http://www.baidu.com",
            name:"按钮1"
        },
        {
            url:"http://www.qq.com",
            name:"按钮2"
        }]
    }
];
var header="总统";
var footer="由XXX统计";
var listgroup=["我是第一届黑人总统","我喜欢React"];
var imgTop={
    url:"http://f.hiphotos.baidu.com/image/h%3D200/sign=a31c9680a1773912db268261c8198675/730e0cf3d7ca7bcb5f591712b6096b63f624a8e9.jpg",
    alt:"奥巴马头像"
};
var imgBottom={
    url:"http://f.hiphotos.baidu.com/image/h%3D200/sign=a31c9680a1773912db268261c8198675/730e0cf3d7ca7bcb5f591712b6096b63f624a8e9.jpg",
    alt:"奥巴马头像"
};
var content={
    blocks:blocks,
    header:header,
    footer:footer,
    listgroup:listgroup,
    imgTop:imgTop,
    imgBottom:imgBottom
};
React.render(<Card content={content}></Card>,document.body);
