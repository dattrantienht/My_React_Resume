import React, { Component } from "react";
import emailjs, { init } from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import $ from "jquery";
init("user_Bvg7bYvsJQJ6X7Xl2aeM9");

class ContactForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      allowSubmit: false
    };

     this.handleChangeName = this.handleChangeName.bind(this);
     this.handleChangeEmail = this.handleChangeEmail.bind(this);
     this.handleChangeSubject = this.handleChangeSubject.bind(this);
     this.handleChangeMessage = this.handleChangeMessage.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     this.onSuccess = this.onSuccess.bind(this);
     this.onExpired = this.onExpired.bind(this);
  }

  onSuccess(recaptchaToken) {
    this.setState({allowSubmit: true});
    console.log(recaptchaToken, "<= your recaptcha token")
  }
  
  onExpired() {
    this.setState({allowSubmit: false});
    console.log("Captcha expired");
  }

  render() {
    return (
        <div className="eight columns">
            <form onSubmit={this.handleSubmit} id="contactForm" name="contactForm">
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      size="35"
                      id="contactName"
                      name="contactName"
                      value={this.state.name}
                      onChange={this.handleChangeName}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      size="35"
                      id="contactEmail"
                      name="contactEmail"
                      value={this.state.email}
                      onChange={this.handleChangeEmail}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      
                      type="text"
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      value={this.state.subject}
                      onChange={this.handleChangeSubject}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      required
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      name="contactMessage"
                      value={this.state.message}
                      onChange={this.handleChangeMessage}
                    ></textarea>
                  </div>
                  <div id="captcha-box">
                    <ReCAPTCHA
                      theme="dark"
                      sitekey="6LdoFUoeAAAAAFZoKYTK3GEf8onng0hPaA9cT0HF"
                      onChange={this.onSuccess}
                      onExpired={this.onExpired}
                    />
                  </div>
                  <div>
                    <button className="submit" type="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
            </form>
            <div id="message-warning"> error </div>
            <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
            </div>
        </div>
      
    );
  }

  handleChangeName(event) {
    this.setState({
        name: event.target.value,
    })
  }
  handleChangeEmail(event) {
    this.setState({
        email: event.target.value,
    })
  }
  handleChangeSubject(event) {
    this.setState({
        subject: event.target.value,
    })
  }
  handleChangeMessage(event) {
    this.setState({
        message: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.allowSubmit){
      $("#image-loader").fadeIn();
      console.log('data: ' + this.state.name + ' ' + this.state.email + ' ' + this.state.subject + ' ' + this.state.message);
    
      var templateParams = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message
      }
    
      emailjs.send('default_service', 'template_xgr1csm', templateParams)
      .then(() => {
        $("#image-loader").fadeOut();
        $("#message-warning").hide();
        $("#contactForm").fadeOut();
        $("#message-success").fadeIn();
      }, error => {
        $("#image-loader").fadeOut();
        $("#message-warning").html(error);
        $("#message-warning").fadeIn();
      }); 
    } else {
      alert("Please complete the captcha");
    }
    
  }
}

export default ContactForm;


