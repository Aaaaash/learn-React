var React=require('react/addons');
var jasmineReact=require('jasmine-react-helpers');
var TestUtils=React.addons.TestUtils;
var Card=require('./Card.jsx');
describe('Card component',function(){
    var card;
    var content;
    beforeEach(function(){
        var blocks=[
            {
                title:"Obama",
                subtitle:"president",
                text:"I love Aerica",
                links:[{
                    url:"www.baidu.com",
                    name:"按钮1"
                },
                {
                    url:"www.qq.com",
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
        content={
            blocks:blocks,
            header:header,
            footer:footer,
            listgroup:listgroup,
            imgTop:imgTop,
            imgBottom:imgBottom
        };
        card=TestUtils.renderIntoDocument(<Card content={content}></Card>);
    });
    afterEach(function(){
        React.unmountComponentAtNode(React.findDOMNode(card))
    });
    it('should exist',function(){
        expect(!!React.findDOMNode(card)).toBe(true);
    });
    it('should have correct structure',function(){
        var content=React.findDOMNode(card).textContent;
        expect(content).toContain("Obama");
        expect(content).toContain("总统");
        expect(content).toContain("统计");
        expect(content).toContain("黑人总统");
        expect(React.findDOMNode(card).getElementsByTagName("img")[1].alt).toContain("奥巴马头像");
    })
})
