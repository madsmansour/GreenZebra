var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('1e967d7216a9b36ab5e29f6359d10ed0-us5');
var express = require('express');
var server = express();

mailchimp.get({path:'/lists/3bb1070e53/segments/235833/members'},function (error,result) {
  var emails = [];
  for(var i = 0; i<result.members.length; i++){

    emails[i] = result.members[i].email_address;
  }
  console.log(emails)
})



server.listen(3333, function() {
  console.log('Listening on port 3333!')
}) 

