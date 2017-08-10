const Mailchimp = require('mailchimp-api-v3')

module.exports.handler = (event, context, callback) => {

const API_KEY = process.env.API_KEY;

const mailchimp = new Mailchimp(API_KEY);

  mailchimp.request({
    method: 'post',
    path: '/lists/96d472b10a/members',
    body : {
      // email_address : event,
      status : "subscribed"
    }
  })
  .then(function(results) {
    console.log(results, 'response');
    console.log(event, 'event');
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(results)
    });
  })
  .catch(function (err) {
    callback(err);
  });
}
