import React, {useState, useContext, useEffect} from 'react';

import Input from './Input'
import {AppData} from '../../../context'
import {Helpers} from '../../../utils/common/index'

export default function Message({data}) {
  const {SetAppState} = useContext(AppData)
  const [value, setValue] = useState({
    email: "",
    mes: "",
    name: "",
    subject: "Just say'n Hi!",
  })

  useEffect(() => {
    // add smtp script to the body to initialize smtp
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
  })

  // update the value of input everytime
  // input changes
  const updateValue = (e, input) => {
    // check if for typing to change input value
    Helpers.Form._isTyping()
    setValue({
      ...value,
      [input]: e.target.value
    })
  }

  const submitMessage = async (e) => {
    e.preventDefault()
    // set alert message
    Helpers.Form.alertMsg('Sending...', 'green')
    // validate form if all values are valid
    const isValid = await Helpers.Form.validateForm()

    if(isValid) {
      // check if message is saved to firebase
      const status = await Helpers.Form.saveMessageToFirebase(value)
      if(status === 200 ) {
        // timeout to set a time gap to open the confirmation modal
        setTimeout(() => {
          const formattedName = Helpers.Form.formatName(value.name)

          // open modal
          SetAppState.setMessageModalState({isOpen: true, sender: formattedName})
          // send smtp email
          Helpers.SendEmail.send(formattedName, value.email, value.subject, value.mes)
          // reset state input values
          setValue({ name: "", email: "", subject: "Just say'n Hi!", mes: "" })
          // reset the alert message
          Helpers.Form.alertMsg('* required', '#126985')
        }, 2000)
      } else {
        // notify user if there is a problem with the connection
        Helpers.Form.alertMsg('Connection error...', '#FF1919')
      }
    }
  }

  
  return (
    <section className='message-form content-center'>
      <h2 className="font-1 s3a">Your Message Here</h2>
      <form onSubmit={(e)=> submitMessage(e)}>
        <Input
          change={(e, val)=> updateValue(e, val)}
          data={data}
          inputValues={value} />
        <div className="mes-alert">
          <span className='font-1 s9a'>* required</span>
        </div>
        <button 
          className='font-1 s7a'
          type='submit'>Send</button>
      </form>
    </section>
  );
}
