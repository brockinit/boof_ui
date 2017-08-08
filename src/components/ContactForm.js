import React, { Component } from 'react';

class ContactForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.getAllPosts = this.getAllPosts.bind(this);
  }

  getAllPosts() {

    return new Promise((resolve, reject) => {
      function reqListener(){
        resolve(JSON.parse(this.responseText));
      }
      let oReq = new XMLHttpRequest();
      oReq.open('GET', 'https://us16.api.mailchimp.com/3.0')
      oReq.setRequestHeader('Access-Control-Allow-Origin':'*', 'Authorization', 'Basic ' + btoa('username:cb2a47bd962ed39eced32293b05af3a4-us16'), 'Content-Type', 'application/json')
      oReq.addEventListener('load', reqListener)
      oReq.send()
    })
  }

  componentWillMount(){
    this.getAllPosts()
    .then((data) => {
      this.setState({
        posts: data
      })
    })
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default ContactForm;
