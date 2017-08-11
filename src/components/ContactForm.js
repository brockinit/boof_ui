import React, { Component } from 'react';
import $ from 'jquery';
import { MAILCHIMP_ENDPOINT } from '../constants';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      firstName: '',
      lastName: '',
      sentStatus: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
    this.handleChangeFirstName=this.handleChangeFirstName.bind(this);
    this.handleChangeLastName=this.handleChangeLastName.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
      const options = {
        url: MAILCHIMP_ENDPOINT,
        data: JSON.stringify({
          emailAddress: this.state.emailAddress,
          firstName: this.state.firstName,
          lastName: this.state.lastName
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      };
      $.post(options).then(() => {
        this.setState({
          sentStatus: 'sent'
        })
      }).catch((err) => {
        console.log('error', err);
        })
    }

  render() {
    return (
      <div id="contact-us-container">
        <h1>Contact Us</h1>
          <div className="generalForm">
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChangeEmail} placeholder="Email Address" name='emailAddress' />
            <input type='text' onChange={this.handleChangeFirstName} placeholder="First Name" name='firstName' />
            <input type='text' onChange={this.handleChangeLastName} placeholder="Last Name" name='lastName' />
            <input className="contact-us-submit" type="submit" value="Contact Us" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
