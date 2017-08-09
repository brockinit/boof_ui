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
    return new Promise((resolve, reject) => {
      function reqListener(){
        console.log(this, 'this');
      }
      let oReq = new XMLHttpRequest();
      oReq.open('POST', 'https://us16.api.mailchimp.com/3.0/lists/96d472b10a/members')
      oReq.setRequestHeader('Access-Control-Allow-Origin':'*', 'Authorization', 'Basic ' + btoa('username:cb2a47bd962ed39eced32293b05af3a4-us16'), 'Content-Type', 'application/json')
      oReq.addEventListener('load', reqListener)
      oReq.send({ email_address : "takamiya.andrea2@gmail.com", status : "subscribed" })
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
