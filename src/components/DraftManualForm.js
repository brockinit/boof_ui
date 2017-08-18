import React, { Component } from 'react';
import $ from 'jquery';
import { MAILCHIMP_ENDPOINT } from '../constants';
import Notice from './Notice';

class DraftManualForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
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
      url: MAILCHIMP_ENDPOINT,
      data: JSON.stringify({
        emailAddress: this.state.emailAddress,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    $.post(options).then(data => {
      if (data.statusCode === 200) {
        this.setState({
          sentStatus: 'sent',
          emailAddress: '',
        });
      } else {
        this.setState({
          sentStatus: 'error',
        });
      }
    });
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
                className="contact-button"
                type="submit"
                value="For free? Sure!"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DraftManualForm;
