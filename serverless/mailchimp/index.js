const Mailchimp = require('mailchimp-api-v3')

module.exports.handler = (event, context, callback) => {

const API_KEY = process.env.API_KEY;

const mailchimp = new Mailchimp(API_KEY);
  mailchimp.get({
    path: 'lists'
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
