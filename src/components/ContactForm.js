import React, { Component } from 'react';
import $ from 'jquery';
import { CONTACT_ENDPOINT } from '../constants';
import Notice from './Notice';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      contactUsNote: '',
      sentStatus: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
      url: CONTACT_ENDPOINT,
      data: JSON.stringify({
        emailAddress: this.state.emailAddress,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        contactUsNote: this.state.contactUsNote,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    $.post(options)
      .then(data => {
        if (data.statusCode === 200) {
          this.setState({
            sentStatus: 'sent',
            emailAddress: '',
            firstName: '',
            lastName: '',
            contactUsNote: '',
          });
        } else {
          this.setState({
            sentStatus: 'error',
          });
        }
      })
      .catch(() => this.setState({ sentStatus: 'error' }));
  }

  render() {
    return (
      <div className="contact-us-container">
        <div className="contact-us-inner">
          {(() => {
            switch (this.state.sentStatus) {
              case 'sent':
                return (
                  <Notice
                    status="Your message has been sent! We'll contact you shortly"
                    statusClass="success-message"
                    noticeContainerClass="notice-container-success"
                  />
                );
              case 'error':
                return (
                  <Notice
                    status="An error occured, please try again"
                    noticeContainerClass="notice-container-error"
                    statusClass="error-message"
                  />
                );
              default:
                return '';
            }
          })()}
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Email Address"
                name="emailAddress"
                value={this.state.emailAddress}
                className="input"
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                className="input"
              />
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                className="input"
              />
              <textarea
                onChange={this.handleChange}
                placeholder="Write us a note"
                name="contactUsNote"
                value={this.state.contactUsNote}
                className="message"
              />
              <input
                className="contact-button"
                type="submit"
                value="Contact Us"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
