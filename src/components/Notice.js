import React, { Component } from 'react';

class Notice extends Component {

  render(props) {
    const status = 'success';
    return(
      <div className="notice-container">
        {status ? (
          <div className="notice">
            <p>Your message was sent!</p>
          </div>
        ) : (
          <div className="notice">
            <p>Your message was not sent</p>
          </div>
        )}
      </div>
    );
  }
}

export default Notice;
