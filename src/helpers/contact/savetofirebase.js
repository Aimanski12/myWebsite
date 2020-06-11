import axios from 'axios'
import {UAParser} from 'ua-parser-js'
import {mn, dt} from './formsData'

export const savetofirebase = async (vals) => {
  getParser()
  let saved = false
  let subj = vals[2].value
  let data = {
    name : vals[0].value,
    email : vals[1].value,
    subj: subj === '' ? 'Hi!' : subj,
    message: vals[3].value,
    user: getParser()
  }
  const d = getTime()
  let url = `https://aimanadlawansite.firebaseio.com/messages/${d.y}/${d.m}/${d.dy}_${d.de}.json`
  await axios.post(url, data)
    .then(res => {
      saved = true
    })
    .catch(err => {
      console.log(err)
    })
  return await saved
}

// function to get time
const getTime = () => {
  const date = new Date()
  return {
    y: date.getFullYear(),
    m: mn[date.getMonth()],
    dy: date.getDate(),
    de: dt[date.getDay() - 1],
  }
}

const getParser = () => {
  let parser = new UAParser()
  return parser.getResult()
}