import React, { Component } from 'react';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Email: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail=this.handleChangeEmail.bind(this);
  }

  handleChangeEmail(event){
    this.setState({
      Email : event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addtoMailingList({
      Email: this.state.Email,
      status: 'subscribed'
    })
    .then((data) => {
      console.log(data, 'data');
    })
  }

  addtoMailingList(newUser) {
    return new Promise(function(resolve, reject){
      function reqListener(){
        console.log('new user', this);
        if (this.status === 200) {
          resolve();
        } else {
          reject(this.status);
        }
      }
      let oReq = new XMLHttpRequest();
      oReq.open('OPTIONS', 'https://bbfmplcut3.execute-api.us-east-1.amazonaws.com/dev', true);
      oReq.setRequestHeader('Content-type', 'application/json');
      oReq.addEventListener('load', reqListener)
      oReq.send(JSON.stringify(newUser))
    })
    .then(() => {
      console.log("success");
    })
    .catch(() => {
      console.log("Failed");
    })
  }

  render() {
    return (
      <div id="contact-us-container">
        <h1>Contact Us</h1>
          <div className="generalForm">
          <form onSubmit={this.handleSubmit}>
            <input type='text' onChange={this.handleChangeEmail} placeholder="Email Address" name='Email' />
            <input className="contact-us-submit" type="submit" value="Contact Us" />
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
