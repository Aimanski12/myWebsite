import $ from 'jquery'
import {SaveToFirebase} from './saveToFirebase'

export const Form = (function(){

  // alert message
  const _alertMsg = (text, color) => {
    const mesAlert = $('.mes-alert span')[0]
    mesAlert.style.color = color
    mesAlert.innerHTML = text
  }

  
  // changes the alert back to original
  const _isTyping = () => {
    const mesAlert = $('.mes-alert span')[0]
    if(mesAlert.innerHTML != '* required') {
      _alertMsg('* required', '#126985')
    }
  }
  
  const _saveMessageToFirebase = async (data) => {
    // save data to firbase including the data
    const response = await SaveToFirebase.saveDataToFirebase('messages', data)
    // return the status code of the response
    return response
  }

  // validates form and see if everything input value is valid!
  const _validateForm = async () => {
    const name = $("input[name='name']")[0]
    const email = $("input[name='email']")[0]
    const message = $("textarea")[0]

    // chec if name is a valid string
    if(checkString(name.value)) {
      name.focus()
      _alertMsg('Please enter your name!', '#FF1919')
      return false
      // check if email is valid
    } else if (!checkEmail(email.value)) {
      email.focus()
      _alertMsg('Please enter your email!', '#FF1919')
      return false
      // check if message is valid string
    } else if (checkString(message.value)) {
      message.focus()
      _alertMsg('Please enter your message!', '#FF1919')
      return false
    } else {
      // return true if everything is right
      return true
    }
  }

  // format name to capitalize first letter
  const _formatName = (name) => {
    let b = []
    // split name to array
    let a = name.split(' ')
    // loop to the text
    for (let x = 0; x < a.length; x++) {
      let c = a[x].split('')
      c[0] = c[0].toUpperCase()
      b.push(c.join(''))
    }
    return b.join(' ')
  }

  
  return {
    alertMsg(text, color){
      return _alertMsg(text, color)
    },
    _isTyping() {
      return _isTyping()
    },
    saveMessageToFirebase (data) {
      return _saveMessageToFirebase(data)
    },
    validateForm(){
      return _validateForm()
    }, 
    formatName(name){
      return _formatName(name)
    }
  }
})()


// check if email is valid
const checkEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


// check if the string is not empty
// returns true id empty
const checkString = (str) => {
  return(!str || /^\s*$/.test(str));
}


