'use strict';

module.exports.handler = (event, context, callback) => {
    console.log(event, 'event');
    // const API_KEY='cb2a47bd962ed39eced32293b05af3a4-us16';
    callback(
      console.log('hello world');
      // var mailchimp = new Mailchimp(API_KEY);
      //   mailchimp.request({
      //     method : 'get',
      //     headers: {
      //       'Authorization', 'Basic ' + btoa('username:cb2a47bd962ed39eced32293b05af3a4-us16'), 'Content-Type', 'application/json'
      //     },
      //   }).then(function(results) {
      //     console.log(results);
      //   })
      //   .catch(function (err) {
      //     console.log(err);
      //   });
    );
}
