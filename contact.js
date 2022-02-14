const express = require('express');
const app = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config ();


app.post('/',(req,res) =>{ 
    const{name,email,message} =req.body;
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
    port: 465,
    secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
      });
      
      let mailOptions = {
        from: email,
        to: 'ashleykannemyer2@gmail.com',
        subject: 'From node',
        text: `
        Email:${email}
        Name: ${name}
        Message: ${message}


        
        `,
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.status(400).send({msg:"error"+error})
        } else {
          console.log('Email sent: ' + info.response);
          res.send({msg:"Message Sent "})
        }
      });
    
    
});


module.exports = app;