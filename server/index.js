require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  // origin: ['http://localhost:3000', 'http://localhost:3000'],
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.post('/api/sendemail', cors(corsOptions), async (req, res) => {
  console.log(req.body)
  const {email, name, message} = req.body;
  try {
    sendEmail(email, name, message)
    // console.log('status')
  } catch(e) {
    // console.log('error')
    res.status(422).send(e.message);
  }
})

function sendEmail(email, name, message) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'adlawanaiman@gmail.com',
      pass: 'MyOfficial38account'
    }
  });

  var mailOptions = {
    from: 'adlawanaiman@gmail.com',
    to: email,
    cc: 'adlawanaiman@gmail.com',
    subject: `Hi ${name},`, 
    html: `
        <h3> Hello ${name}, </h3>
        <p>Thank you for so much for reaching out to me. It is my great pleasure to be contacted by great people like you and I hope one day we collaborate on something valuable for your community and organization.</p>

        <p>I am currently out of office as of this time and rest assured I will get back to you very soon to see how I can be of help to amazing people like you.</p>

        <p>For the time being, you can visit <a href='https://aimanadlawan.com'>my website link</a> and check out some of my projects and portfolios.</p>

        <p>Once again, thank you so much for your message.</p>
        </br>
        <p>Cheers</p>
        <p>Aiman Adlawan</p>
        <i>Web/App Developer</i><br>
        <i>Bensenville, Illinios, 60106</i>
        <br>
        <br>
        <hr>
        <br>
        <p>To: Aiman Adlawan</p>
        <p>From: ${email}, ${name}</p>
        <p>Date: May 1, 2021, Friday<p>
        <p>${message}</p>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log('sayop', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`> Connected to ${PORT}`));
