import { useState } from 'react'
import {formData, mes} from './formsData'
import {savetofirebase} from './savetofirebase'


// function to place the input value state
export const useForm = () => {
  const [state, setState ] = useState(formData)
  const inputChange = (e, f) => {
    e.preventDefault()
    if(!e){
      let newState = state.map(s => {
        return { ...s, value: ''}
      })
      setState(state => ([...newState]))
    } else {
      // this is update all input values
      e.persist()
      let newState = state.map(s => {
        if(s.name === f.name) { s.value = e.target.value }
        return s
      })
      setState(state => ([...newState]))
    }
  }
  return [state, inputChange]
}


// function to add focus to the input
export const focus = (i) => {
  let input = document.querySelector(`input[name='${i}'`)
  if (i === 'message') {
    input = document.querySelector(`textarea[name='${i}'`)
  }
  input.focus()
  alertMes(i)
}

// function for the alert message when input has error
const alertMes = (n, t) => {
  const p = document.querySelector('.messageAlert')
  p.style.color = 'gray'
  if(!t){
    stM(p, 'red', mes.com + ` ${n}`)
  } else {
    if (n === 'prs') stM(p, 'gray', mes.prs)
    if (n === 'suc') stM(p, 'green', mes.suc)
    if (n === 'inv') stM(p, 'red', mes.inv)
    if (n === 'erc') stM(p, 'red', mes.erc)
  }
}

// function to set the alert message
const stM = (p, c, m) => {
  p.innerHTML = m
  p.style.color = c
}

// validate if all inputs are not empty strings
const  checkArray = (vals) => {
  let a = false
  for(let x = 0; x < 3; x++){
    if (vals[0].name === 'name' && vals[0].value === '') {
      focus('name')
      break
    } else if (vals[1].name === 'email' && vals[1].value === '') {
      focus('email')
      break
    } else if (vals[3].name === 'message' && vals[3].value === '') {
      focus('message')
      break
    } else {
      a = true
    }
  }
  return a
}

// function to validate in each input has valid values
export const submit = async (e, vals) => {
  let s = false
  e.preventDefault()
  // check first if all values are not empty strings
  if(checkArray(vals)){
    // set a process message on the screen
    alertMes('prs', true)
    
    let saved = await savetofirebase(vals)
    if(saved) { s = true }
    if(!saved) alertMes('erc', true)
  }
  return await s
}
