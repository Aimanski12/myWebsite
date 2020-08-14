
// check if a string is empty
const ifEmptyString = /^\s*\S+.*/
// check if a string contains a number
const stringContainsNumber = /\d/
// check if email is valid
const isEmailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// function to check if the name input is invalid
export function checkValue(input, value) {
  let valueIsNotEmpty = ifEmptyString.test(value)
  let valueHasNumber = stringContainsNumber.test(value)
  let emailIsValid = isEmailValid.test(value)

  if (input === 'name') {
    if (!valueIsNotEmpty) return 'nameIsEmpty'
    if (valueHasNumber) return 'hasNumber'
  } else if (input === 'email') {
    if (!valueIsNotEmpty) return 'emailIsEmpty'
    if (!emailIsValid) return 'emailIsInvalid'
  } else if (input === 'message') {
    if (!valueIsNotEmpty) return 'messageIsEmpty'
  }
}

// function that will check for the value returned from 
// the validation and then return an object for the state
export function stateUpdateValue(val) {
  if (val === 'nameIsEmpty') {
    return state('Please enter your full name.', 'alert', 'name')
  } else if (val === 'hasNumber') {
    return state('Please enter a valid name', 'alert', 'name')
  } else if (val === 'emailIsEmpty') {
    return state('Please enter your email.', 'alert', 'email')
  } else if (val === 'emailIsInvalid') {
    return state('Please provide a valid email.', 'alert', 'email')
  } else if (val === 'messageIsEmpty') {
    return state('Please enter your message.', 'alert', 'message')
  } else if (val === 'process') {
    return state('Processing . . .', 'warning', null)
  } else if (val === 'failed') {
    return state('Aww... It looks like there is a problem with your connection.', 'warning', null)
  }
}

// this function is a sette. it will return an object
// that will be used to update the state. 
function state(text, alert, input) {
  return {
    alert: {
      message: text,
      color: alert
    },
    activeInput: input
  }
}
