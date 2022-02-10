const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rileyjones2627@gmail.com',
    pass: 'uchiha2627'
  }
});

var mailOptions = {
  from: 'rileyjones2627@gmail.com',
  to: 'ashleykannemeyer2@gmail.com',
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