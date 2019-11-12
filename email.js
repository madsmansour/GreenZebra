var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'one',
  auth: {
    user: 'greenzebra@sainsh.com',
    pass: 'Eepahwai1-'
  }
});

var mailOptions = {
  from: 'greenzebra@sainsh.com',
  to: 'greenzebra@sainsh.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});