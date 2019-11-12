var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('e967d7216a9b36ab5e29f6359d10ed0-us5');

mailchimp.get({path:'/lists/'},function (error,result) {
  console.log(JSON.stringify(result))
})