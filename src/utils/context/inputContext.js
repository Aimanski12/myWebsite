import React, { useState, createContext } from 'react'
import {checkValue, stateUpdateValue} from '../common/inputValidation'
import {saveMessageToFirebase} from '../sessiondata/saveMessage'

// export InputContext 
export const InputData = createContext()

// the props is received and has a value that references
// the input data sets and returns data for the message form
export function InputDataContext (props) {

  const [state, setState] = useState({
    inputValue: ['', '', '', ''],
    alert: {
      message: '* required',
      color: 'go'
    },
    activeInput: null
  })

  // this function updates the state
  function setInputState (newState) {
    setState({
      ...state,
      ...newState
    })
  }
  
  // this function updates each values 
  // in the array of input values
  function setvalues(val, i, input){
    let values = state.inputValue
    values[i] = val
    setInputState({ 
      inputValue: values,
      activeInput: input
    })
  }

  // handle the submit event by validating if every
  // values in the input are valid. if not we will return 
  // a object that we be updated on the state. 
  async function submitHandler () {
    let values = state.inputValue
    let name = checkValue('name', values[0])
    let email = checkValue('email', values[1])
    let message = checkValue('message', values[3])

    if(name === 'nameIsEmpty'){
      setInputState(stateUpdateValue(name))
    } else if(name === 'hasNumber'){
      setInputState(stateUpdateValue(name))
      return 
    } else if (email === 'emailIsEmpty') {
      setInputState(stateUpdateValue(email))
    } else if (email === 'emailIsInvalid') {
      setInputState(stateUpdateValue(email))
    } else if (message === 'messageIsEmpty') {
      setInputState(stateUpdateValue(message))
    } else {
      setInputState(stateUpdateValue('process'))
      let result = await saveMessageToFirebase(values)
      if(result) {
        setTimeout(()=> {
          setInputState({
            inputValue: ['', '', '', ''],
            alert: {
              message: `Thank you for your message. I'll get back to you soon.`,
              color: 'go'
            },
            activeInput: null
          })
        }, 2500)
      } else {
        setTimeout(() => {
          setInputState(stateUpdateValue('failed'))
        }, 2500)
      }
    }
  }

  return (
    <InputData.Provider value={{
        alert: state.alert, 
        inputValue: state.inputValue,
        activeInput: state.activeInput,
        setValues: setvalues,
        submitHandler: submitHandler}}>
      {props.children}
    </InputData.Provider>
  )
}
