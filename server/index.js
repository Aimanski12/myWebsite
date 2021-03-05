

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}

app.use(bodyParser.json());
app.use(cors(corsOptions));


app.post('/api/sendemail', async (req, res) => {
  const { email, name} = req.body;
  try {

    // await sendConfirmationEmail({email, name})
    sendEmail('asdf')
  } catch(e) {
    res.status(422).send(e.message);
  }
})



function sendEmail(message) {
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
    cc: 'adlawanaiman@gmail.com',
    to: 'luis.fernando12T@yahoo.com',
    subject: 'Hi Ryan.', 
    html: `
        <h3> Hello Henry Lukas, </h3>
        <p>Thank you for so much for reaching out to me. It is my great pleasure to be contacted by great people like you and I hope one day we collaborate on something useful for your community and organization.</p>

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
        <br>
        <p>To: Aiman Adlawan</p>
        <p>From: Henry Lukas</p>
        <p>Date: May 1, 2021, Friday<p>
        <p>Hi Aiman. Just wanna know if you are interested in doing this.</p>`
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
