import React, { Component } from 'react';
import $ from 'jquery';
import { DRAFT_MANUAL_ENDPOINT } from '../constants';
import Notice from './Notice';

class DraftManualAd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      sentStatus: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const options = {
      url: DRAFT_MANUAL_ENDPOINT,
      data: JSON.stringify({
        emailAddress: this.state.emailAddress
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    $.post(options)
      .then(data => {
        if (data.statusCode === 200) {
          this.setState({
            sentStatus: 'sent',
            emailAddress: ''
          });
        } else {
          this.setState({ sentStatus: 'error' });
        }
      })
      .catch(() => this.setState({ sentStatus: 'error' }));
  }

  render() {
    return (
      <div className="draft-manual-ad-container">
        <div className="draft-manual-ad-inner">
          <h2>Better Odds Fantasy Football Draft Guide 2017</h2>
          <p>The valuable insight that you need to dominate your draft</p>

          <div className="draft-manual-form-container">
            <form onSubmit={this.handleSubmit}>
              {(() => {
                switch (this.state.sentStatus) {
                  case 'sent':
                    return (
                      <Notice
                        status="We've received your request and will email you your draft manual!"
                        statusClass="success-message"
                        noticeContainerClass="draft-manual-ad-container-success"
                      />
                    );
                  case 'error':
                    return (
                      <Notice
                        status="An error occured, please try again, or contact us"
                        noticeContainerClass="draft-manual-ad-container-error"
                        statusClass="error-message"
                      />
                    );
                  default:
                    return '';
                }
              })()}
              <input
                type="text"
                onChange={this.handleChange}
                placeholder="Email Address to Receive Your Draft Manual"
                name="emailAddress"
                value={this.state.emailAddress}
                className="input"
              />
              <input
                className="contact-button"
                type="submit"
                value="For Free? Sure!"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default DraftManualAd;
