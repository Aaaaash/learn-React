var React=require('react');
var MainContact=React.createClass({
    render:function(){
        return (
            <div className="main-contact">
                <div className="contact-box">
                    <h2 className="contact-title sm-tit">Contact</h2>
                    <p className="contact-text">
                        Elementum sem parturient nulla quam placerat viverra mauris non cum elit tempus ullamcorper dolor. Libero rutrum ut lacinia donec curae mus. Eleifend id porttitor ac ultricies lobortis sem nunc orci ridiculus faucibus a consectetur. Porttitor curae mauris urna mi dolor.
                    </p>
                    <form className="contact-form" action="javascript:;" method="post">
                        <input className="contact-input" type="text" name="name" placeholder="Name" />
                        <input className="contact-input" type="email" name="email" placeholder="Email" />
                        <textarea name="message" placeholder="Message" className="contact-textarea"></textarea>
                        <input type="button" value="Send Message" className="contact-button"/>
                    </form>
                </div>
            </div>
        )
    }
});
module.exports=MainContact;
