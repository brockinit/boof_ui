const Mailchimp = require('mailchimp-api-v3')

module.exports.handler = (event, context, callback) => {

const API_KEY = process.env.API_KEY;

const mailchimp = new Mailchimp(API_KEY);
  mailchimp.post({
    path: '/lists/96d472b10a/members',
    body : {
      email_address : "takamiya.andrea2@gmail.com",
      status : "subscribed"
    }
  })
  .then(function(results) {
    console.log(results, 'response');
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(results)
    });
  })
  .catch(function (err) {
    callback(err);
  });
}
