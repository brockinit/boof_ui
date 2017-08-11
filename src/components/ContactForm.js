import React, { Component } from 'react';
import $ from 'jquery';
import { MAILCHIMP_ENDPOINT } from '../constants';
import Notice from './Notice';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      contactUsNote: '',
      sentStatus: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
    this.handleChangeLastName=this.handleChangeLastName.bind(this);
    this.handleChangeContactUsNote=this.handleChangeContactUsNote.bind(this);
  }

  handleChangeEmail(event){
    this.setState({
      emailAddress : event.target.value
    })
  }

  handleChangeFirstName(event){
    this.setState({
      firstName : event.target.value
    })
  }

  handleChangeLastName(event){
    this.setState({
      lastName : event.target.value
    })
  }

  handleChangeContactUsNote(event){
    this.setState({
      contactUsNote : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
      const options = {
        url: MAILCHIMP_ENDPOINT,
        data: JSON.stringify({
          emailAddress: this.state.emailAddress,
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          contactUsNote: this.state.contactUsNote
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      };
      $.post(options).then((data) => {
        if (data.statusCode === 200) {
          this.setState({
            sentStatus: 'sent',
            emailAddress: '',
            firstName: '',
            lastName: '',
            contactUsNote: ''
          })
        } else {
          this.setState({
            sentStatus: 'error'
          })
        }
      })
    }

  render() {
    return (
      <div className="contact-us-container">
        <div className="contact-us-inner">
        {(() => {
          switch (this.state.sentStatus) {
            case "": return "";
            case "sent": return <Notice
              status="Your message has been sent! We'll contact you shortly"
              class="success-message"
              noticeContainerClass="notice-container-success" />;
            case "error": return <Notice
              status="An error occured, please try again"
              noticeContainerClass="notice-container-error"
              class="error-message" />;
            default: return "";
          }
        })()}
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleChangeEmail} placeholder="Email Address" name='emailAddress' value={this.state.emailAddress} className="input" />
              <input type='text' onChange={this.handleChangeFirstName} placeholder="First Name" name='firstName' value={this.state.firstName} className="input" />
              <input type='text' onChange={this.handleChangeLastName} placeholder="Last Name" name='lastName' value={this.state.lastName} className="input" />
              <input type='text' onChange={this.handleChangeContactUsNote} placeholder="Write us a note" name='contactUsNote' value={this.state.contactUsNote} className="message" />
              <input className="contact-button" type="submit" value="Contact Us" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
