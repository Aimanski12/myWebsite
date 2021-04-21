import {CheckFunction} from './checker'

export const SendEmail = (function () {
  
  const _send = (name, clientemail, subject, mes) => {
    // get local date and time of users local location
    const date = CheckFunction.getTime('date')
    const time = CheckFunction.getTime('timeOfVisit')

    // send email with smtp.
    Email.send({
        Host: "smtp.gmail.com",
        Username: "My Email",
        Password: "My Password",
        To: clientemail,
        Cc: 'CC Email',
        From: "Aiman Adlawan - adlawanaiman@gmail.com",
        Subject: `Thank you ${name} for your inquiry.`,
        Body: `
      <html style="font-size: 16px; font-family: Lucida Console">
      <h3>Hello ${name},</h3>
      <p>Thank you so much for reaching out to me. It fascinates me so much to be involved with great and amazing people like you.</p>

      <p>I am currently out of my office as of this time. Be assured I will get back to you on the very soonest time that I can to see how I can add value to your company and organization.</p>

      <p>For the time being, you can visit <a href='https://aimanadlawan.com'>my website link</a> and check out some of my projects and portfolios.</p>

      <p>Have a good day ahead.</p>
      </br>
      <p>Cheers!</p>
      <p style="color: #126985; line-height: 16px; font-weight: bold">Aiman Adlawan</p>
      <i style="color: #04C2FF">Web/App Developer</i><br>
      <i style="color: #04C2FF">Bensenville, Illinios, 60106</i>
      <br>
      <br>
      <hr>
      <br>
      <p>To: Aiman Adlawan</p>
      <p>From: ${name} - ${clientemail}</p>
      <p>Date: ${date} at ${time}<p>
      <p style="color: #126985; line-height: 16px; font-weight: bold">Subject: ${subject}</p>
      <p>${mes}</p>
      </html>`
      }
    )
  }

  return {
    send(name, clientemail, subject, mes) {
      return _send(name, clientemail, subject, mes)
    }
  }
})()

