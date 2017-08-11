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
    const sent = this.state.sentStatus;

    return (
      <div className="contact-us-container">
        <div className="contact-us-inner">
        {sent ? (<Notice />) : (null)}
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <input type='text' onChange={this.handleChangeEmail} placeholder="Email Address" name='emailAddress' className="input" />
              <input type='text' onChange={this.handleChangeFirstName} placeholder="First Name" name='firstName' className="input" />
              <input type='text' onChange={this.handleChangeLastName} placeholder="Last Name" name='lastName' className="input" />
              <input className="button contact-button" type="submit" value="Contact Us" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
