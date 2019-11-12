var express = require('express');
var server = express();
var Mailchimp = require('mailchimp-api-v3');
var mailchimp = new Mailchimp('1e967d7216a9b36ab5e29f6359d10ed0-us5');

server.get("/GreenZebra",function(req,res){
    res.sendFile('C:/Users/Mads/Desktop/Web development/GreenZebra/index.html');
})

server.post("/GreenZebra/lists/3bb1070e53/",function(req,res){
    res.send(req.body)
})

server.listen(3333,function() {
    console.log("Listening on port 3333")
})

server.post('/',function(req,result) { console.log(JSON.stringify(req.body))
   /* mailchimp.post('/lists/3bb1070e53/members',{
      email_address:req.body.email, status:'subscribed'
    }).then(function(result) {
      console.log(result);
    }) */
  })