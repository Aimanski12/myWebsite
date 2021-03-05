import React, {useState, useContext} from 'react';
import Input from './Input'
import {Helpers} from '../../../utils/common/index'
import {AppData} from '../../../context'


import {useMutate} from 'restful-react'

export default function Message({data}) {
  const {SetAppState} = useContext(AppData)
  const {mutate: sendEmail, loading, error} = useMutate({
    verb: 'POST',
    path: 'sendemail'
  })

  const [value, setValue] = useState({
    name: "",
    email: "",
    subject: "Just say'n Hi!",
    message: ""
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
    Helpers.Form.alertMsg('Sending...', 'green')
    const isValid = await Helpers.Form.validateForm()
    
    // Helpers.Form.sendEmail(value)

    sendEmail({name: 'Luis Fernando', email: 'luis.fernando12T@yahoo.com'})

    // if(isValid) {
    //   const status = await SaveToFirebase.saveMessageData(value)
    //   if(status === 200 ) {
    //     setTimeout(() => {
    //       SetAppState.setMessageModalState({isOpen: true, sender: value.name})
    //       setValue({
    //         name: '',
    //         email: '',
    //         subject: "Just say'n Hi!",
    //         message: ''
    //       })
    //       Helpers.Form.alertMsg('* required', '#126985')
    //     }, 3000)

    //   } else {
    //     Helpers.Form.alertMsg('Connection error...', '#FF1919')
    //   }
    // }
  }
  
  return (
    <section className='message-form content-center'>
      <h2 className="font-1 s3a">Your Message Here</h2>

      <form onSubmit={(e)=> submitMessage(e)}>
        <Input data={data}
          inputValues={value}
          change={(e, val)=> updateValue(e, val)}/>
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
