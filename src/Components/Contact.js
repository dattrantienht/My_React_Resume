import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContactForm from './ContactForm'
class Contact extends Component {
  
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <FontAwesomeIcon id="letter-icon" icon={['fas','envelope']} size="5x"/>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
              <span><a href="mailto:dattrantienht@gmail.com">dattrantienht@gmail.com</a></span>
            </div>
          </div>
        </Fade>

        <div className="row">
          {/* <Slide left duration={1000}>
            <ContactForm/>
          </Slide> */}

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  {name}
                  <br />
                  {street} <br />
                  {city}, {state} {zip}
                  <br />
                  <span>{phone}</span>
                  
                </p>
              </div>

            </aside>
          </Slide>
        </div>
        
      </section>
    );
  }
}

export default Contact;
